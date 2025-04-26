document.addEventListener("DOMContentLoaded", function() {
    const observer = new MutationObserver(() => {
      const styleTagId = "custom-search-fix-style";
      if (!document.getElementById(styleTagId)) {
        const style = document.createElement("style");
        style.id = styleTagId;
        style.innerHTML = `
          .search-result-doc-title a,
          .search-result-title,
          .search-result a {
            color: #edf0f5 !important;
            font-weight: 600 !important;
            text-decoration: none !important;
          }
  
          .search-result-title:hover,
          .search-result-doc-title a:hover {
            color: #b3d1ff !important;
            text-decoration: underline !important;
          }
  
          .search-results {
            background-color: #1e1e2e !important;
            border: 1px solid #8cb4ff !important;
          }
  
          .search-result {
            color: #edf0f5 !important;
          }
        `;
        document.head.appendChild(style);
        console.log("🔵 Custom search result styles injected for real");
      }
    });
  
    const searchResults = document.querySelector(".search-results");
    if (searchResults) {
      observer.observe(searchResults, { childList: true, subtree: true });
    }
  });
  