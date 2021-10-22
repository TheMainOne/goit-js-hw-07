import { galleryItems } from './gallery-items.js';
// Change code below this line
let list = document.querySelector('.gallery');

const markup = galleryItems.map(item => `
<li>
<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
</li>
`).join('');

list.innerHTML = markup;

list = new SimpleLightbox('.gallery a');
list.on('show.simplelightbox');

list.on('error.simplelightbox', function (e) {
	console.log(e); // some usefull information
});



// gelleryRef.addEventListener('click', imgShow);

// const instance = basicLightbox.create(`<img src="" />`, {
//   onShow: () => {
//     window.addEventListener('keydown', keydownEscape);
//   },
//   onClose: () => {
//     window.removeEventListener('keydown', keydownEscape);
//   },
// });

// function keydownEscape(event) {
//   console.log(event);
//   if (event.key === 'Escape') {
//     instance.close();
//     return;
//   }
// }

// function imgShow(event) {
//   event.preventDefault();
//   instance.element().querySelector('img').src = event.target.dataset.source;
//   instance.show();
// }