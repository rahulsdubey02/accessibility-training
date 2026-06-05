(() => {
  const state = {
    search: '',
    principle: 'all',
    level: 'all',
    version: 'all',
    levelFilterVisible: false,
  };

  // Numeric order for inclusive level matching
  const LEVEL_ORDER = { 'A': 1, 'AA': 2, 'AAA': 3 };

  function totalCriteria() {
    return WCAG_DATA.principles.reduce((sum, p) =>
      sum + p.guidelines.reduce((s2, g) => s2 + g.criteria.length, 0), 0);
  }

  function levelBadgeClass(level) {
    return `badge badge--level-${level.toLowerCase()}`;
  }

  function versionBadgeClass(v) {
    return `badge badge--v${v.replace('.', '')}`;
  }

  function versionLabel(v) {
    return v === '2.0' ? 'WCAG 2.0' : `New in ${v}`;
  }

  function svgArrow() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L9.19 8 6.22 5.03a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/>
    </svg>`;
  }

  function buildCard(criterion, principleSlug) {
    const card = document.createElement('article');
    const levelSlug = criterion.level.toLowerCase();

    card.className = [
      'criterion-card',
      `criterion-card--${principleSlug}`,
      `criterion-card--level-${levelSlug}`,
      criterion.deprecated ? 'criterion-card--deprecated' : '',
    ].filter(Boolean).join(' ');

    card.dataset.id = criterion.id;
    card.dataset.level = criterion.level;
    card.dataset.version = criterion.addedIn;
    card.dataset.principle = principleSlug;
    card.dataset.searchText = `${criterion.id} ${criterion.name} ${criterion.description}`.toLowerCase();

    const levelBadge = `<span class="${levelBadgeClass(criterion.level)}" title="Conformance Level">Level ${criterion.level}</span>`;

    const versionBadge = criterion.deprecated
      ? `<span class="badge badge--deprecated">Deprecated 2.2</span>`
      : criterion.addedIn !== '2.0'
        ? `<span class="${versionBadgeClass(criterion.addedIn)}">${versionLabel(criterion.addedIn)}</span>`
        : '';

    const examplePath = `criteria/${criterion.id}.html`;
    const linkHtml = `<a href="${examplePath}" class="criterion-card__link" aria-label="View examples for ${criterion.id} ${criterion.name}">
        View Examples ${svgArrow()}
      </a>`;

    card.innerHTML = `
      <header class="criterion-card__header">
        <span class="criterion-id">${criterion.id}</span>
        <div class="criterion-card__badges">
          ${levelBadge}
          ${versionBadge}
        </div>
      </header>
      <h4 class="criterion-card__name">${criterion.name}</h4>
      <p class="criterion-card__description">${criterion.description}</p>
      <footer class="criterion-card__footer">
        ${linkHtml}
      </footer>
    `;

    return card;
  }

  function buildGuideline(guideline, principleSlug) {
    const section = document.createElement('section');
    section.className = 'guideline-section';
    section.dataset.guidelineId = guideline.id;
    section.setAttribute('aria-labelledby', `guideline-${guideline.id.replace('.', '-')}`);

    const header = document.createElement('div');
    header.className = 'guideline-header';
    header.innerHTML = `
      <span class="guideline-id">${guideline.id}</span>
      <h3 id="guideline-${guideline.id.replace('.', '-')}">${guideline.name}</h3>
    `;
    section.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'criteria-grid';

    guideline.criteria.forEach(criterion => {
      grid.appendChild(buildCard(criterion, principleSlug));
    });

    section.appendChild(grid);
    return section;
  }

  function buildPrinciple(principle) {
    const section = document.createElement('section');
    section.className = 'principle-section';
    section.dataset.principleSlug = principle.slug;
    section.setAttribute('aria-labelledby', `principle-${principle.id}`);

    const criteriaCount = principle.guidelines.reduce((s, g) => s + g.criteria.length, 0);
    const guidelineCount = principle.guidelines.length;

    const header = document.createElement('header');
    header.className = `principle-header principle-header--${principle.slug}`;
    header.innerHTML = `
      <div class="principle-number principle-number--${principle.slug}" aria-hidden="true">${principle.id}</div>
      <div class="principle-info">
        <h2 id="principle-${principle.id}">${principle.id}. ${principle.name}</h2>
        <p>${principle.description}</p>
        <div class="principle-meta">
          <span class="principle-count">${guidelineCount} guideline${guidelineCount !== 1 ? 's' : ''}</span>
          <span class="principle-count">·</span>
          <span class="principle-count">${criteriaCount} success criteria</span>
        </div>
      </div>
    `;
    section.appendChild(header);

    principle.guidelines.forEach(guideline => {
      section.appendChild(buildGuideline(guideline, principle.slug));
    });

    return section;
  }

  function render(container) {
    WCAG_DATA.principles.forEach(principle => {
      container.appendChild(buildPrinciple(principle));
    });
  }

  function matchesFilters(card) {
    const { search, principle, level, version } = state;

    if (principle !== 'all' && card.dataset.principle !== principle) return false;

    // Inclusive level matching: AA shows A+AA, AAA shows A+AA+AAA
    if (level !== 'all') {
      const cardLevelVal = LEVEL_ORDER[card.dataset.level] || 0;
      const filterLevelVal = LEVEL_ORDER[level] || 0;
      if (cardLevelVal > filterLevelVal) return false;
    }

    // Version filter: exclusive — shows only criteria added in the selected version
    if (version !== 'all' && card.dataset.version !== version) return false;

    if (search && !card.dataset.searchText.includes(search.toLowerCase())) return false;

    return true;
  }

  function applyFilters() {
    const allCards = document.querySelectorAll('.criterion-card');
    let visibleCount = 0;

    allCards.forEach(card => {
      const visible = matchesFilters(card);
      card.hidden = !visible;
      if (visible) visibleCount++;
    });

    document.querySelectorAll('.guideline-section').forEach(section => {
      section.hidden = !section.querySelector('.criterion-card:not([hidden])');
    });

    document.querySelectorAll('.principle-section').forEach(section => {
      section.hidden = !section.querySelector('.guideline-section:not([hidden])');
    });

    const countEl = document.getElementById('criteria-count');
    if (countEl) {
      const total = totalCriteria();
      countEl.textContent = visibleCount === total ? total : `${visibleCount} of ${total}`;
    }

    const emptyState = document.getElementById('empty-state');
    if (emptyState) emptyState.hidden = visibleCount > 0;
  }

  function showLevelFilter() {
    if (state.levelFilterVisible) return;
    state.levelFilterVisible = true;

    const row = document.getElementById('level-filter-row');
    const hint = document.getElementById('version-step-hint');

    if (row) {
      row.classList.add('is-visible');
      row.removeAttribute('aria-hidden');
    }
    if (hint) hint.hidden = true;
  }

  function hideLevelFilter() {
    state.levelFilterVisible = false;
    state.level = 'all';

    const row = document.getElementById('level-filter-row');
    const hint = document.getElementById('version-step-hint');

    if (row) {
      row.classList.remove('is-visible');
      row.setAttribute('aria-hidden', 'true');
    }
    if (hint) hint.hidden = false;

    document.querySelectorAll('[data-filter-type="level"]').forEach(p => {
      p.setAttribute('aria-pressed', p.dataset.filterValue === 'all' ? 'true' : 'false');
    });
  }

  function initSearch() {
    const input = document.getElementById('filter-search');
    if (!input) return;
    input.addEventListener('input', e => {
      state.search = e.target.value.trim();
      applyFilters();
    });
  }

  function initPills() {
    document.querySelectorAll('[data-filter-type]').forEach(pill => {
      pill.addEventListener('click', () => {
        const type = pill.dataset.filterType;
        const value = pill.dataset.filterValue;

        state[type] = value;

        document.querySelectorAll(`[data-filter-type="${type}"]`).forEach(p => {
          p.setAttribute('aria-pressed', p === pill ? 'true' : 'false');
        });

        // Reveal the level filter the first time any version pill is clicked
        if (type === 'version') showLevelFilter();

        applyFilters();
      });
    });
  }

  function initResetButton() {
    const btn = document.getElementById('reset-filters');
    if (!btn) return;
    btn.addEventListener('click', () => {
      state.search = '';
      state.principle = 'all';
      state.version = 'all';

      const searchInput = document.getElementById('filter-search');
      if (searchInput) searchInput.value = '';

      document.querySelectorAll('[data-filter-type="principle"], [data-filter-type="version"]').forEach(p => {
        p.setAttribute('aria-pressed', p.dataset.filterValue === 'all' ? 'true' : 'false');
      });

      hideLevelFilter();
      applyFilters();
    });
  }

  function init() {
    const container = document.getElementById('criteria-list');
    if (!container || typeof WCAG_DATA === 'undefined') return;

    render(container);
    initSearch();
    initPills();
    initResetButton();

    const countEl = document.getElementById('criteria-count');
    if (countEl) countEl.textContent = totalCriteria();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
