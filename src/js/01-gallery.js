// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this linenpi

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const markup = galleryMarkup();
gallery.insertAdjacentHTML('afterbegin', markup);

function galleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a 
    class="gallery__item" 
    href=${original}>
  <img 
  class="gallery__image" 
  src= ${preview}
  alt=${description} />
</a>`;
    })
    .join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
