let swiper = new Swiper(".swiper-container", {
    grabCursor: true,
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
