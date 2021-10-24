import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");
list.addEventListener("click", imageShow);

const instance = basicLightbox.create(`<img src="" />`, {
  onShow: () => {
    window.addEventListener("keydown", keydownEscape);
  },
  onClose: () => {
    window.removeEventListener("keydown", keydownEscape);
  },
});

function imageShow(event) {
  event.preventDefault();
  instance.element().querySelector("img").src = event.target.dataset.source;
  instance.show();
}

function keydownEscape(event) {
  console.log(event);
  if (event.key === "Escape") {
    instance.close();
    return;
  }
}

const markup = galleryItems
  .map(
    (item) => `
<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
  )
  .join("");

list.innerHTML = markup;
