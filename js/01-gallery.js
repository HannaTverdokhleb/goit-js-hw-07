import { galleryItems } from './gallery-items.js';
// Change code below this line

let galleryContainer = document.querySelector('.gallery');

let galleryInnerContent = galleryItems.map(function (item) {
  return renderGalleryItems(item);
});

galleryContainer.innerHTML = galleryInnerContent.join('');

function renderGalleryItems(item) {
  return `<div class="gallery__item">
       <a class="gallery__link" href="${item.original}">
          <img
             class="gallery__image"
             src="${item.preview}"
             data-source="${item.original}"
             alt="${item.description}"
          />
       </a>
       </div>`;
}

const links = document.querySelectorAll('.gallery__link');

links.forEach((item) => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    const url = e.target.getAttribute('data-source');
    const instance = basicLightbox.create(
      `<img src="${url}" width="800" height="600">`,
      {
        onShow: (instance) => {
          window.addEventListener('keydown', onEscDown);
        },
        onClose: (instance) => {
          window.removeEventListener('keydown', onEscDown);
        },
      }
    );

    function onEscDown(event) {
      if (event.key === 'Escape') {
        instance.close();
      }
    }

    instance.show();
  });
});
