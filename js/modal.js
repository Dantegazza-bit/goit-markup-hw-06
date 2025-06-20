document.addEventListener("DOMContentLoaded", () => {
  console.log("modal.js loaded");

  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    backdrop: document.querySelector("[data-modal]"),
  };

  if (!refs.openModalBtn || !refs.closeModalBtn || !refs.backdrop) {
    console.warn("Some modal elements not found!");
    return;
  }

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.backdrop.addEventListener("click", onBackdropClick);

  function toggleModal() {
    refs.backdrop.classList.toggle("is-hidden");
  }

  function onBackdropClick(event) {
    if (event.target === refs.backdrop) {
      toggleModal();
    }
  }
});
