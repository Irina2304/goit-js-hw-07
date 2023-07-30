import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const container = document.querySelector(".gallery");

const marcup = galleryItems.map(
    ({ preview, original, description }) => 
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>`).join('')

container.insertAdjacentHTML("beforeend", marcup);
container.addEventListener("click", onClick);


function onClick(evt) {
    evt.preventDefault()
    const { target } = evt;
    
    if (!target.classList.contains("gallery__image")) {
        return;
    }
    
    const instance = basicLightbox.create(`
        <img src="${target.dataset.source}" width="800" height="600">`,
        {
            onShow: () => { document.addEventListener("keydown", closeModal) },
            onClose: () => { document.removeEventListener("keydown", closeModal); }
        }
    );

    instance.show()

    function closeModal(evt) {
        if (evt.code === "Escape") {
            instance.close();
        }
    }
}


