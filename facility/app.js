const $=id=>document.getElementById(id);
const PUBLIC=document.documentElement.dataset.build==='public';
async function loadJSON(path){const r=await fetch(path);if(!r.ok)throw Error('Data unavailable');return r.json();}
try {
const data=await loadJSON('./cards.json');


const motion=matchMedia('(prefers-reduced-motion: reduce)');
const status=window.__facility3d={ready:false,selected:null,tour:-1,errors:[],anchors:{},mode:'still'};
const svgNS='http://www.w3.org/2000/svg';
let engine=null,loading=false,timer=null,returnFocus=null;
function el(tag,attrs,parent){const e=document.createElementNS(svgNS,tag);for(const [k,v] of Object.entries(attrs))e.setAttribute(k,v);parent.append(e);return e;}
function button(text,parent,fn){const b=document.createElement('button');b.textContent=text;b.onclick=fn;parent.append(b);return b;}
function para(label,text){const p=document.createElement('p');if(label){const b=document.createElement('b');b.textContent=label+' ';p.append(b);}p.append(document.createTextNode(text));$('card-body').append(p);}
function openCard(id){const s=PUBLIC?null:data.process.stages.find(x=>x.id===id),c=s||data.cards.find(x=>x.id===id);if(!c)return;if(!$('card').open)returnFocus=document.activeElement;status.selected=id;$('card-kicker').textContent=s?'TECHNICAL STAGE':'A PLACE IN THE JOURNEY';$('card-title').textContent=s?s.name:c.title;$('card-body').replaceChildren();if(s){para('Evidence:',s.tier);para('Status:',s.status);para('Tools:',s.tools);para('Input:',s.in);para('Output:',s.out);para('Still missing:',s.missing);}else{para('',c.text);para('What this explains:',c.teaches);para('What would be measured in an operating centre:',c.measured);if(!PUBLIC&&c.stages.length)for(const id of c.stages)button(data.process.stages.find(s=>s.id===id).name,$('card-body'),()=>openCard(id));}if(!$('card').open)$('card').show();$('card-title').focus();engine?.fly(s?s.anchor:id);}
$('close-card').onclick=()=>$('card').close();$('card').addEventListener('close',()=>returnFocus?.focus());document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('card').open){e.preventDefault();$('card').close();}});
for(const c of data.cards){const b=button(c.label,$('places'),()=>openCard(c.id));b.dataset.card=c.id;}

const photos=[['arrival_dusk','Arrival at dusk'],['arrival','The entrance'],['reception','Reception'],['treatment','The treatment room'],['treatment_wide','A wider treatment-room view'],['overview','The facility in its setting']];
for(const [name,label] of (document.documentElement.dataset.gallery==='off'?[]:photos)){const f=document.createElement('figure');const im=document.createElement('img');im.src=`assets/${name}-480.webp`;im.srcset=`assets/${name}-480.webp 480w, assets/${name}-960.webp 960w, assets/${name}-1600.webp 1600w`;im.sizes='(max-width: 720px) 45vw, 30vw';im.width=480;im.height=270;im.loading='lazy';im.decoding='async';im.alt=`Concept image: ${label} in the proposed BNCT Reference Centre`;f.append(im);const cap=document.createElement('figcaption');cap.textContent=label;f.append(cap);$('gallery').append(f);}

function position(id){return status.anchors[id]?.position||data.anchors[id].fallback;}

const pins=data.tour.map((t,i)=>{const b=button(t.title,$('room-pins'),()=>tour(i));b.setAttribute('aria-label','Visit '+t.title);return b;});

function drawMap(){const r=$('explore').getBoundingClientRect(),w=r.width,h=r.height,phone=w<=720;

 const occupied=[];const blocked=[$('card'),$('canvas-tour'),document.querySelector('.view-controls')].filter(e=>!e.hidden&&(e.id!=='card'||e.open)).map(e=>e.getBoundingClientRect());pins.forEach((pin,i)=>{const pos=engine?.project(position(data.tour[i].cards[0]));pin.hidden=!pos?.visible||!status.ready||(!PUBLIC&&!$('facility-toggle').checked)||(!PUBLIC&&$('map-toggle').checked);if(pin.hidden)return;pin.style.left=pos.x+'px';pin.style.top=pos.y+'px';const box=pin.getBoundingClientRect(),overlap=(a,b)=>a.left<b.right+6&&a.right>b.left-6&&a.top<b.bottom+6&&a.bottom>b.top-6;pin.hidden=box.left<r.left||box.right>r.right||box.top<r.top||box.bottom>r.bottom||blocked.some(b=>overlap(box,b))||occupied.some(b=>overlap(box,b))||(phone&&occupied.length>=3);if(!pin.hidden)occupied.push(box);});}

function publicSync(){ $('hero-copy').hidden=status.ready;status.mode=status.ready?'3d':'still';drawMap();}
const updateView=PUBLIC?publicSync:sync;
window.addEventListener('resize',drawMap);
async function start(){if(loading||status.ready)return;loading=true;$('explore-button').disabled=true;$('load-status').textContent='Opening the model…';try{const mod=await import('./viewer.js');engine=await mod.createViewer(data,status,drawMap,openCard);status.ready=true;status.readyMs=Math.round(performance.now());$('poster').classList.add('loaded');setTimeout(updateView,motion.matches?0:850);}catch(e){status.errors.push(String(e));$('load-status').textContent='The model could not load. The place cards remain available.';$('explore-button').disabled=false;}finally{loading=false;}}
$('explore-button').onclick=start;$('reset').onclick=()=>{engine?.reset();drawMap();};
function stopPlay(){clearInterval(timer);timer=null;$('tour-play').textContent='Play tour';}
function tour(i){status.tour=(i+data.tour.length)%data.tour.length;const t=data.tour[status.tour];$('tour-status').textContent=t.title;openCard(t.cards[0]);$('canvas-tour').hidden=false;$('canvas-step').textContent=t.title;for(const id of ['tour-back','tour-next','tour-end'])$(id).disabled=false;$('tour-play').disabled=motion.matches;$('tour-start').textContent='Restart guided tour';if(!engine){$('tour-status').textContent=t.title+' — '+data.cards.find(c=>c.id===t.cards[0]).teaches;}}
$('tour-start').onclick=()=>{tour(0);$('explore').scrollIntoView({block:'start'});};$('tour-next').onclick=()=>tour(status.tour+1);$('tour-back').onclick=()=>tour(status.tour-1);$('tour-play').onclick=()=>{if(motion.matches)return;if(timer)stopPlay();else{$('tour-play').textContent='Pause tour';timer=setInterval(()=>tour(status.tour+1),6500);}};$('tour-end').onclick=()=>{stopPlay();status.tour=-1;$('canvas-tour').hidden=true;$('card').close();$('tour-status').textContent='Tour ended.';for(const id of ['tour-back','tour-next','tour-end','tour-play'])$(id).disabled=true;};
motion.addEventListener('change',()=>{if(motion.matches)stopPlay();$('tour-play').disabled=motion.matches||status.tour<0;});
$('canvas-prev').onclick=()=>tour(status.tour-1);$('canvas-next').onclick=()=>tour(status.tour+1);$('canvas-close').onclick=()=>$('tour-end').click();
status.openCard=openCard;status.tourStep=tour;status.data=data;
updateView();
} catch(e) {document.getElementById('load-status').textContent='The tour could not load. The concept still image remains available. Please reload to try again.';document.getElementById('explore-button').disabled=true;}
