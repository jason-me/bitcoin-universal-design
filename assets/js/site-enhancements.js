document.addEventListener("DOMContentLoaded", function () {
  // Inject Logo
  const siteTitle = document.querySelector('.site-title');
  if (siteTitle) {
    const logo = document.createElement('img');
    logo.src = "https://jason-me.github.io/bitcoin-universal-design/assets/images/logo.svg";
    logo.alt = "Bitcoin Design Community Logo";
    logo.style.height = "32px";
    logo.style.marginRight = "0.5rem";
    logo.style.verticalAlign = "middle";
    logo.style.filter = "invert(100%)";
    siteTitle.prepend(logo);
  }

  // Enhance aria-current
  const links = document.querySelectorAll('.nav-list a');
  links.forEach(link => {
    const parentLi = link.closest('li');
    if (parentLi && parentLi.classList.contains('active')) {
      link.setAttribute('aria-current', 'page');
    }
  });

  // Hamburger Menu Accessibility Fix
  const menuButton = document.getElementById('menu-button');
  const siteNav = document.getElementById('site-nav');

  if (menuButton && siteNav) {
    menuButton.setAttribute('aria-controls', 'site-nav');
    menuButton.setAttribute('aria-expanded', 'false');
    setTimeout(() => {
      menuButton.removeAttribute('aria-pressed');
    }, 0); // Delay to ensure DOM is fully ready
    siteNav.hidden = true;

    function openMenu() {
      menuButton.setAttribute('aria-expanded', 'true');
      menuButton.removeAttribute('aria-pressed'); // 🛑 force remove every time
      siteNav.hidden = false;
      menuButton.classList.add('nav-open');
      siteNav.classList.add('nav-open');
    }
    
    function closeMenu() {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.removeAttribute('aria-pressed'); // 🛑 force remove every time
      siteNav.hidden = true;
      menuButton.classList.remove('nav-open');
      siteNav.classList.remove('nav-open');
    }    

    menuButton.addEventListener('click', function (event) {
      event.stopImmediatePropagation(); // 🛑 PREVENT Just the Docs from handling it
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });    

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        const expanded = menuButton.getAttribute('aria-expanded') === 'true';
        if (expanded) {
          closeMenu();
          menuButton.focus();
        }
      }
    });
  }
});

// Enhance Search Combobox Accessibility
// Enhance Search Combobox Accessibility
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results'); // NOT the UL directly
  const searchResultsList = document.querySelector('.search-results-list');

  if (searchInput && searchResults && searchResultsList) {
    // Setup combobox attributes
    searchInput.setAttribute('role', 'combobox');
    searchInput.setAttribute('aria-autocomplete', 'list');
    searchInput.setAttribute('aria-expanded', 'false');
    searchInput.setAttribute('aria-controls', 'search-results-list'); // Target the UL

    // Setup UL listbox
    searchResultsList.setAttribute('role', 'listbox');
    searchResultsList.setAttribute('id', 'search-results-list'); // ID for aria-controls to match

    // Show/hide aria-expanded dynamically based on visible results
    function updateAriaExpanded() {
      const visible = searchResults.offsetHeight > 0 && searchResults.style.display !== 'none';
      searchInput.setAttribute('aria-expanded', visible ? 'true' : 'false');
    }

    // Listen to typing
    searchInput.addEventListener('input', updateAriaExpanded);

    // Also monitor DOM changes to update aria-expanded
    const observer = new MutationObserver(updateAriaExpanded);
    observer.observe(searchResults, { attributes: true, childList: true, subtree: true });

    // Setup role="option" on search results
    const itemObserver = new MutationObserver(function (mutationsList) {
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) {
              const link = node.querySelector('a.search-result');
              if (link) {
                link.setAttribute('role', 'option');
              }
            }
          });
        }
      }
    });
    itemObserver.observe(searchResultsList, { childList: true });
  }
});
