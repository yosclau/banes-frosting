(function(){
  var header=document.querySelector('.nav'),btn=document.querySelector('.menu-toggle');
  if(!header||!btn)return;
  function set(open){header.classList.toggle('menu-open',open);btn.setAttribute('aria-expanded',open?'true':'false');btn.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');}
  btn.addEventListener('click',function(){set(!header.classList.contains('menu-open'));});
  header.querySelectorAll('nav a').forEach(function(a){a.addEventListener('click',function(){set(false);});});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false);});
})();

// v5: Instagram gallery — on touch devices the first tap reveals the like count, the second opens the post.
(function(){
  var items=document.querySelectorAll('.ig-item');
  var touch=window.matchMedia('(hover: none)').matches;
  if(!touch||!items.length) return;
  items.forEach(function(a){
    a.addEventListener('click',function(e){
      if(!a.classList.contains('is-open')){
        e.preventDefault();
        items.forEach(function(o){o.classList.remove('is-open');});
        a.classList.add('is-open');
      }
    });
  });
  document.addEventListener('click',function(e){
    if(!e.target.closest('.ig-item')) items.forEach(function(o){o.classList.remove('is-open');});
  });
})();
