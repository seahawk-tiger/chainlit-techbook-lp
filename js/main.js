// CHAINLIT TECHBOOK LP — Rendering & Interaction
(function () {
  var D = window.SITE_DATA;
  if (!D) return;

  // ===== SVG Icons =====
  var ICONS = {
    calendar: '<svg class="event-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    'map-pin': '<svg class="event-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    flag: '<svg class="event-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>',
    check: '<svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    package: '<svg class="support-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
  };

  // ===== Helper =====
  function esc(str) {
    var d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  // ===== Navbar =====
  (function renderNavbar() {
    var nav = D.navbar;
    document.getElementById('navbarLogo').textContent = nav.logo;

    var html = '';
    nav.links.forEach(function (l) {
      html += '<li><a href="' + l.href + '" class="nav-link">' + esc(l.label) + '</a></li>';
    });
    html += '<li><a href="' + esc(nav.ctaPrimary.url) + '" class="btn-nav" target="_blank" rel="noopener">' + esc(nav.ctaPrimary.label) + '</a></li>';
    if (nav.ctaSecondary.disabled) {
      html += '<li><span class="btn-nav-secondary" style="opacity:0.5;cursor:default;">' + esc(nav.ctaSecondary.label) + '</span></li>';
    } else {
      html += '<li><a href="' + esc(nav.ctaSecondary.url) + '" class="btn-nav-secondary" target="_blank" rel="noopener">' + esc(nav.ctaSecondary.label) + '</a></li>';
    }
    document.getElementById('navbarLinks').innerHTML = html;
  })();

  // ===== Hero =====
  (function renderHero() {
    var h = D.hero;
    var secondaryClass = h.ctaSecondary.disabled ? 'btn btn-hero-secondary' : 'btn btn-hero-secondary';
    var secondaryTag = h.ctaSecondary.disabled
      ? '<span class="btn btn-hero-secondary" style="opacity:0.5;cursor:default;">' + esc(h.ctaSecondary.label) + '</span>'
      : '<a href="' + esc(h.ctaSecondary.url) + '" class="btn btn-hero-secondary" target="_blank" rel="noopener">' + esc(h.ctaSecondary.label) + '</a>';

    document.getElementById('heroInner').innerHTML =
      '<div class="hero-text">' +
        '<h1 class="hero-title">' + h.title + '</h1>' +
        '<p class="hero-subtitle">' + esc(h.subtitle) + '</p>' +
        '<p class="hero-copy">' + h.copy + '</p>' +
        '<div class="hero-cta">' +
          '<a href="' + esc(h.ctaPrimary.url) + '" class="btn btn-primary" target="_blank" rel="noopener">' + esc(h.ctaPrimary.label) + '</a>' +
          secondaryTag +
        '</div>' +
      '</div>' +
      '<div class="hero-image">' +
        '<img src="' + esc(h.coverImage) + '" alt="' + esc(h.coverAlt) + '" width="296" height="420">' +
      '</div>';
  })();

  // ===== Event =====
  (function renderEvent() {
    var ev = D.event;
    var detailsHtml = '';
    ev.details.forEach(function (d) {
      var iconSvg = ICONS[d.icon] || '';
      var primaryClass = d.highlight ? 'event-detail-primary event-booth' : 'event-detail-primary';
      detailsHtml +=
        '<div class="event-detail-item">' +
          iconSvg +
          '<div>' +
            '<p class="' + primaryClass + '">' + esc(d.primary) + '</p>' +
            (d.sub ? '<p class="event-detail-sub">' + esc(d.sub) + '</p>' : '') +
          '</div>' +
        '</div>';
    });

    document.getElementById('eventBanner').innerHTML =
      '<p class="event-lead">' + esc(ev.lead) + '</p>' +
      '<div class="event-details">' + detailsHtml + '</div>' +
      '<div class="event-action">' +
        '<a href="' + esc(ev.buttonUrl) + '" class="btn btn-primary" target="_blank" rel="noopener">' + esc(ev.buttonText) + '</a>' +
      '</div>';
  })();

  // ===== Section Header helper =====
  function sectionHeader(en, ja) {
    return '<div class="section-header" data-en="' + en + '">' +
      '<span class="section-title-en">' + en + '</span>' +
      '<h2 class="section-title">' + esc(ja) + '</h2>' +
    '</div>';
  }

  // ===== About =====
  (function renderAbout() {
    var a = D.about;
    var featHtml = '';
    a.features.forEach(function (f) {
      featHtml += '<div class="feature-card">' +
        '<h3>' + esc(f.title) + '</h3>' +
        '<p>' + esc(f.description) + '</p>' +
        (f.linkUrl ? '<a href="' + esc(f.linkUrl) + '" class="link" target="_blank" rel="noopener">' + esc(f.linkText) + '</a>' : '') +
      '</div>';
    });

    document.getElementById('aboutContainer').innerHTML =
      sectionHeader(a.sectionEn, a.sectionTitle) +
      '<p class="about-body">' + a.body + '</p>' +
      '<div class="features">' + featHtml + '</div>';
  })();

  // ===== Target =====
  (function renderTarget() {
    var t = D.target;
    var listHtml = '';
    t.items.forEach(function (item) {
      listHtml += '<li>' + ICONS.check + esc(item) + '</li>';
    });

    document.getElementById('targetContainer').innerHTML =
      sectionHeader(t.sectionEn, t.sectionTitle) +
      '<ul class="target-list">' + listHtml + '</ul>';
  })();

  // ===== Contents (Tabs + Carousel — continuous across all chapters) =====
  (function renderContents() {
    var c = D.contents;
    var allChapters = c.chapters;
    var total = allChapters.length;
    var currentIndex = 0;

    // Build static shell
    var tabsHtml = '<div class="tabs" id="contentsTabs">';
    c.categories.forEach(function (cat, i) {
      tabsHtml += '<button class="tab' + (i === 0 ? ' active' : '') + '" data-cat="' + cat.id + '">' + esc(cat.label) + '</button>';
    });
    tabsHtml += '</div>';

    document.getElementById('contentsContainer').innerHTML =
      sectionHeader(c.sectionEn, c.sectionTitle) +
      tabsHtml +
      '<ul class="chapter-index" id="chapterIndex"></ul>' +
      '<div class="carousel">' +
        '<div class="chapter-cards" id="chapterCarousel"></div>' +
        '<div class="carousel-nav">' +
          '<button class="carousel-btn" id="carouselPrev">\u2190</button>' +
          '<div class="carousel-dots" id="carouselDots"></div>' +
          '<span class="carousel-counter" id="carouselCounter"></span>' +
          '<button class="carousel-btn" id="carouselNext">\u2192</button>' +
        '</div>' +
      '</div>';

    var carouselEl = document.getElementById('chapterCarousel');
    var indexEl = document.getElementById('chapterIndex');
    var dotsEl = document.getElementById('carouselDots');
    var counterEl = document.getElementById('carouselCounter');
    var prevBtn = document.getElementById('carouselPrev');
    var nextBtn = document.getElementById('carouselNext');

    // Build all cards once (never re-rendered)
    var cardsHtml = '';
    allChapters.forEach(function (ch) {
      cardsHtml += '<div class="chapter-card" data-cat="' + ch.category + '">' +
        '<div class="chapter-card-body">' +
          '<h4>\u7B2C' + ch.num + '\u7AE0 ' + esc(ch.title) + '</h4>' +
          '<p class="author">' + esc(ch.author) + '</p>' +
          '<p class="desc">' + esc(ch.description) + '</p>' +
        '</div>' +
        '<div class="chapter-card-img"><img src="' + esc(ch.image) + '" alt="\u7B2C' + ch.num + '\u7AE0\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8"></div>' +
      '</div>';
    });
    carouselEl.innerHTML = cardsHtml;

    // Find the first chapter index for a given category
    function firstIndexForCat(catId) {
      for (var i = 0; i < allChapters.length; i++) {
        if (allChapters[i].category === catId) return i;
      }
      return 0;
    }

    // Rebuild chapter index for current category only
    function renderIndex(catId) {
      var idxHtml = '';
      allChapters.forEach(function (ch, i) {
        if (ch.category !== catId) return;
        idxHtml += '<li class="chapter-index-item" data-idx="' + i + '">' +
          '<span class="chapter-index-num">' + ch.num + '</span>' + esc(ch.title) +
        '</li>';
      });
      indexEl.innerHTML = idxHtml;
    }

    function updateCarousel() {
      var cards = carouselEl.querySelectorAll('.chapter-card');
      if (cards[currentIndex]) {
        carouselEl.scrollTo({ left: cards[currentIndex].offsetLeft, behavior: 'smooth' });
      }

      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === total - 1;
      counterEl.textContent = (currentIndex + 1) + ' / ' + total;

      // Tab highlight — match current chapter's category
      var activeCat = allChapters[currentIndex].category;
      document.querySelectorAll('#contentsTabs .tab').forEach(function (t) {
        t.classList.toggle('active', t.dataset.cat === activeCat);
      });

      // Rebuild index for the active category
      renderIndex(activeCat);

      // Highlight current chapter in index
      indexEl.querySelectorAll('.chapter-index-item').forEach(function (el) {
        el.classList.toggle('active', Number(el.dataset.idx) === currentIndex);
      });
    }

    function goTo(idx) {
      if (idx < 0 || idx >= total) return;
      currentIndex = idx;
      updateCarousel();
    }

    // Event: tab click — jump to first chapter of that category
    document.getElementById('contentsTabs').addEventListener('click', function (e) {
      var btn = e.target.closest('.tab');
      if (!btn) return;
      goTo(firstIndexForCat(btn.dataset.cat));
    });

    // Event: prev / next
    prevBtn.addEventListener('click', function () { goTo(currentIndex - 1); });
    nextBtn.addEventListener('click', function () { goTo(currentIndex + 1); });

    // Event: dot click
    dotsEl.addEventListener('click', function (e) {
      if (e.target.classList.contains('carousel-dot')) {
        goTo(Number(e.target.dataset.index));
      }
    });

    // Event: index click
    indexEl.addEventListener('click', function (e) {
      var item = e.target.closest('.chapter-index-item');
      if (item) goTo(Number(item.dataset.idx));
    });

    // Initial render
    updateCarousel();
  })();

  // ===== Purchase =====
  (function renderPurchase() {
    var p = D.purchase;

    // Specs
    var specHtml = '<div class="purchase-spec">';
    p.specs.forEach(function (s) {
      specHtml += '<div class="spec-item">' +
        '<p class="spec-label">' + esc(s.label) + '</p>' +
        '<p class="spec-value">' + esc(s.value) + '</p>' +
      '</div>';
    });
    specHtml += '</div>';

    // Store cards
    var storeHtml = '<div class="purchase-cards">';
    p.stores.forEach(function (s) {
      var btnTag = s.disabled
        ? '<button class="btn btn-disabled" disabled>' + esc(s.buttonText) + '</button>'
        : '<a href="' + esc(s.buttonUrl) + '" class="btn btn-primary" target="_blank" rel="noopener">' + esc(s.buttonText) + '</a>';
      storeHtml += '<div class="purchase-card">' +
        '<h3>' + esc(s.name) + '</h3>' +
        '<p>' + esc(s.description) + (s.period ? '<br>' + esc(s.period) : '') + '</p>' +
        btnTag +
      '</div>';
    });
    storeHtml += '</div>';

    // Support
    var supportHtml = '<div class="purchase-support">' +
      ICONS.package +
      '<div class="purchase-support-body">' +
        '<p>' + esc(p.support.text) + '</p>' +
        '<a href="' + esc(p.support.linkUrl) + '" class="link" target="_blank" rel="noopener">' + esc(p.support.linkText) + '</a>' +
      '</div>' +
    '</div>';

    document.getElementById('purchaseContainer').innerHTML =
      sectionHeader(p.sectionEn, p.sectionTitle) +
      specHtml + storeHtml + supportHtml;
  })();

  // ===== Footer =====
  (function renderFooter() {
    var f = D.footer;
    document.getElementById('footerContainer').innerHTML =
      '<p>' + f.copyright + '</p>';
  })();

  // ===== Smooth Scroll =====
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ===== Navbar: hide while hero is visible =====
  (function initNavbarScroll() {
    var navbar = document.getElementById('navbar');
    var hero = document.getElementById('hero');
    if (!navbar || !hero) return;

    navbar.classList.add('is-hidden');

    function onScroll() {
      var heroBottom = hero.getBoundingClientRect().bottom;
      navbar.classList.toggle('is-hidden', heroBottom > 0);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  })();

})();
