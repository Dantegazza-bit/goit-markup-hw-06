(() => {
  const mobileMenu = document.querySelector(".mobile-menu");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");

    document.body.style.overflow = isMenuOpen ? "" : "hidden";
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  // Закриваємо мобільне меню при зміні ширини вʼюпорту
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (e.matches) {
      mobileMenu.classList.remove("is-open");
      openMenuBtn.setAttribute("aria-expanded", false);
      document.body.style.overflow = "";
    }
  });
})();
