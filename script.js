const galleries={
  pedidos:['assets/smartpedidos_feed_1.jpg','assets/smartpedidos_feed_2.jpg','assets/smartpedidos_feed_3.jpg'],
  cloud:['assets/cloud_feed_1.jpg','assets/cloud_feed_2.jpg','assets/cloud_feed_3.jpg']
};
const current={pedidos:0,cloud:0};
function showSlide(name,index){
  const images=galleries[name]; current[name]=(index+images.length)%images.length;
  const preview=document.getElementById(name+'-preview');
  if(preview){preview.classList.add('is-changing');preview.src=images[current[name]];setTimeout(()=>preview.classList.remove('is-changing'),170);}
  document.querySelectorAll(`[data-gallery="${name}"] button[data-slide]`).forEach((b,i)=>b.classList.toggle('active',i===current[name]));
  const count=document.querySelector(`[data-gallery="${name}"] .slide-count`);if(count)count.textContent=`PLACA 0${current[name]+1} DE 03`;
  document.querySelectorAll(`[data-thumb="${name}"]`).forEach((b,i)=>b.classList.toggle('active',i===current[name]));
  const download=document.querySelector(`#${name}-preview`)?.closest('.campaign-art')?.parentElement?.querySelector('.asset-link');
  if(download){download.href=images[current[name]];download.textContent='Descargar placa actual ↓';}
}
document.querySelectorAll('[data-gallery] button[data-slide]').forEach(b=>b.addEventListener('click',()=>showSlide(b.closest('[data-gallery]').dataset.gallery,Number(b.dataset.slide))));
document.querySelectorAll('[data-thumb]').forEach(b=>b.addEventListener('click',()=>showSlide(b.dataset.thumb,Number(b.dataset.index))));
document.querySelectorAll('[data-prev]').forEach(b=>b.addEventListener('click',()=>showSlide(b.dataset.prev,current[b.dataset.prev]-1)));
document.querySelectorAll('[data-next]').forEach(b=>b.addEventListener('click',()=>showSlide(b.dataset.next,current[b.dataset.next]+1)));

const pillars=[
 {label:'EJE 01 · EDUCACIÓN',tag:'tag-purple',title:'Que cada franquicia conozca todo lo que puede hacer.',desc:'Videos cortos, tutoriales y recorridos por funcionalidades para que franquiciantes, franquiciados y equipos puedan descubrir el potencial de la plataforma y resolver dudas frecuentes.',points:['Microtutoriales paso a paso','Reels de funciones concretas','Preguntas frecuentes'],kpi:'Reproducciones completas · Guardados · Consultas',photo:'assets/foto_equipo_pedidos.jpg',alt:'Equipo de un local revisando una tablet'},
 {label:'EJE 02 · AUTORIDAD',tag:'tag-cyan',title:'Mostrar el valor de SmartFran con historias creíbles.',desc:'Contenido que construya confianza con casos de éxito, testimonios, historias de clientes y resultados concretos. La prueba social debe apoyarse en datos aprobados y experiencias reales, nunca en cifras inventadas.',points:['Casos de éxito y aprendizajes','Testimonios con autorización','Resultados explicados en contexto'],kpi:'Compartidos · Guardados · Alcance cualificado · Consultas',photo:'assets/foto_equipo_franquicia.jpg',alt:'Personas analizando información juntas en una laptop'},
 {label:'EJE 03 · CONVERSIÓN',tag:'tag-orange',title:'Transformar una funcionalidad en un próximo paso.',desc:'Piezas que parten de un problema reconocible, explican cómo lo aborda la herramienta y cierran con una invitación clara a contactar al equipo o pedir una demo.',points:['Problema → solución → beneficio','Antes y después de implementar','CTA a contacto o solicitud de demo'],kpi:'Clics · Consultas · Solicitudes de demo',photo:'assets/foto_pago_omnicanal.jpg',alt:'Cliente y colaboradora en una experiencia de pago'}
];
document.querySelectorAll('[data-pillar]').forEach(btn=>btn.addEventListener('click',()=>{
 const idx=Number(btn.dataset.pillar),p=pillars[idx];
 document.querySelectorAll('[data-pillar]').forEach((b,i)=>{b.classList.toggle('active',i===idx);b.setAttribute('aria-selected',String(i===idx));});
 const label=document.getElementById('pillar-label');label.textContent=p.label;label.className='campaign-tag '+p.tag;
 document.getElementById('pillar-title').textContent=p.title;document.getElementById('pillar-desc').textContent=p.desc;
 document.getElementById('pillar-kpi').textContent=p.kpi;
 const photo=document.getElementById('pillar-photo');photo.style.opacity='.3';setTimeout(()=>{photo.src=p.photo;photo.alt=p.alt;photo.style.opacity='1';},120);
 const list=document.getElementById('pillar-points');list.replaceChildren(...p.points.map(t=>{const s=document.createElement('span');s.textContent=t;return s;}));
}));

