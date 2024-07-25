document.addEventListener("DOMContentLoaded", () => {
  const weddingContainer = document.getElementById("wedding-container");
  const babyContainer = document.getElementById("baby-container");
  const fashionContainer = document.getElementById("fashion-container");

  const images = [
    { src: "https://picsum.photos/600/800?random=1", alt: "Gallery Image 1" },
    { src: "https://picsum.photos/1000/400?random=2", alt: "Gallery Image 2" },
    { src: "https://picsum.photos/600/400?random=3", alt: "Gallery Image 3" },
    { src: "https://picsum.photos/600/400?random=4", alt: "Gallery Image 4" },
    { src: "https://picsum.photos/600/400?random=5", alt: "Gallery Image 5" },
    { src: "https://picsum.photos/600/400?random=6", alt: "Gallery Image 6" },
    { src: "https://picsum.photos/600/400?random=7", alt: "Gallery Image 7" },
    { src: "https://picsum.photos/600/400?random=8", alt: "Gallery Image 8" },
    { src: "https://picsum.photos/600/400?random=9", alt: "Gallery Image 9" },
    { src: "https://picsum.photos/600/400?random=10", alt: "Gallery Image 10" },
    { src: "https://picsum.photos/600/400?random=11", alt: "Gallery Image 11" },
    { src: "https://picsum.photos/600/400?random=12", alt: "Gallery Image 12" },
    { src: "https://picsum.photos/600/400?random=13", alt: "Gallery Image 13" },
    { src: "https://picsum.photos/600/400?random=14", alt: "Gallery Image 14" },
    { src: "https://picsum.photos/600/400?random=15", alt: "Gallery Image 15" },
    { src: "https://picsum.photos/600/400?random=16", alt: "Gallery Image 16" },
    { src: "https://picsum.photos/600/400?random=17", alt: "Gallery Image 17" },
    { src: "https://picsum.photos/600/400?random=18", alt: "Gallery Image 18" },
    { src: "https://picsum.photos/600/400?random=19", alt: "Gallery Image 19" },
    { src: "https://picsum.photos/600/400?random=20", alt: "Gallery Image 20" },
    { src: "https://picsum.photos/600/400?random=21", alt: "Gallery Image 21" },
    { src: "https://picsum.photos/600/400?random=22", alt: "Gallery Image 22" },
    { src: "https://picsum.photos/600/400?random=23", alt: "Gallery Image 23" },
    { src: "https://picsum.photos/600/400?random=24", alt: "Gallery Image 24" },
    { src: "https://picsum.photos/600/400?random=25", alt: "Gallery Image 25" },
    { src: "https://picsum.photos/600/400?random=26", alt: "Gallery Image 26" },
    { src: "https://picsum.photos/600/400?random=27", alt: "Gallery Image 27" },
    { src: "https://picsum.photos/600/400?random=28", alt: "Gallery Image 28" },
    { src: "https://picsum.photos/600/400?random=29", alt: "Gallery Image 29" },
    { src: "https://picsum.photos/600/400?random=30", alt: "Gallery Image 30" },
    { src: "https://picsum.photos/600/400?random=31", alt: "Gallery Image 31" },
    { src: "https://picsum.photos/600/400?random=32", alt: "Gallery Image 32" },
    { src: "https://picsum.photos/600/400?random=33", alt: "Gallery Image 33" },
    { src: "https://picsum.photos/600/400?random=34", alt: "Gallery Image 34" },
    { src: "https://picsum.photos/600/400?random=35", alt: "Gallery Image 35" },
    { src: "https://picsum.photos/600/400?random=36", alt: "Gallery Image 36" },
    { src: "https://picsum.photos/600/400?random=37", alt: "Gallery Image 37" },
    { src: "https://picsum.photos/600/400?random=38", alt: "Gallery Image 38" },
    { src: "https://picsum.photos/600/400?random=39", alt: "Gallery Image 39" },
    { src: "https://picsum.photos/600/400?random=40", alt: "Gallery Image 40" },
    { src: "https://picsum.photos/600/400?random=41", alt: "Gallery Image 41" },
    { src: "https://picsum.photos/600/400?random=42", alt: "Gallery Image 42" },
    { src: "https://picsum.photos/600/400?random=43", alt: "Gallery Image 43" },
    { src: "https://picsum.photos/600/400?random=44", alt: "Gallery Image 44" },
    { src: "https://picsum.photos/600/400?random=45", alt: "Gallery Image 45" },
    { src: "https://picsum.photos/600/400?random=46", alt: "Gallery Image 46" },
    { src: "https://picsum.photos/600/400?random=47", alt: "Gallery Image 47" },
    { src: "https://picsum.photos/600/400?random=48", alt: "Gallery Image 48" },
    { src: "https://picsum.photos/600/400?random=49", alt: "Gallery Image 49" },
    { src: "https://picsum.photos/600/400?random=50", alt: "Gallery Image 50" },
  ];
  images.forEach((image, index) => {
    const colDiv = document.createElement("div");
    colDiv.classList.add("col-lg-3", "col-md-4", "col-6");

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "list-card");

    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;
    img.classList.add("card-img-top", "rounded", "list-img");
    img.addEventListener("click", function(event) {
      event.preventDefault();
      openModal(index);
    });

    cardDiv.appendChild(img);
    colDiv.appendChild(cardDiv);
    if (index < 15) {
      weddingContainer.appendChild(colDiv);
    } else if (index < 27) {
      babyContainer.appendChild(colDiv);
    } else if (index < 50) {
      fashionContainer.appendChild(colDiv);
    }
  });

  const modalSwiperImages1 = document.getElementById("modal-swiper-images1");
  const modalSwiperImages2 = document.getElementById("modal-swiper-images2");
  
  // Clear previous slides
  modalSwiperImages1.innerHTML = '';
  modalSwiperImages2.innerHTML = '';

  images.forEach((image, idx) => {
    const colDiv1 = document.createElement("swiper-slide");
    colDiv1.classList.add("gallery-modal-swiper-slide1", "bg-dark");
    const img1 = document.createElement("img");
    img1.src = image.src;
    img1.alt = image.alt;
    colDiv1.appendChild(img1);
    modalSwiperImages1.appendChild(colDiv1);

    const colDiv2 = document.createElement("swiper-slide");
    colDiv2.classList.add("gallery-modal-swiper-slide2");
    const div = document.createElement("div");
    div.classList.add("d-flex", "images-div", "bg-dark", "w-100");
    colDiv2.appendChild(div);
    const img2 = document.createElement("img");
    img2.src = image.src;
    img2.alt = image.alt;
    div.appendChild(img2);
    modalSwiperImages2.appendChild(colDiv2);
  });

  // Initialize Swiper instances
  let swiper2, swiper1;

  function openModal(index) {
    if (!swiper2 || !swiper1) {
      swiper2 = new Swiper('.gallery-modal-mySwiper2', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });

      swiper1 = new Swiper('.gallery-modal-mySwiper', {
        spaceBetween: 10,
        navigation: true,
        thumbs: {
          swiper: swiper2,
        },
      });
    }

    // Set initial slide to the clicked image index
    swiper1.slideTo(index);
    swiper2.slideTo(index);

    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
  }
});
