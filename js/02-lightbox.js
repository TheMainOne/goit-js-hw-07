import { galleryItems } from './gallery-items.js';
// Change code below this line
let gallery = document.querySelector('.gallery');

const markup = galleryItems.map(item => `
<li>
<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
</li>
`).join('');

gallery.innerHTML = markup;

gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});