const stages=[
 {num:'01',kicker:'PLANIFICACIÓN EDITORIAL',title:'Definir antes de diseñar.',desc:'Acordar objetivos de comunicación, audiencias, campañas, fechas relevantes y combinación de los tres ejes. El contenido programable queda identificado con anticipación.',checks:['Calendario editorial','Briefs por pieza','Responsables y fechas','Prioridades del negocio']},
 {num:'02',kicker:'PRODUCCIÓN Y APROBACIÓN',title:'Dejar el mes siguiente listo.',desc:'Producir las piezas gráficas, redactar copys, editar videos, revisar enlaces y adaptar formatos. La idea es que el contenido programable llegue al inicio del mes ya aprobado o encaminado para programar.',checks:['Piezas gráficas listas','Copys y CTA revisados','Aprobaciones centralizadas','Programación y control de enlaces']},
 {num:'03',kicker:'PUBLICACIÓN Y OPTIMIZACIÓN',title:'Publicar, escuchar y reaccionar.',desc:'Con el contenido habitual programado, el foco diario puede estar en moderación, mensajes, novedades, urgencias y lectura de resultados para mejorar el siguiente ciclo.',checks:['Community management','Espacio para urgencias','Seguimiento de métricas','Ajustes con aprendizajes']}
];
document.querySelectorAll('[data-stage]').forEach(btn=>btn.addEventListener('click',()=>{
 const idx=Number(btn.dataset.stage),s=stages[idx];document.querySelectorAll('[data-stage]').forEach((b,i)=>b.classList.toggle('active',i===idx));
 document.getElementById('stage-number').textContent=s.num;document.getElementById('stage-kicker').textContent=s.kicker;document.getElementById('stage-title').textContent=s.title;document.getElementById('stage-desc').textContent=s.desc;
 document.getElementById('stage-checks').replaceChildren(...s.checks.map(t=>{const e=document.createElement('span');e.textContent='✓ '+t;return e;}));
}));

const weeks=[
 [
  ['LUN','Video educativo','Reel · Tutorial paso a paso','EDUCACIÓN'],['MIÉ','Idea útil para la red','Carrusel · Duda frecuente','AUTORIDAD'],['VIE','Funcionalidad en acción','Post · CTA a demo','CONVERSIÓN'],['EN APOYO','Historias interactivas','Encuesta, pregunta o recordatorio','COMUNIDAD']],
 [
  ['MAR','Tip operativo','Reel · Un flujo de trabajo','EDUCACIÓN'],['JUE','Voz de cliente','Testimonio validado / aprendizaje','AUTORIDAD'],['VIE','Problema → solución','Carrusel · Invitación a conversar','CONVERSIÓN'],['EN APOYO','Caja de preguntas','Recoger dudas para próximos tutoriales','COMUNIDAD']],
 [
  ['LUN','Función en 30 segundos','Video corto · Paso a paso','EDUCACIÓN'],['MIÉ','Detrás de la solución','Post · Equipo, proceso o experiencia','AUTORIDAD'],['VIE','Antes y después','Carrusel · CTA a demo','CONVERSIÓN'],['EN APOYO','FAQ en stories','Respuestas a preguntas repetidas','COMUNIDAD']],
 [
  ['MAR','Tutorial guardable','Carrusel o video · Cómo hacerlo','EDUCACIÓN'],['JUE','Historia de implementación','Caso validado con el cliente','AUTORIDAD'],['VIE','La funcionalidad en contexto','Reel · Contacto o demo','CONVERSIÓN'],['EN APOYO','Resumen de la semana','Encuesta + recordatorio de contacto','COMUNIDAD']]
];
function renderWeek(idx){document.querySelectorAll('[data-week]').forEach((b,i)=>b.classList.toggle('active',i===idx));const grid=document.getElementById('week-plan');grid.replaceChildren(...weeks[idx].map((data,i)=>{const div=document.createElement('div');div.className='week-day'+(i===3?' story-day':'');const d=document.createElement('span');d.textContent=data[0];const b=document.createElement('b');b.textContent=data[1];const sm=document.createElement('small');sm.textContent=data[2];const em=document.createElement('em');em.textContent=data[3];div.append(d,b,sm,em);return div;}));}
document.querySelectorAll('[data-week]').forEach(b=>b.addEventListener('click',()=>renderWeek(Number(b.dataset.week))));

// Subtle entrance treatment; the site remains fully readable when motion is disabled.
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');observer.unobserve(e.target);}}),{threshold:.09});
document.querySelectorAll('.campaign-block,.pillar-layout,.timeline,.stage-detail,.calendar-demo,.profile-grid,.proof-row').forEach(el=>observer.observe(el));
Object.keys(galleries).forEach(name=>showSlide(name,0));
renderWeek(0);
