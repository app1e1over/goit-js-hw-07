import { galleryItems } from "./gallery-items.js";
// Change code below this line
let instance=basicLightbox.create(document.createElement("img").outerHTML, {
  closable: true,
  className: "image",
});

function zoom(img_old) {
  instance.element().querySelector("img").src = img_old.dataset.source;
  instance.show();
}

document.addEventListener("keydown", function (event) {
  if (event.keyCode == 27 && instance != undefined && instance.visible()) {
    instance.close();
  }
});

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
    img.dataset.source = el.original;

    a.appendChild(img);
    cont.appendChild(a);
    return cont.outerHTML;
  })
  .join("");

let elements = container.getElementsByTagName("li");
for (let i = 0; i < elements.length; i++) {
  const el = elements.item(i);
  el.addEventListener("click", (e) => {
    zoom(e.target);
  });
}

//console.log(galleryItems);
