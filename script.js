// ASPL Fusion — Pro Max JS (zero dependencies)
(function () {
  'use strict';

  // ================================================================
  // PARTICLE BACKGROUND (lightweight canvas, no Three.js)
  // ================================================================

  (function initParticles() {
    var canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var ctx = canvas.getContext('2d');
    var particles = [];
    var PARTICLE_COUNT = 80;
    var CONNECTION_DIST = 160;
    var mouseX = -9999;
    var mouseY = -9999;
    var raf;

    function resize() {
      var hero = canvas.closest('.hero') || canvas.parentElement;
      canvas.width = hero.clientWidth;
      canvas.height = hero.clientHeight;
      canvas.style.width = hero.clientWidth + 'px';
      canvas.style.height = hero.clientHeight + 'px';
    }

    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2.2 + 0.8,
        opacity: Math.random() * 0.5 + 0.3
      };
    }

    function init() {
      resize();
      particles = [];
      for (var i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(createParticle());
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (var i = 0; i < particles.length; i++) {
        for (var j = i + 1; j < particles.length; j++) {
          var dx = particles[i].x - particles[j].x;
          var dy = particles[i].y - particles[j].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            var alpha = (1 - dist / CONNECTION_DIST) * 0.25;
            ctx.strokeStyle = 'rgba(59,191,191,' + alpha + ')';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // Mouse proximity glow
        var mdx = particles[i].x - mouseX;
        var mdy = particles[i].y - mouseY;
        var mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 180) {
          var glow = (1 - mDist / 180) * 0.4;
          ctx.fillStyle = 'rgba(59,191,191,' + glow + ')';
          ctx.beginPath();
          ctx.arc(particles[i].x, particles[i].y, particles[i].r + 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw particles
      for (var k = 0; k < particles.length; k++) {
        var p = particles[k];
        ctx.fillStyle = 'rgba(200,220,240,' + p.opacity + ')';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function update() {
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;
      }
    }

    function loop() {
      update();
      draw();
      raf = requestAnimationFrame(loop);
    }

    // Track mouse over hero
    canvas.parentElement.addEventListener('mousemove', function (e) {
      var rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });
    canvas.parentElement.addEventListener('mouseleave', function () {
      mouseX = -9999;
      mouseY = -9999;
    });

    window.addEventListener('resize', function () {
      resize();
    });

    // Robust init — retry until hero has layout dimensions
    function startParticles() {
      var hero = canvas.closest('.hero') || canvas.parentElement;
      var w = hero.clientWidth || hero.offsetWidth;
      var h = hero.clientHeight || hero.offsetHeight;
      if (w < 50 || h < 50) {
        setTimeout(startParticles, 250);
        return;
      }
      canvas.width = w;
      canvas.height = h;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      particles = [];
      for (var i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(createParticle());
      }
      loop();
    }
    startParticles();

    // Pause when not visible
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        loop();
      }
    });
  })();

  // ================================================================
  // COOKIE & CONSENT UTILITIES
  // ================================================================

  function setCookie(name, value, days) {
    var d = new Date();
    d.setTime(d.getTime() + days * 864e5);
    document.cookie = name + '=' + encodeURIComponent(value) +
      ';expires=' + d.toUTCString() +
      ';path=/;SameSite=Lax;Secure';
  }

  function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
  }

  function hasConsent() {
    return getCookie('aspl_consent') === 'accepted';
  }

  function consentDeclined() {
    return getCookie('aspl_consent') === 'declined';
  }

  // ================================================================
  // VISIT TRACKING (consent-gated, first-party only)
  // ================================================================

  function trackVisit() {
    if (!hasConsent()) return;

    var count = parseInt(getCookie('aspl_visits') || '0', 10) + 1;
    setCookie('aspl_visits', String(count), 365);

    if (!getCookie('aspl_first_visit')) {
      setCookie('aspl_first_visit', new Date().toISOString(), 365);
    }
  }

  function getTrackingData() {
    // Parse UTM params from URL
    var params = new URLSearchParams(window.location.search);

    return {
      timestamp:    new Date().toISOString(),
      timezone:     Intl.DateTimeFormat().resolvedOptions().timeZone || '',
      referrer:     document.referrer || '(direct)',
      pageUrl:      window.location.href,
      utmSource:    params.get('utm_source') || '',
      utmMedium:    params.get('utm_medium') || '',
      utmCampaign:  params.get('utm_campaign') || '',
      screen:       window.screen.width + 'x' + window.screen.height,
      language:     navigator.language || '',
      visitCount:   getCookie('aspl_visits') || '0',
      firstVisit:   getCookie('aspl_first_visit') || '',
      consent:      hasConsent() ? 'accepted' : 'not-given'
    };
  }

  // ================================================================
  // COOKIE CONSENT BANNER
  // ================================================================

  var banner = document.getElementById('cookie-banner');
  var acceptBtn = document.getElementById('cookie-accept');
  var declineBtn = document.getElementById('cookie-decline');

  function showBanner() {
    if (!banner) return;
    banner.hidden = false;
    // Force reflow then animate in
    banner.offsetHeight; // eslint-disable-line no-unused-expressions
    banner.classList.add('visible');
  }

  function hideBanner() {
    if (!banner) return;
    banner.classList.remove('visible');
    setTimeout(function () { banner.hidden = true; }, 350);
  }

  if (banner && !getCookie('aspl_consent')) {
    // Show after 1.5s so it doesn't compete with page load
    setTimeout(showBanner, 1500);
  }

  if (acceptBtn) {
    acceptBtn.addEventListener('click', function () {
      setCookie('aspl_consent', 'accepted', 365);
      trackVisit();
      hideBanner();
    });
  }

  if (declineBtn) {
    declineBtn.addEventListener('click', function () {
      setCookie('aspl_consent', 'declined', 365);
      hideBanner();
    });
  }

  // If already consented on a prior visit, track this visit
  if (hasConsent()) {
    trackVisit();
  }

  // ================================================================
  // HEADER SCROLL
  // ================================================================

  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ================================================================
  // MOBILE MENU
  // ================================================================

  var toggle = document.querySelector('.menu-toggle');
  var mobileNav = document.getElementById('mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var open = mobileNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    });
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation menu');
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
    document.addEventListener('click', function (e) {
      if (mobileNav.classList.contains('open') &&
          !mobileNav.contains(e.target) &&
          !toggle.contains(e.target)) {
        mobileNav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ================================================================
  // ACTIVE NAV LINK
  // ================================================================

  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.main-nav a:not(.nav-cta)');
  function setActiveNav() {
    var scrollY = window.scrollY + 120;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }
  window.addEventListener('scroll', setActiveNav, { passive: true });

  // ================================================================
  // SCROLL REVEAL
  // ================================================================

  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }

  // ================================================================
  // ANIMATED COUNTERS
  // ================================================================

  var counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.getAttribute('data-count'), 10);
          animateCount(el, 0, target, 800);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { counterObserver.observe(el); });
  }

  function animateCount(el, start, end, duration) {
    if (start === end) { el.textContent = end; return; }
    var startTime = null;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(start + (end - start) * eased);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // ================================================================
  // BACK TO TOP
  // ================================================================

  var btt = document.querySelector('.back-to-top');
  if (btt) {
    window.addEventListener('scroll', function () {
      btt.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    btt.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ================================================================
  // CONTACT FORM — Enriched submission with tracking data
  // ================================================================

  var form = document.querySelector('.contact-form');
  var status = document.querySelector('.form-status');

  // Populate hidden tracking fields before submission
  function populateTrackingFields() {
    var data = getTrackingData();
    var map = {
      'f-replyto':      '', // filled from email field
      'f-timestamp':    data.timestamp,
      'f-timezone':     data.timezone,
      'f-referrer':     data.referrer,
      'f-pageurl':      data.pageUrl,
      'f-utm-source':   data.utmSource,
      'f-utm-medium':   data.utmMedium,
      'f-utm-campaign': data.utmCampaign,
      'f-screen':       data.screen,
      'f-language':     data.language,
      'f-visits':       data.visitCount,
      'f-first-visit':  data.firstVisit,
      'f-consent':      data.consent
    };

    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.value = map[id];
    });

    // Set replyto from the email field
    var emailField = document.getElementById('email');
    var replyTo = document.getElementById('f-replyto');
    if (emailField && replyTo) {
      replyTo.value = emailField.value;
    }
  }

  // reCAPTCHA v3 site key — REPLACE with your actual key from
  // https://www.google.com/recaptcha/admin/create
  var RECAPTCHA_SITE_KEY = '6LcR9pUsAAAAAFsjmudLfjevaon45Nssh5_Dq-KT';

  /**
   * Get a reCAPTCHA v3 token. Returns a Promise that resolves to the token
   * string, or empty string if reCAPTCHA isn't loaded (graceful degradation).
   */
  function getRecaptchaToken(action) {
    if (typeof grecaptcha === 'undefined' || !grecaptcha.execute) {
      // reCAPTCHA blocked by ad-blocker or failed to load — degrade gracefully
      return Promise.resolve('');
    }
    return new Promise(function (resolve) {
      grecaptcha.ready(function () {
        grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: action })
          .then(resolve)
          .catch(function () { resolve(''); });
      });
    });
  }

  function submitForm(btn) {
    btn.disabled = true;
    btn.style.opacity = '.6';
    status.textContent = 'Sending\u2026';
    status.className = 'form-status';

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(function (res) {
      if (res.ok) {
        status.textContent = 'Thank you! We\u2019ll be in touch.';
        status.className = 'form-status success';
        form.reset();
      } else {
        throw new Error('Failed');
      }
    }).catch(function () {
      status.textContent = 'Something went wrong. Please email us at info@asplfusion.com.';
      status.className = 'form-status error';
    }).finally(function () {
      btn.disabled = false;
      btn.style.opacity = '';
    });
  }

  if (form && status) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Honeypot check — if filled, it's a bot
      var honeypot = form.querySelector('[name="_gotcha"]');
      if (honeypot && honeypot.value) {
        status.textContent = 'Thank you! We\u2019ll be in touch.';
        status.className = 'form-status success';
        form.reset();
        return;
      }

      // Populate tracking data right before submit
      populateTrackingFields();

      var btn = form.querySelector('button[type="submit"]');

      // Get reCAPTCHA v3 token, then submit
      getRecaptchaToken('contact_form').then(function (token) {
        var recaptchaField = document.getElementById('f-recaptcha');
        if (recaptchaField) recaptchaField.value = token;
        submitForm(btn);
      });
    });
  }

})();
