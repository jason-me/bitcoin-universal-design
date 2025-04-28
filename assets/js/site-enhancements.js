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

 // Hamburger Menu Fix
 const menuButton = document.getElementById('menu-button');
 const siteNav = document.getElementById('site-nav');

 if (menuButton && siteNav) {
   menuButton.setAttribute('aria-controls', 'site-nav');
   menuButton.setAttribute('aria-expanded', 'false');
   menuButton.removeAttribute('aria-pressed');
   siteNav.hidden = true; // Start hidden

   function openMenu() {
     menuButton.setAttribute('aria-expanded', 'true');
     siteNav.hidden = false;
     menuButton.classList.add('nav-open');
     siteNav.classList.add('nav-open');
   }

   function closeMenu() {
     menuButton.setAttribute('aria-expanded', 'false');
     siteNav.hidden = true;
     menuButton.classList.remove('nav-open');
     siteNav.classList.remove('nav-open');
   }

   menuButton.addEventListener('click', function () {
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