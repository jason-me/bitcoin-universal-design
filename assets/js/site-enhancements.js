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
