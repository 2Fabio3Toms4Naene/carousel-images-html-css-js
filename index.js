/* global document, setInterval, clearInterval */
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevButton = document.querySelector(".button-prev");
const nextButton = document.querySelector(".button-next");

let index = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

prevButton.addEventListener("click", () => {
  stopAutoSlide();
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
  startAutoSlide();
});

nextButton.addEventListener("click", () => {
  stopAutoSlide();
  index = (index + 1) % slides.length;
  showSlide(index);
  startAutoSlide();
});

dots.forEach((dot, dotIndex) => {
  dot.addEventListener("click", () => {
    stopAutoSlide();
    index = dotIndex;
    showSlide(index);
    startAutoSlide();
  });
});

let autoSlideInterval;
const delay = 5000;

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, delay);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}
startAutoSlide();
