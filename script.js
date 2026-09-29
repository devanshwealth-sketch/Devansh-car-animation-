(function(){
  "use strict";

  /* =========================================================
     VELOCE LIVE DEMO LINK
     ---------------------------------------------------------
     Replace the text below with your VELOCE website's live
     URL once it's deployed (e.g. "https://veloce-demo.com").
     This is the ONLY place you need to edit for that button.
  ========================================================= */
  var VELOCE_LIVE_URL = "PASTE-YOUR-VELOCE-LIVE-URL-HERE";

  var PROJECTS = [
    {t:"VELOCE — Automotive Concept Site", tag:"3D web experience, Three.js", yr:"2026", role:"Designer & Developer", tools:"Three.js, HTML/CSS/JS", client:"Personal / concept project", cls:"t7", demoUrl: VELOCE_LIVE_URL,
      challenge:"Design and build a cinematic, fully responsive 3D website for a fictional luxury car brand, using real WebGL rather than static imagery.",
      approach:"Built a procedural low-poly car in Three.js with dynamic lighting, scroll-linked camera movement and mouse/touch interaction, optimized separately for mobile.",
      result:"A fast, dependency-light site that runs the full 3D experience on both desktop and mobile while staying under a tight performance budget."},
    {t:"Orbit — Brand Film", tag:"Character animation, 2:10 film", yr:"2026", role:"Lead Animator", tools:"After Effects, Illustrator", client:"Orbit Wearables", cls:"t1",
      challenge:"Orbit needed a launch film that explained a subscription hardware product without feeling like an instruction manual.",
      approach:"Built a cast of two simple vector characters and used exaggerated timing to carry the explanation through emotion rather than text.",
      result:"The film became the brand's primary launch asset, used across their site and paid social for the following quarter."},
    {t:"Northline — Title Sequence", tag:"Opening titles, streaming series", yr:"2025", role:"Motion Designer", tools:"Cinema 4D, After Effects", client:"Northline Studios", cls:"t2",
      challenge:"The show needed a title sequence that set a cold, procedural tone in under 30 seconds without spoiling plot details.",
      approach:"Designed a slow camera move through abstracted city geometry, letting negative space and a restrained palette do the storytelling.",
      result:"The sequence was shortlisted at a regional motion design festival for title design."},
    {t:"Fieldnotes — Explainer Series", tag:"3-part explainer, 2D/3D hybrid", yr:"2025", role:"Animator & Illustrator", tools:"Blender, After Effects", client:"Fieldnotes App", cls:"t3",
      challenge:"A three-part explainer series needed to make a fairly dry productivity feature feel approachable to a general audience.",
      approach:"Mixed flat 2D character work with simple 3D UI mockups, keeping a consistent visual language across all three episodes.",
      result:"Completion rate on the explainer series outperformed the client's previous onboarding video by a wide margin."},
    {t:"Halcyon — Music Video", tag:"Independent music video", yr:"2024", role:"Director & Animator", tools:"Procreate, After Effects", client:"Independent artist", cls:"t4",
      challenge:"A solo artist wanted a fully animated video on a near-zero budget, built around a single recurring visual motif.",
      approach:"Designed one adaptable character rig and reused it across a dozen backgrounds to stretch the production budget.",
      result:"The video screened at two small independent animation showcases and grew the artist's audience meaningfully."},
    {t:"Verdant — Campaign Loop", tag:"Social campaign, looping animation", yr:"2024", role:"Motion Designer", tools:"After Effects, Illustrator", client:"Verdant Foods", cls:"t5",
      challenge:"A seasonal campaign needed a set of seamless looping animations optimized for short-form social placements.",
      approach:"Built a modular system of loop-friendly assets that could be recombined quickly across multiple ad variants.",
      result:"The loop set was reused across three seasonal campaigns, cutting future production time significantly."},
    {t:"Redshift — Conference Opener", tag:"Event opener, 90 seconds", yr:"2023", role:"Lead Animator", tools:"Cinema 4D, After Effects", client:"Redshift Conf", cls:"t6",
      challenge:"An annual tech conference wanted a high-energy opener that felt distinct from typical corporate event intros.",
      approach:"Built a fast-cut sequence of abstract 3D forms synced tightly to a custom sound design pass.",
      result:"Attendee feedback specifically called out the opener as a highlight of the event program."}
  ];

  var grid = document.getElementById('grid');
  PROJECTS.forEach(function(p){
    var card = document.createElement('article');
    card.className = 'card reveal';
    card.innerHTML = '<div class="thumb"><div class="fill '+p.cls+'"></div></div>' +
      '<div class="info"><div><h3>'+p.t+'</h3><div class="tags">'+p.tag+'</div></div><div class="yr">'+p.yr+'</div></div>';
    card.addEventListener('click', function(){ openPanel(p); });
    grid.appendChild(card);
  });

  var overlay = document.getElementById('overlay');
  var demoBtn = document.getElementById('pDemo');

  function openPanel(p){
    document.getElementById('pTitle').textContent = p.t;
    document.getElementById('pRole').textContent = p.role;
    document.getElementById('pTools').textContent = p.tools;
    document.getElementById('pYear').textContent = p.yr;
    document.getElementById('pClient').textContent = p.client;
    document.getElementById('pThumb').className = 'thumb-lg ' + p.cls;
    document.getElementById('pChallenge').textContent = p.challenge;
    document.getElementById('pApproach').textContent = p.approach;
    document.getElementById('pResult').textContent = p.result;

    // Show the "VIEW LIVE DEMO" button only when this project has a real URL set.
    if (p.demoUrl && p.demoUrl.indexOf('PASTE-') !== 0) {
      demoBtn.href = p.demoUrl;
      demoBtn.classList.add('show');
    } else {
      demoBtn.classList.remove('show');
    }

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closePanel(){
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  document.getElementById('closeBtn').addEventListener('click', closePanel);
  overlay.addEventListener('click', function(e){ if(e.target === overlay) closePanel(); });
  window.addEventListener('keydown', function(e){ if(e.key === 'Escape') closePanel(); });

  var revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, {threshold:0.12});
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('in'); });
  }
})();
