import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery');
list.addEventListener('click', handlerClickOnGalleryItem);

function handlerClickOnGalleryItem(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  } else {
   basicLightbox.create(`
		<img width="1280" src="${event.target.dataset.source}">
	`).show()
  }
};

const markup = galleryItems.map((item) => `
<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`).join('');

list.innerHTML = markup;





