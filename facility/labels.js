import * as THREE from 'three';
import {SHOW_PLACEHOLDER_PEOPLE,PEOPLE_NODES} from './people.js';
import {CSS2DRenderer,CSS2DObject} from 'three/addons/renderers/CSS2DRenderer.js';
export async function createLabels(scene,model,camera,host,status,data){
 const labels=(await(await fetch('./labels.json')).json()).filter(l=>SHOW_PLACEHOLDER_PEOPLE||!PEOPLE_NODES.includes(l.node)), renderer=new CSS2DRenderer();
 renderer.domElement.className='object-labels';renderer.domElement.setAttribute('aria-label','Object labels');host.append(renderer.domElement);
 const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.classList.add('label-leaders');host.prepend(svg);
 const toggle=document.getElementById('labels-toggle');let enabled=true,active=null,expanded=null,hovered=null,rested=null,pinned=null,restX=0,restY=0,openTimer=0,closeTimer=0,lastW=0,lastH=0;const sizes=new Map();
 // Which label is open, in order of precedence: (1) the label the pointer is resting on; (2) else the label the visitor clicked or tapped,
 // which stays open until it is clicked again, another label is clicked, Escape is pressed or the scene itself is pressed; (3) else the label
 // with keyboard focus. "Resting" means the pointer has stayed within REST_PX for OPEN_MS, so a pointer passing over labels opens nothing.
 // A label closes CLOSE_MS after the pointer leaves it, so a pointer at its edge cannot make it blink.
 const OPEN_MS=110,SWITCH_MS=40,CLOSE_MS=170,REST_PX=4,focusedId=()=>{const a=document.activeElement;return a&&a.classList&&a.classList.contains('object-label')&&!a.hidden?a.dataset.label:null;};
 const apply=()=>{expanded=rested||pinned||focusedId();};
 function arm(){clearTimeout(openTimer);if(hovered&&hovered!==rested)openTimer=setTimeout(()=>{if(hovered){rested=hovered;apply();}},rested?SWITCH_MS:OPEN_MS);}
 function disarm(){clearTimeout(closeTimer);closeTimer=setTimeout(()=>{if(hovered!==rested){rested=null;apply();}},CLOSE_MS);}
 const clear=()=>{clearTimeout(openTimer);clearTimeout(closeTimer);expanded=null;hovered=null;rested=null;pinned=null;};
 host.addEventListener('pointerdown',e=>{if(pinned&&!(e.target.closest&&e.target.closest('.object-label'))){pinned=null;apply();}});
 if(document.fonts&&document.fonts.addEventListener)document.fonts.addEventListener('loadingdone',()=>sizes.clear());
 const entries=labels.map(l=>{const node=model.getObjectByName(THREE.PropertyBinding.sanitizeNodeName(l.node));if(!node)throw Error('Missing label anchor '+l.id);const box=new THREE.Box3().setFromObject(node),point=box.isEmpty()?node.getWorldPosition(new THREE.Vector3()):box.getCenter(new THREE.Vector3());
 const wrap=document.createElement('div'),button=document.createElement('button'),name=document.createElement('span'),line=document.createElement('span');button.className='object-label'+(l.kind==='room'?' room-name':'');button.dataset.label=l.id;name.textContent=l.name;line.textContent=l.line;line.className='label-detail';line.id=l.id+'-detail';line.hidden=true;button.append(name,line);button.setAttribute('aria-expanded','false');button.setAttribute('aria-controls',line.id);wrap.append(button);const obj=new CSS2DObject(wrap);obj.position.copy(point);scene.add(obj);
 const leader=document.createElementNS(svg.namespaceURI,'line');svg.append(leader);
 button.addEventListener('mouseenter',e=>{hovered=l.id;restX=e.clientX;restY=e.clientY;arm();});button.addEventListener('mousemove',e=>{if(hovered!==l.id||rested===l.id)return;if(Math.abs(e.clientX-restX)>REST_PX||Math.abs(e.clientY-restY)>REST_PX){restX=e.clientX;restY=e.clientY;arm();}});button.addEventListener('mouseleave',()=>{if(hovered===l.id)hovered=null;clearTimeout(openTimer);disarm();});button.addEventListener('focus',()=>{if(button.matches(':focus-visible'))pinned=null;apply();});button.addEventListener('blur',apply);button.addEventListener('click',e=>{clearTimeout(openTimer);if(pinned===l.id&&e.detail>0){pinned=null;rested=null;hovered=null;button.blur();}else pinned=l.id;apply();});button.addEventListener('keydown',e=>{if(e.key==='Escape'){clear();button.blur();}});return{...l,button,line,wrap,obj,leader,point};});
 const floors=Object.entries(data.anchors).filter(([,a])=>a.node.startsWith('FLOOR_')).map(([id,a])=>({id,box:new THREE.Box3().setFromObject(model.getObjectByName(a.node))}));
 const aliases={arrival:'lobby',accelerator:'accelerator_hall',beam_line:'accelerator_hall',beam_port:'target_station',treatment_couch:'treatment_room',control_console:'control_room',ct_scanner:'imaging',water_phantom:'qa_lab'};
 function canonical(id){return aliases[id]||id;}
 toggle.onclick=()=>{enabled=!enabled;toggle.textContent=enabled?'Labels on':'Labels off';toggle.setAttribute('aria-pressed',String(enabled));if(!enabled)clear();};
 const overlap=(a,b)=>a.left<b.right+7&&a.right>b.left-7&&a.top<b.bottom+7&&a.bottom>b.top-7;
 // Label sizes are measured once per state and reused, and styles are written only when they change. The scene is still drawn every frame.
 const size=(e,lineHidden,room)=>{const k=e.id+(room?'|room|':'|overview|')+(lineHidden?0:1);let s=sizes.get(k);if(!s){e.line.hidden=lineHidden;s=[e.button.offsetWidth,e.button.offsetHeight];if(s[0]&&s[1])sizes.set(k,s);}return s;};
 const put=(el,prop,v)=>{if(el.style[prop]!==v)el.style[prop]=v;},attr=(el,k,v)=>{v=String(v);if(el.getAttribute(k)!==v)el.setAttribute(k,v);};
 function update(target){const rect=host.getBoundingClientRect(),w=rect.width,h=rect.height;if(w!==lastW||h!==lastH){sizes.clear();lastW=w;lastH=h;}renderer.setSize(w,h);svg.setAttribute('viewBox',`0 0 ${w} ${h}`);renderer.render(scene,camera);
 let room=active;if(!active&&camera.position.distanceTo(target)<35){const inside=floors.filter(f=>target.x>=f.box.min.x&&target.x<=f.box.max.x&&target.z>=f.box.min.z&&target.z<=f.box.max.z);if(inside.length)room=canonical(inside[0].id);}else if(!active)room=null;
 status.labelRoom=room;status.labelsEnabled=enabled;document.getElementById('room-pins').style.visibility='hidden';host.classList.toggle('label-overview',!room);
 const show=enabled&&!host.hidden;
 const occupied=[...document.querySelectorAll('.view-controls,.notice,#canvas-tour,#card')].filter(e=>!e.hidden&&(e.id!=='card'||e.open)).map(e=>{const r=e.getBoundingClientRect();return{left:r.left-rect.left,right:r.right-rect.left,top:r.top-rect.top,bottom:r.bottom-rect.top};});
 // The layout never depends on which label is open: an open label grows in place, on top of its neighbours, so nothing moves under the pointer.
 const panels=occupied.slice(),rank=e=>e.priority+(!room&&e.kind!=='room'?1000:0);const ordered=[...entries].sort((a,b)=>rank(b)-rank(a));let visible=0;
 for(const e of ordered){const hide=()=>{e.wrap.style.visibility='hidden';e.button.hidden=true;e.leader.style.display='none';attr(e.button,'aria-expanded',false);if(hovered===e.id||rested===e.id||pinned===e.id||expanded===e.id){if(hovered===e.id)hovered=null;if(rested===e.id)rested=null;if(pinned===e.id)pinned=null;apply();}};if(!show||(room?e.room!==room:!e.overview)){hide();continue;}const p=e.point.clone().project(camera);if(p.z<=-1||p.z>=1||Math.abs(p.x)>1.1||Math.abs(p.y)>1.1){hide();continue;}
 const x=(p.x+1)*w/2,y=(1-p.y)*h/2,isOpen=expanded===e.id;e.button.hidden=false;let lineHidden=!room,[bw,bh]=size(e,lineHidden,room),found=null;
 const candidates=()=>{const local=[[18,-bh-18],[-bw-18,-bh-18],[18,18],[-bw-18,18],[18,-bh/2],[-bw-18,-bh/2],[-bw/2,-bh-65],[-bw/2,65]];if(!room){for(const r of [70,105,140,175])for(let k=0;k<12;k++){const a=k*Math.PI/6;local.push([Math.cos(a)*r-bw/2,Math.sin(a)*r-bh/2]);}}return local;};
 for(let pass=0;pass<2&&!found;pass++){if(pass===1){if(lineHidden)break;lineHidden=true;[bw,bh]=size(e,true,room);}for(const [dx,dy] of candidates()){const left=x+dx,top=y+dy,b={left,right:left+bw,top,bottom:top+bh};if(left<12||b.right>w-12||top<12||b.bottom>h-12||occupied.some(o=>overlap(b,o)))continue;found=b;break;}}
 if(!found){hide();continue;}occupied.push(found);visible++;let box=found;
 // Open label: keep the corner nearest its object where it was and grow away from the object, then keep it inside the view. The grown box always contains the closed one.
 if(isOpen){const [ew,eh]=size(e,false,room),toLeft=(found.left+found.right)/2<x,toTop=(found.top+found.bottom)/2<y,grow=(l,t)=>{let left=l?found.right-ew:found.left,top=t?found.bottom-eh:found.top;left=Math.max(12,Math.min(left,w-12-ew));top=Math.max(12,Math.min(top,h-12-eh));return{left,top,right:left+ew,bottom:top+eh};};
 // Of the four ways to grow, take the first that stays clear of the on-screen panels; prefer growing away from the object.
 const ways=[[toLeft,toTop],[toLeft,!toTop],[!toLeft,toTop],[!toLeft,!toTop]].map(([l,t])=>grow(l,t));const covered=b=>panels.reduce((t,o)=>t+Math.max(0,Math.min(b.right,o.right)-Math.max(b.left,o.left))*Math.max(0,Math.min(b.bottom,o.bottom)-Math.max(b.top,o.top)),0);box=ways.find(b=>!panels.some(o=>overlap(b,o)))||ways.reduce((p,c)=>covered(c)<covered(p)?c:p);e.wrap.style.zIndex='100000';}
 const finalHidden=isOpen?false:lineHidden;if(e.line.hidden!==finalHidden)e.line.hidden=finalHidden;attr(e.button,'aria-expanded',isOpen);put(e.wrap,'visibility','visible');put(e.button,'left',(box.left-x)+'px');put(e.button,'top',(box.top-y)+'px');put(e.leader,'display','');attr(e.leader,'x1',x);attr(e.leader,'y1',y);attr(e.leader,'x2',Math.max(box.left,Math.min(x,box.right)));attr(e.leader,'y2',Math.max(box.top,Math.min(y,box.bottom)));}
 status.visibleLabels=visible;
 }
 status.labelCount=entries.length;
 return{update,select(id){active=canonical(id);clear();},reset(){active=null;clear();}};
}
