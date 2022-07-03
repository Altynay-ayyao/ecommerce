//Slideshow
const slideshowDivs = () => {
  for (let i = 1; i <= 5; i++) {
    const div = document.createElement('div');
    div.style.backgroundImage = `url(/images/slideshow/section-1-bg-${i}.jpg)`;

    i === 1 && div.classList.add('change');

    document.querySelector('.slideshow').appendChild(div);
  }
};

const divs = document.querySelectorAll('.slideshow div');
const slideshow = () => {
  setInterval(() => {
    const div = document.querySelector('.slideshow .change');
    div.classList.remove('change');

    div.nextElementSibling.classList.add('change');
  }, 1000);
};

slideshow();

slideshowDivs();
//End of Slideshow
