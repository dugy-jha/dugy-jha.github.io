// ASPL Fusion — Careers Page (dynamic job loader + application form)
// Zero dependencies, vanilla JS, IIFE pattern matching script.js
(function () {
  'use strict';

  // ================================================================
  // CONFIG
  // ================================================================

  var JOBS_INDEX = '/jobs/active/index.json';
  var JOBS_BASE  = '/jobs/active/';

  // Formspree endpoint for job applications
  // TODO: Create a NEW Formspree form at https://formspree.io/forms
  //       and replace this with the new endpoint. Keep mjgandye for the
  //       contact form only.
  var FORMSPREE_ENDPOINT = 'https://formspree.io/f/mjgandye';

  var RECAPTCHA_SITE_KEY = '6LcR9pUsAAAAAFsjmudLfjevaon45Nssh5_Dq-KT';

  // SVG icon templates (matching the existing careers.html style)
  var ICONS = {
    location: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    team: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
  };

  // ================================================================
  // DOM REFERENCES
  // ================================================================

  var jobsList     = document.getElementById('jobs-list');
  var noJobs       = document.getElementById('no-jobs');
  var filterBtns   = document.querySelectorAll('.filter-btn');
  var modal        = document.getElementById('apply-modal');
  var modalOverlay = document.getElementById('modal-overlay');

  // ================================================================
  // LOAD JOBS
  // ================================================================

  function loadJobs() {
    // Show loading state
    if (jobsList) {
      jobsList.innerHTML = '<div class="jobs-loading"><div class="loading-spinner"></div><p>Loading positions\u2026</p></div>';
    }

    fetch(JOBS_INDEX)
      .then(function (res) {
        if (!res.ok) throw new Error('Failed to fetch job index');
        return res.json();
      })
      .then(function (filenames) {
        if (!filenames || filenames.length === 0) {
          showEmptyState();
          return;
        }

        // Fetch all job files in parallel
        var fetches = filenames.map(function (fname) {
          return fetch(JOBS_BASE + fname)
            .then(function (res) {
              if (!res.ok) throw new Error('Failed to load ' + fname);
              return res.json();
            })
            .catch(function () {
              console.warn('Could not load job file: ' + fname);
              return null;
            });
        });

        return Promise.all(fetches);
      })
      .then(function (jobs) {
        if (!jobs) return; // empty state already shown

        // Filter out any failed loads
        jobs = jobs.filter(function (j) { return j !== null; });

        if (jobs.length === 0) {
          showEmptyState();
          return;
        }

        renderJobs(jobs);
        initFilters(jobs);
        injectJobPostingSchemas(jobs);
      })
      .catch(function (err) {
        console.error('Error loading jobs:', err);
        showEmptyState();
      });
  }

  // ================================================================
  // RENDER JOBS
  // ================================================================

  function showEmptyState() {
    if (jobsList) jobsList.innerHTML = '';
    if (noJobs) {
      noJobs.style.display = 'block';
      noJobs.textContent = 'No open positions right now. Check back soon or send us a general application below.';
    }
  }

  function renderJobs(jobs) {
    if (!jobsList) return;
    jobsList.innerHTML = '';

    jobs.forEach(function (job) {
      var card = document.createElement('div');
      card.className = 'job-card';
      card.setAttribute('data-dept', job.department || '');
      card.setAttribute('data-job-id', job.id || '');

      // Type text (include positions count if > 1)
      var typeText = job.type || 'Full-time';
      if (job.positions && job.positions > 1) {
        typeText += ' (' + job.positions + ' positions)';
      }

      // Tag HTML
      var tagHtml = '';
      if (job.tag) {
        var tagClass = job.tagType === 'urgent' ? 'job-tag urgent' : 'job-tag';
        tagHtml = '<span class="' + tagClass + '">' + escapeHtml(job.tag) + '</span>';
      }

      // Working group meta (only if present)
      var wgHtml = '';
      if (job.workingGroup) {
        wgHtml = '<span>' + ICONS.team + ' ' + escapeHtml(job.workingGroup) + '</span>';
      }

      // Experience meta (only if present)
      var expHtml = '';
      if (job.experience) {
        expHtml = '<span>' + ICONS.clock + ' ' + escapeHtml(job.experience) + '</span>';
      }

      card.innerHTML =
        '<div class="job-info">' +
          '<h3>' + escapeHtml(job.title) + '</h3>' +
          '<div class="job-meta">' +
            '<span>' + ICONS.location + ' ' + escapeHtml(job.location || 'Gandhinagar, Gujarat') + '</span>' +
            '<span>' + ICONS.briefcase + ' ' + escapeHtml(typeText) + '</span>' +
            wgHtml +
            expHtml +
          '</div>' +
          tagHtml +
        '</div>' +
        '<button class="apply-btn" data-job-id="' + escapeHtml(job.id) + '">Apply</button>';

      // Store job data on the card for the modal
      card._jobData = job;

      jobsList.appendChild(card);
    });

    // Bind apply buttons
    jobsList.querySelectorAll('.apply-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var card = this.closest('.job-card');
        if (card && card._jobData) {
          openModal(card._jobData);
        }
      });
    });

    // Hide no-jobs message
    if (noJobs) noJobs.style.display = 'none';
  }

  // ================================================================
  // FILTERS
  // ================================================================

  function initFilters() {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = this.getAttribute('data-filter');

        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');

        var cards = jobsList.querySelectorAll('.job-card');
        var visible = 0;

        cards.forEach(function (card) {
          if (filter === 'all' || card.getAttribute('data-dept') === filter) {
            card.style.display = '';
            visible++;
          } else {
            card.style.display = 'none';
          }
        });

        if (noJobs) {
          noJobs.style.display = visible === 0 ? 'block' : 'none';
          if (visible === 0) {
            noJobs.textContent = 'No positions match this filter. Check back soon or send us a general application below.';
          }
        }
      });
    });
  }

  // ================================================================
  // APPLICATION MODAL
  // ================================================================

  function openModal(job) {
    if (!modal) return;

    // Set job title in modal header
    var modalTitle = modal.querySelector('.modal-job-title');
    if (modalTitle) modalTitle.textContent = job.title;

    // Set hidden job fields
    var jobIdField = modal.querySelector('[name="job-id"]');
    var jobTitleField = modal.querySelector('[name="job-title"]');
    if (jobIdField) jobIdField.value = job.id || '';
    if (jobTitleField) jobTitleField.value = job.title || '';

    // Build job detail view
    var detailEl = modal.querySelector('.modal-job-detail');
    if (detailEl) {
      var detailHtml = '';

      if (job.about) {
        detailHtml += '<p class="modal-about">' + escapeHtml(job.about) + '</p>';
      }
      if (job.description) {
        detailHtml += '<p class="modal-desc">' + escapeHtml(job.description) + '</p>';
      }
      if (job.responsibilities && job.responsibilities.length) {
        detailHtml += '<h4>Responsibilities</h4><ul>';
        job.responsibilities.forEach(function (r) {
          detailHtml += '<li>' + escapeHtml(r) + '</li>';
        });
        detailHtml += '</ul>';
      }
      if (job.requirements && job.requirements.length) {
        detailHtml += '<h4>Requirements</h4><ul>';
        job.requirements.forEach(function (r) {
          detailHtml += '<li>' + escapeHtml(r) + '</li>';
        });
        detailHtml += '</ul>';
      }
      if (job.preferred && job.preferred.length) {
        detailHtml += '<h4>Nice to Have</h4><ul>';
        job.preferred.forEach(function (r) {
          detailHtml += '<li>' + escapeHtml(r) + '</li>';
        });
        detailHtml += '</ul>';
      }
      if (job.benefits && job.benefits.length) {
        detailHtml += '<h4>What you get</h4><ul>';
        job.benefits.forEach(function (r) {
          detailHtml += '<li>' + escapeHtml(r) + '</li>';
        });
        detailHtml += '</ul>';
      }

      detailEl.innerHTML = detailHtml;
    }

    // Reset form
    var form = modal.querySelector('.apply-form');
    if (form) form.reset();

    var status = modal.querySelector('.apply-status');
    if (status) {
      status.textContent = '';
      status.className = 'apply-status';
    }

    // Remember the element that opened the modal so focus can return there
    _lastOpener = document.activeElement;

    // Show modal
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Focus the first VISIBLE input (skip the display:none honeypot)
    setTimeout(function () {
      var first = document.getElementById('apply-name');
      if (first) first.focus();
    }, 100);
  }

  // Track last opener for focus restoration on close
  var _lastOpener = null;

  // Focus trap — keep Tab/Shift+Tab inside the modal while it is open
  function getFocusableInModal() {
    if (!modal) return [];
    return Array.prototype.slice.call(
      modal.querySelectorAll(
        'a[href], button:not([disabled]), input:not([type="hidden"]):not([style*="display:none"]):not([style*="display: none"]):not([name="_gotcha"]), textarea:not([disabled]), select:not([disabled])'
      )
    ).filter(function (el) {
      return el.offsetParent !== null;
    });
  }

  function trapTab(e) {
    if (e.key !== 'Tab') return;
    if (!modal.classList.contains('open')) return;
    var nodes = getFocusableInModal();
    if (nodes.length === 0) return;
    var first = nodes[0];
    var last  = nodes[nodes.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
    // Restore focus to the element that originally opened the modal
    if (_lastOpener && typeof _lastOpener.focus === 'function') {
      try { _lastOpener.focus(); } catch (e) { /* element may be gone */ }
    }
  }

  // Close handlers
  if (modal) {
    // Close button
    var closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    // Click overlay to close
    modal.addEventListener('click', function (e) {
      if (e.target === modal || e.target === modalOverlay) {
        closeModal();
      }
    });

    // Escape key + focus trap
    document.addEventListener('keydown', function (e) {
      if (!modal.classList.contains('open')) return;
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'Tab') {
        trapTab(e);
      }
    });
  }

  // ================================================================
  // FORM SUBMISSION (Formspree + reCAPTCHA v3)
  // ================================================================

  var applyForm = modal ? modal.querySelector('.apply-form') : null;
  var applyStatus = modal ? modal.querySelector('.apply-status') : null;

  function getRecaptchaToken(action) {
    if (typeof grecaptcha === 'undefined' || !grecaptcha.execute) {
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

  function submitApplication(btn) {
    btn.disabled = true;
    btn.style.opacity = '.6';
    if (applyStatus) {
      applyStatus.textContent = 'Submitting\u2026';
      applyStatus.className = 'apply-status';
    }

    fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: new FormData(applyForm),
      headers: { 'Accept': 'application/json' }
    }).then(function (res) {
      if (res.ok) {
        if (applyStatus) {
          applyStatus.textContent = 'Application submitted! We\u2019ll review it within one week.';
          applyStatus.className = 'apply-status success';
        }
        applyForm.reset();

        // Close modal after delay
        setTimeout(closeModal, 3000);
      } else {
        throw new Error('Submission failed');
      }
    }).catch(function () {
      if (applyStatus) {
        applyStatus.textContent = 'Something went wrong. Please email careers@asplfusion.com directly.';
        applyStatus.className = 'apply-status error';
      }
    }).finally(function () {
      btn.disabled = false;
      btn.style.opacity = '';
    });
  }

  if (applyForm) {
    applyForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Honeypot check
      var honeypot = applyForm.querySelector('[name="_gotcha"]');
      if (honeypot && honeypot.value) {
        if (applyStatus) {
          applyStatus.textContent = 'Application submitted! We\u2019ll review it within one week.';
          applyStatus.className = 'apply-status success';
        }
        applyForm.reset();
        return;
      }

      // Populate timestamp
      var tsField = applyForm.querySelector('[name="submitted-at"]');
      if (tsField) tsField.value = new Date().toISOString();

      // Forgive missing scheme on the resume URL
      // (candidates often paste "linkedin.com/in/foo" without https://)
      var resumeField = applyForm.querySelector('[name="resume-link"]');
      if (resumeField && resumeField.value) {
        var v = resumeField.value.trim();
        if (v && !/^https?:\/\//i.test(v)) {
          resumeField.value = 'https://' + v;
        }
      }

      var btn = applyForm.querySelector('button[type="submit"]');

      getRecaptchaToken('job_application').then(function (token) {
        var recapField = applyForm.querySelector('[name="g-recaptcha-response"]');
        if (recapField) recapField.value = token;
        submitApplication(btn);
      });
    });
  }

  // ================================================================
  // JobPosting STRUCTURED DATA (schema.org)
  // ================================================================

  function injectJobPostingSchemas(jobs) {
    // Remove any previously-injected schemas
    document.querySelectorAll('script[data-jobschema]').forEach(function (s) { s.remove(); });

    jobs.forEach(function (job) {
      var posted = job.posted || new Date().toISOString().slice(0, 10);
      // Default validThrough = 90 days from posted
      var validThrough;
      try {
        var pd = new Date(posted);
        pd.setDate(pd.getDate() + 90);
        validThrough = pd.toISOString();
      } catch (e) { validThrough = undefined; }

      // Compose description for indexers — strict subset (no comp/benefits)
      var descParts = [];
      if (job.about)       descParts.push(job.about);
      if (job.description) descParts.push(job.description);
      if (job.responsibilities && job.responsibilities.length) {
        descParts.push('Responsibilities: ' + job.responsibilities.join('; '));
      }
      if (job.requirements && job.requirements.length) {
        descParts.push('Requirements: ' + job.requirements.join('; '));
      }
      var description = descParts.join(' ');

      var schema = {
        '@context': 'https://schema.org',
        '@type': 'JobPosting',
        'title': job.title,
        'identifier': {
          '@type': 'PropertyValue',
          'name': 'ASPL Fusion',
          'value': job.id
        },
        'description': description,
        'datePosted': posted,
        'employmentType': (job.type || 'Full-time').toUpperCase().replace(/[^A-Z_]/g, '_'),
        'hiringOrganization': {
          '@type': 'Organization',
          'name': 'ASPL Fusion',
          'sameAs': 'https://asplfusion.com',
          'logo': 'https://asplfusion.com/images/logo-round.png'
        },
        'jobLocation': {
          '@type': 'Place',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Gandhinagar',
            'addressRegion': 'Gujarat',
            'addressCountry': 'IN'
          }
        },
        'directApply': true,
        'url': 'https://asplfusion.com/careers.html#' + (job.id || '')
      };
      if (validThrough) schema.validThrough = validThrough;
      if (job.experience) schema.experienceRequirements = job.experience;
      if (job.workingGroup) schema.industry = job.workingGroup;

      var s = document.createElement('script');
      s.type = 'application/ld+json';
      s.setAttribute('data-jobschema', job.id || '');
      s.textContent = JSON.stringify(schema);
      document.head.appendChild(s);
    });
  }

  // ================================================================
  // UTILITY
  // ================================================================

  function escapeHtml(str) {
    if (!str) return '';
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // ================================================================
  // INIT
  // ================================================================

  if (jobsList) {
    loadJobs();
  }

})();
