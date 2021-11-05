const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ListImagesGalleryEl = document.querySelector(".gallery");
ListImagesGalleryEl.style.display = "grid";
ListImagesGalleryEl.style.gridTemplateColumns = "1fr 1fr 1fr";
ListImagesGalleryEl.style.columnGap = "20px";
ListImagesGalleryEl.style.padding = "0";
ListImagesGalleryEl.style.margin = "0";
ListImagesGalleryEl.style.listStyle = "none";

const itemImageGallery = images
  .map(
    (
      item
    ) => `<li><img src=${item.url} alt="${item.alt}" width= 100% height= 100% object-fit=  cover
   /></li>`
  )
  .join("");

ListImagesGalleryEl.insertAdjacentHTML("afterbegin", itemImageGallery);