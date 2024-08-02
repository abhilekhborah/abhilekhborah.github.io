---
title: "Gallery"
layout: gridlay
sitemap: false
permalink: /gallery/
---

## Gallery

I love capturing moments! Here's a little preview of my gallery!

<div class="gallery">
  <img src="A8059230-04DC-44F7-9060-C991D6434860 (1).jpg" alt="Image Description">
  <img src="FullSizeRender 2 (1).jpg" alt="Image Description">
  <img src="IMG_4183.jpg" alt="Image Description">
  <img src="IMG_6907.jpg" alt="Image Description">
  <img src="IMG_4372 2.jpg" alt="Image Description">
  <img src="IMG_4434.jpg" alt="Image Description">
  <img src="IMG_6604.jpg" alt="Image Description">
  <img src="IMG_1093.jpg" alt="Image Description">
</div>

<style>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 50px; /* Space between images */
  padding: 20px; /* Padding around the grid */
  margin: 0 auto; /* Center the gallery */
  max-width: 1200px; /* Limit gallery width */
}

.gallery img {
  width: 100%;
  height: auto;
  border-radius: 15px; /* Rounded corners for images */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  object-fit: cover;
  padding: 5px; /* Internal padding around the image */
}

/* Remove the hover effect */
/* .gallery img:hover {
  transform: scale(1.05);
} */

@media (max-width: 768px) {
  .gallery {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px; /* Adjust gap for medium screens */
  }
}

@media (max-width: 480px) {
  .gallery {
    grid-template-columns: 1fr;
    gap: 10px; /* Adjust gap for small screens */
  }
}
</style>

