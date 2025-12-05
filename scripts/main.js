// Nav toggle
(function(){
  const toggle = document.querySelector('.nav__toggle');
  const nav = document.querySelector('.nav');
  const links = document.getElementById('nav-links');
  if(toggle && nav && links){
    toggle.addEventListener('click', ()=>{
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
      // show/hide links
      if(!expanded){ links.style.display = 'flex'; } else { links.style.display = ''; }
    });
  }
})();

// Tabs for schedule
(function(){
  const tabBtns = Array.from(document.querySelectorAll('.tab-btn'));
  const panels = Array.from(document.querySelectorAll('.tab-panel'));

  function activate(btn){
    tabBtns.forEach(b=>{
      const panel = document.getElementById(b.getAttribute('aria-controls'));
      if(b === btn){
        b.classList.add('is-active');
        b.setAttribute('aria-selected','true');
        if(panel){ panel.classList.remove('is-hidden'); }
      } else {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected','false');
        if(panel){ panel.classList.add('is-hidden'); }
      }
    });
  }

  tabBtns.forEach(btn=>{
    btn.addEventListener('click', ()=> activate(btn));
    btn.addEventListener('keydown', (e)=>{
      const idx = tabBtns.indexOf(btn);
      if(e.key === 'ArrowRight') tabBtns[(idx+1)%tabBtns.length].focus();
      if(e.key === 'ArrowLeft') tabBtns[(idx-1+tabBtns.length)%tabBtns.length].focus();
    });
  });
})();
