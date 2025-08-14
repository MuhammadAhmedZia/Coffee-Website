// Change navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});



const sliders = document.querySelectorAll('.slider-container');

sliders.forEach(slider => {
  const slidesContainer = slider.querySelector('.slides');
  const slides = slider.querySelectorAll('.slide');
  const dotsContainer = slider.querySelector('.dots');
  const prevBtn = slider.querySelector('.prev');
  const nextBtn = slider.querySelector('.next');

  let currentIndex = 0;
  let slidesToShow = 4; // default

  function updateSlidesToShow() {
    if (window.innerWidth < 600) {
      slidesToShow = 2;
    } else if (window.innerWidth < 900) {
      slidesToShow = 3;
    } else {
      slidesToShow = 4;
    }
    createDots();
    updateSlider();
  }

  function createDots() {
    dotsContainer.innerHTML = '';
    slides.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function updateSlider() {
    slidesContainer.style.transform = `translateX(-${currentIndex * (100 / slidesToShow)}%)`;
    dotsContainer.querySelectorAll('.dot').forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, slides.length - slidesToShow);
    updateSlider();
  });

  window.addEventListener('resize', updateSlidesToShow);
  updateSlidesToShow();
});
