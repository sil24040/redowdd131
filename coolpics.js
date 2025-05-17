// Toggle menu
const menuButton = document.querySelector(".menu-button");

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

// Responsive fix on resize
function handleResize() {
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);

// Modal image viewer
const modal = document.querySelector("dialog.modal");
const modalImg = document.querySelector(".modal-img");
const closeBtn = document.querySelector(".close-viewer");
const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", (event) => {
  const img = event.target.closest("img");
  if (img) {
    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt");
    const base = src.split("-")[0];
    modalImg.src = `${base}-full.jpeg`;
    modalImg.alt = alt;
    modal.showModal();
  }
});

closeBtn.addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});