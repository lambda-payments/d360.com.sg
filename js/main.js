/* Digital360 — small progressive enhancements. */
(function () {
  "use strict";

  // Current year in footers.
  var year = String(new Date().getFullYear());
  Array.prototype.forEach.call(document.querySelectorAll("[data-year]"), function (el) {
    el.textContent = year;
  });

  // Offset in-page anchor jumps so the sticky header does not cover headings.
  var header = document.querySelector(".site-header");
  if (!header) { return; }

  Array.prototype.forEach.call(document.querySelectorAll("a[href^='#']"), function (link) {
    link.addEventListener("click", function (event) {
      var id = link.getAttribute("href").slice(1);
      if (!id) { return; }
      var target = document.getElementById(id);
      if (!target) { return; }
      event.preventDefault();
      var top = target.getBoundingClientRect().top + window.pageYOffset - header.offsetHeight - 8;
      window.scrollTo({ top: top, behavior: "smooth" });
      history.replaceState(null, "", "#" + id);
    });
  });
})();
