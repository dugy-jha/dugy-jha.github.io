/* Layout is independent of the selected/previewed item. Hidden grid children reserve
   the maximum line height at every viewport and font size without measuring text. */
(() => {
 'use strict';
 document.querySelectorAll('[data-note-figure]').forEach(figure => {
  const items = [...figure.querySelectorAll('[data-item]')];
  const lines = [...figure.querySelectorAll('.nf-line')];
  let chosen = items[0], preview = null, timer = null, origin = null;
  function render() {
   const active = preview || chosen;
   items.forEach(b => { b.setAttribute('aria-pressed',String(b===chosen)); b.toggleAttribute('data-preview',b===preview); });
   lines.forEach(p => {const shown = active && p.id===active.dataset.item+'-line';p.toggleAttribute('data-shown',shown);p.setAttribute('aria-hidden',String(!shown));});
  }
  function clear() {clearTimeout(timer);preview=null;origin=null;render();}
  items.forEach(button => {
   button.addEventListener('click',() => {chosen=button;clear();});
   button.addEventListener('pointermove',event => {
    if(event.pointerType==='touch')return;
    if(!origin || Math.hypot(event.clientX-origin.x,event.clientY-origin.y)>3){
     clearTimeout(timer);origin={x:event.clientX,y:event.clientY};
     timer=setTimeout(()=>{preview=button;render();},180);
    }
   });
   button.addEventListener('pointerleave',clear);
   button.addEventListener('focus',() => {chosen=button;clear();});
  });
  const buttons=[...figure.querySelectorAll('button')];
  buttons.forEach((button,i)=>button.addEventListener('keydown',event=>{
   const direction={ArrowRight:1,ArrowDown:1,ArrowLeft:-1,ArrowUp:-1}[event.key];
   if(direction){event.preventDefault();buttons[(i+direction+buttons.length)%buttons.length].focus();}
  }));
  figure.querySelectorAll('[data-lane]').forEach(button => button.addEventListener('click',()=>{
   const lane=button.textContent;
   figure.querySelectorAll('[data-lane]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
   figure.querySelectorAll('[data-lane-name]').forEach(l=>l.toggleAttribute('data-dimmed',button.dataset.lane!=='0' && l.dataset.laneName!==lane));
  }));
  figure.querySelectorAll('[data-split]').forEach(button => button.addEventListener('click',()=>{
   const split=button.dataset.split==='0'?'test':'validation';
   figure.querySelectorAll('[data-split]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
   figure.querySelectorAll('.nf-row').forEach(row=>{
    row.querySelector('.nf-value').textContent=row.dataset[split];
    row.querySelector('i').style.left=row.dataset[split+'Width']+'%';
   });
  }));
  render();figure.classList.add('nf-ready');
  const details=figure.querySelector('details');if(details)details.open=false;
 });
})();
