import { galleryItems } from "./gallery-items.js";
// Change code below this line
const container = document.querySelector(".gallery");
container.innerHTML = galleryItems
.map((el) => {
  const cont = document.createElement("li");
  cont.classList.add("gallery__item");

  const a = document.createElement("a");
  a.href = el.original;
  a.classList.add("gallery__link");

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = el.preview;
  img.alt = el.description;

  a.appendChild(img);
  cont.appendChild(a);
  return cont.outerHTML;
})
.join("");

let images = container.getElementsByTagName("li");
for (let i = 0; i < images.length; i++) {
  const image = images.item(i);
  image.addEventListener("click", (e) => {
    lightbox.open(e.target);
  });
}

var lightbox = new SimpleLightbox('.gallery a',{
  captionsData: "alt",
  captionDelay:250
});
