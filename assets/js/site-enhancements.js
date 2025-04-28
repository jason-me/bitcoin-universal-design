document.addEventListener("DOMContentLoaded", function() {
  const siteTitle = document.querySelector('.site-title');
  if (siteTitle) {
    const logo = document.createElement('img');
    logo.src = "https://jason-me.github.io/bitcoin-universal-design/assets/images/logo.svg"; // Bitcoin Design Community logo
    logo.alt = "Bitcoin Design Community Logo";
    logo.style.height = "32px";
    logo.style.marginRight = "0.5rem";
    logo.style.verticalAlign = "middle";
    logo.style.filter = "invert(100%)"; // Invert for dark background
    siteTitle.prepend(logo);
  }

  // Aria-current enhancement (fixed for missing hrefs)
  const links = document.querySelectorAll('.nav-list a');
  links.forEach(link => {
    const parentLi = link.closest('li');
    if (parentLi && parentLi.classList.contains('active')) {
      link.setAttribute('aria-current', 'page');
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById('menu-button');
  const siteNav = document.getElementById('site-nav');

  if (menuButton && siteNav) {
    menuButton.addEventListener('click', function () {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', (!expanded).toString());

      // Also toggle a visible class for screen readers (optional but good)
      siteNav.hidden = expanded;
    });

    // Optional: ESC key closes the menu
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