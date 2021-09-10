const cardSlide = new Swiper(".swiper-container", {
    effect: "creative",
    direction: "vertical",
    mousewheel: true,
    loop: true,
    slidesPerView: 1.2,
    creativeEffect: {
      prev: {
        translate: [0, 0, -350],
      },
      next: {
        translate: [0, "110%", 0],
      },
    },
});

const viewWidth = window.innerWidth;
const viewHeight = window.innerHeight;

console.log(viewWidth, viewHeight);
const swiperContainer = document.querySelector(".swiper-container");
const container = document.querySelector(".container");
swiperContainer.style.height = viewHeight+'px';
container.style.width = viewWidth+'px';