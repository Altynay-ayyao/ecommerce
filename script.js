//Slideshow
const slideshowDivs = () => {
  for (let i = 1; i <= 5; i++) {
    const div = document.createElement('div');
    div.style.backgroundImage = `url(/images/slideshow/section-1-bg-${i}.jpg)`;

    i === 1 && div.classList.add('change'); //i = 1 means it is the frist iteration.

    document.querySelector('.slideshow').appendChild(div);
  }
};

slideshowDivs();

const divs = document.querySelectorAll('.slideshow div');

let counter = 1;
const slideshow = () => {
  setInterval(() => {
    counter++;
    const div = document.querySelector('.slideshow .change');
    div.classList.remove('change');

    if (counter < divs.length) {
      div.nextElementSibling.classList.add('change');
    } else {
      divs[0].classList.add('change');
      counter = 1;
    }
  }, 2000);
};

slideshow();

//End of Slideshow

//Get the bak to top button:
mybutton = document.getElementById('myBtn');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//end of scroll to top button
