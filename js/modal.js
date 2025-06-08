(() => {
  const openModalBtn = document.querySelector("[data-modal-open]");
  const closeModalBtn = document.querySelector("[data-modal-close]");
  const backdrop = document.querySelector("[data-modal]");

  openModalBtn?.addEventListener("click", () => {
    backdrop.classList.remove("is-hidden");
  });

  closeModalBtn?.addEventListener("click", () => {
    backdrop.classList.add("is-hidden");
  });

  backdrop?.addEventListener("click", (event) => {
    if (event.target === backdrop) {
      backdrop.classList.add("is-hidden");
    }
  });
})();
