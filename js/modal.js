document.addEventListener("DOMContentLoaded", () => {
  console.log("modal.js loaded");

  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    backdrop: document.querySelector("[data-modal]"),
  };

  console.log("openModalBtn", refs.openModalBtn);
  console.log("closeModalBtn", refs.closeModalBtn);
  console.log("backdrop", refs.backdrop);

  if (!refs.openModalBtn || !refs.closeModalBtn || !refs.backdrop) {
    console.warn("⚠️ One or more modal elements not found");
    return;
  }

  refs.openModalBtn.addEventListener("click", () => {
    console.log("👆 CLICKED Order Service");
    toggleModal();
  });

  refs.closeModalBtn.addEventListener("click", () => {
    console.log("❌ CLICKED Close Button");
    toggleModal();
  });

  refs.backdrop.addEventListener("click", (event) => {
    console.log("🖱 CLICKED Backdrop");
    if (event.target === refs.backdrop) {
      toggleModal();
    }
  });

  function toggleModal() {
    console.log("🔁 TOGGLE MODAL");
    refs.backdrop.classList.toggle("is-open");
  }
});
