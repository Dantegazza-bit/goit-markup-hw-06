(() => {
  const openModalBtn = document.querySelector("[data-modal-open]");
  const closeModalBtn = document.querySelector("[data-modal-close]");
  const backdrop = document.querySelector("[data-modal]");

  const openModal = () => {
    backdrop.classList.remove("is-hidden");
    document.addEventListener("keydown", onEscKeyPress); // 👈 слухаємо Esc
  };

  const closeModal = () => {
    backdrop.classList.add("is-hidden");
    document.removeEventListener("keydown", onEscKeyPress); // 👈 очищаємо слухача
  };

  const onEscKeyPress = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  openModalBtn?.addEventListener("click", openModal);
  closeModalBtn?.addEventListener("click", closeModal);

  backdrop?.addEventListener("click", (event) => {
    if (event.target === backdrop) {
      closeModal(); // 👈 клік поза модалкою
    }
  });
})();
