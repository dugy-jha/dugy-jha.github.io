/* Reading progress bar — for long-form insights articles.
   Tracks scroll position over the .article-body element and updates a
   fixed-position bar at the top of the viewport. Respects
   prefers-reduced-motion via CSS. Zero-dependency. */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var article = document.querySelector('.article-body, article.insight, .insights-article main');
    if (!article) return;

    var bar = document.createElement('div');
    bar.className = 'reading-progress';
    bar.setAttribute('aria-hidden', 'true');
    var fill = document.createElement('div');
    fill.className = 'reading-progress__bar';
    bar.appendChild(fill);
    document.body.appendChild(bar);

    function update() {
      var rect = article.getBoundingClientRect();
      var viewportH = window.innerHeight || document.documentElement.clientHeight;
      var articleH = rect.height;
      var scrolledIntoArticle = Math.max(0, viewportH - rect.top);
      var totalTrack = Math.max(1, articleH + viewportH);
      var pct = Math.min(100, Math.max(0, (scrolledIntoArticle / totalTrack) * 100));
      fill.style.width = pct.toFixed(1) + '%';
    }

    var ticking = false;
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          update();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
  });
})();
