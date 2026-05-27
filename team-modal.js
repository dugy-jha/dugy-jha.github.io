// ASPL Fusion — Team modal
// Click any .team-card[data-team-id] → loads /data/team.json and opens a modal with bio details.
// Zero dependencies, vanilla JS, IIFE pattern matching the rest of the site.
(function () {
  'use strict';

  var TEAM_DATA_URL = '/data/team.json';
  var IMG_BASE = '/images/';
  var teamData = null;
  var teamDataPromise = null;

  // DOM refs
  var modal           = document.getElementById('team-modal');
  if (!modal) return; // page may not have the modal
  var overlay         = document.getElementById('team-modal-overlay');
  var closeBtn        = document.getElementById('team-modal-close');
  var titleEl         = document.getElementById('team-modal-title');
  var roleEl          = document.getElementById('team-modal-role');
  var taglineEl       = document.getElementById('team-modal-tagline');
  var highlightsEl    = document.getElementById('team-modal-highlights');
  var educationEl     = document.getElementById('team-modal-education');
  var linksEl         = document.getElementById('team-modal-links');
  var photoImg        = document.getElementById('team-modal-photo');
  var photoWebpSource = document.getElementById('team-modal-photo-webp');

  function loadTeamData() {
    if (teamDataPromise) return teamDataPromise;
    teamDataPromise = fetch(TEAM_DATA_URL)
      .then(function (r) {
        if (!r.ok) throw new Error('failed to load team data');
        return r.json();
      })
      .then(function (data) {
        teamData = data;
        return data;
      });
    return teamDataPromise;
  }

  function clearChildren(el) {
    while (el && el.firstChild) el.removeChild(el.firstChild);
  }

  function renderListItems(ul, items) {
    clearChildren(ul);
    if (!items || !items.length) return;
    items.forEach(function (text) {
      var li = document.createElement('li');
      // We trust the data file — it contains <em> tags and curly punctuation by design
      li.innerHTML = text;
      ul.appendChild(li);
    });
  }

  function renderLinks(container, links) {
    clearChildren(container);
    if (!links || !links.length) return;
    links.forEach(function (link) {
      var a = document.createElement('a');
      a.href = link.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = link.label + ' ↗';
      container.appendChild(a);
    });
  }

  function openModal(teamId) {
    loadTeamData().then(function (data) {
      var person = data[teamId];
      if (!person) {
        console.warn('No team data for id:', teamId);
        return;
      }

      // Populate fields
      titleEl.textContent = person.name || '';
      roleEl.textContent  = person.role || '';
      taglineEl.textContent = person.tagline || '';

      // Photo paths — JPEG/WebP variants; default extension is jpeg unless photoExt is set
      var photoBase = person.photo || '';
      var photoExt  = person.photoExt || 'jpeg';
      photoImg.src = IMG_BASE + photoBase + '.' + photoExt;
      photoImg.alt = 'Portrait of ' + (person.name || '');
      photoWebpSource.srcset = IMG_BASE + photoBase + '.webp';

      renderListItems(highlightsEl, person.highlights);
      renderListItems(educationEl, person.education);
      renderLinks(linksEl, person.links);

      // Show
      modal.hidden = false;
      // Force reflow before adding is-open class so the transition fires
      void modal.offsetWidth;
      modal.classList.add('is-open');
      document.body.classList.add('team-modal-open');

      // Move focus to close button
      setTimeout(function () { closeBtn && closeBtn.focus(); }, 100);
    });
  }

  function closeModal() {
    modal.classList.remove('is-open');
    document.body.classList.remove('team-modal-open');
    // Hide after transition
    setTimeout(function () { modal.hidden = true; }, 250);
  }

  // Wire up all .team-card[data-team-id] cards
  document.querySelectorAll('.team-card[data-team-id]').forEach(function (card) {
    var teamId = card.getAttribute('data-team-id');

    // Inject the "View bio" CTA button if not already present
    if (!card.querySelector('.team-card-cta')) {
      var cta = document.createElement('span');
      cta.className = 'team-card-cta';
      cta.setAttribute('aria-hidden', 'true');
      cta.textContent = 'View bio';
      card.appendChild(cta);
    }

    card.addEventListener('click', function () { openModal(teamId); });

    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(teamId);
      }
    });
  });

  // Close handlers
  if (closeBtn)  closeBtn.addEventListener('click', closeModal);
  if (overlay)   overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
})();
