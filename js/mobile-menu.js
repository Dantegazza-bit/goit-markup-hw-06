(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");
    document.body.classList.toggle("no-scroll");
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (e.matches) {
      mobileMenu.classList.remove("is-open");
      openMenuBtn.setAttribute("aria-expanded", false);
      document.body.classList.remove("no-scroll");
    }
  });
})();
