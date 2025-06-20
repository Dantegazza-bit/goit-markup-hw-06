console.log("modal.js loaded");

const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  backdrop: document.querySelector("[data-modal]"),
};

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
