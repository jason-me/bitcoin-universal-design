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
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");

  if (searchInput && searchResults) {
    // Initial roles
    searchInput.setAttribute("role", "combobox");
    searchInput.setAttribute("aria-haspopup", "listbox");
    searchInput.setAttribute("aria-expanded", "false");
    searchInput.setAttribute("aria-owns", "search-results");
    searchResults.setAttribute("role", "listbox");

    function updateSearchAccessibility() {
      const searchResultsList = document.querySelector(".search-results-list");
      if (!searchResultsList) return;

      const resultsExist = searchResultsList.children.length > 0;

      if (resultsExist) {
        searchInput.setAttribute("aria-expanded", "true");

        Array.from(searchResultsList.children).forEach((item, index) => {
          item.setAttribute("role", "option");
          item.setAttribute("id", `search-option-${index}`);
        });
      } else {
        searchInput.setAttribute("aria-expanded", "false");
        searchInput.removeAttribute("aria-activedescendant");
      }
    }

    let activeIndex = -1;

    function setActiveDescendant(index) {
      const items = Array.from(
        document.querySelectorAll(".search-results-list-item")
      );
      items.forEach((item, i) => {
        if (i === index) {
          item.classList.add("active-result");
          item.setAttribute("aria-selected", "true");
          const id = item.getAttribute("id");
          if (id) {
            searchInput.setAttribute("aria-activedescendant", id);
          }

          // ✅ Scroll selected item into view
          item.scrollIntoView({ block: "nearest", behavior: "smooth" });
        } else {
          item.classList.remove("active-result");
          item.removeAttribute("aria-selected");
        }
      });
    }

    searchInput.addEventListener("keydown", function (event) {
      const items = Array.from(
        document.querySelectorAll(".search-results-list-item")
      );
      if (!items.length) return;

      // ✅ Fix 1: First arrow press now highlights first item
      if (event.key === "ArrowDown") {
        event.preventDefault();
        activeIndex = activeIndex === -1 ? 0 : (activeIndex + 1) % items.length;
        setActiveDescendant(activeIndex);
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        activeIndex = activeIndex === -1 ? items.length - 1 : (activeIndex - 1 + items.length) % items.length;
        setActiveDescendant(activeIndex);
      }

      if (event.key === "Enter") {
        // ✅ Fix 2: Enter navigates to the focused result
        const activeId = searchInput.getAttribute("aria-activedescendant");
        if (activeId) {
          const activeItem = document.getElementById(activeId);
          const link = activeItem?.querySelector("a");
          if (link && link.href) {
            window.location.href = link.href;
          }
        }
      }

      if (event.key === "Escape") {
        searchInput.setAttribute("aria-expanded", "false");
        searchInput.removeAttribute("aria-activedescendant");
        activeIndex = -1;
        items.forEach(item => {
          item.classList.remove("active-result");
          item.removeAttribute("aria-selected");
        });
      }
    });

    const observer = new MutationObserver(updateSearchAccessibility);
    observer.observe(searchResults, { childList: true, subtree: true });

    updateSearchAccessibility(); // Initialize once
  }
});



