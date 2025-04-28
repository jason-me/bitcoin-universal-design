document.addEventListener("DOMContentLoaded", function () {
  // 1. Inject Logo
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

  // 2. Enhance aria-current for active links
  const links = document.querySelectorAll('.nav-list a');
  links.forEach(link => {
    const parentLi = link.closest('li');
    if (parentLi && parentLi.classList.contains('active')) {
      link.setAttribute('aria-current', 'page');
    }
  });

  // 3. Improve Hamburger Menu Accessibility
  const menuButton = document.getElementById("menu-button");
  const siteNav = document.getElementById("site-nav");

  if (menuButton && siteNav) {
    // Initial setup
    menuButton.setAttribute("aria-label", "Menu");
    menuButton.setAttribute("aria-controls", "site-nav");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.removeAttribute("aria-pressed");

    menuButton.addEventListener('click', function () {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', (!expanded).toString());
      siteNav.hidden = expanded; // true hides, false shows
    });

    // ESC closes menu
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        if (menuButton.getAttribute('aria-expanded') === 'true') {
          menuButton.setAttribute('aria-expanded', 'false');
          siteNav.hidden = true;
        }
      }
    });
  }
});
