(() => {
  "use strict";

  // Mobile navigation: supports keyboard and touch interaction.
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        nav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.focus();
      }
    });
  }

  // Syllabus topic search filters topic rows and hides empty unit headings.
  const searchInput = document.querySelector("#topic-search");
  const clearButton = document.querySelector("#clear-search");
  const status = document.querySelector("#search-status");
  const noResults = document.querySelector("#no-results");

  if (searchInput && status && noResults) {
    const rows = [...document.querySelectorAll(".topic-row")];
    const sections = [...document.querySelectorAll(".syllabus-unit")];

    function filterTopics() {
      const query = searchInput.value.trim().toLowerCase();
      let visible = 0;

      rows.forEach((row) => {
        const matches = !query || row.textContent.toLowerCase().includes(query);
        row.hidden = !matches;
        if (matches) visible += 1;
      });

      sections.forEach((section) => {
        const hasVisibleTopic = [...section.querySelectorAll(".topic-row")]
          .some((row) => !row.hidden);
        section.hidden = !hasVisibleTopic;
      });

      noResults.hidden = visible !== 0;
      status.textContent = query
        ? `${visible} topic${visible === 1 ? "" : "s"} found for “${searchInput.value.trim()}”.`
        : "Showing all course topics.";

      if (clearButton) clearButton.hidden = !query;
    }

    searchInput.addEventListener("input", filterTopics);
    if (clearButton) {
      clearButton.addEventListener("click", () => {
        searchInput.value = "";
        filterTopics();
        searchInput.focus();
      });
    }
  }

  // Add a visual cue for topic PDF links that have not yet been uploaded.
  // Browsers do not expose reliable local-file existence checks for static sites,
  // so links remain usable and the README explains the required folder structure.
})();