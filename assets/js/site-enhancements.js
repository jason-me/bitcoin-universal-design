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

 // Set aria-current="page" on the active nav link
 const currentPath = window.location.pathname.replace(/\/$/, ""); // remove trailing slash
 const navLinks = document.querySelectorAll('.nav-list-link');

 navLinks.forEach(link => {
   const linkPath = link.getAttribute('href').replace(/\/$/, "");
   if (linkPath === currentPath) {
     link.setAttribute('aria-current', 'page');
   }
 });
});