import { randomQuotes } from './db.js';

/* console.log(randomQuotes.length); */

const btn = document.querySelector('.btn');
const h = document.querySelector('h1');
let quote = document.querySelector('.quote');
const body = document.body;

btn.addEventListener('mouseenter', () => {
  body.style.background =
    'linear-gradient( 99.9deg, rgba(27,24,31,1) 21.2%, rgba(50,4,89,1) 84.8% )';
  h.style.color = '#ededed';
});

btn.addEventListener('touchstart', () => {
  body.style.background =
    'linear-gradient( 99.9deg, rgba(27,24,31,1) 21.2%, rgba(50,4,89,1) 84.8% )';
  h.style.color = '#ededed';
});

btn.addEventListener('mouseleave', () => {
  body.style.background = 'linear-gradient(to right, #FFA69E, #861657)';
  h.style.color = '#181818';
});
btn.addEventListener('touchend', () => {
  body.style.background = 'linear-gradient(to right, #FFA69E, #861657)';
  h.style.color = '#181818';
});

const randomQuote = (array) => {
  let theQuote;
  let theAuthor;
  let randomQ;
  if (
    Array.isArray(array) &&
    array !== null &&
    array !== undefined &&
    array.length !== 0
  ) {
    randomQ = array[Math.floor(Math.random() * array.length)];
    theQuote = randomQ.text;
    theAuthor = randomQ.author;
  } else {
    console.log('No array of words is found, need one to function');
  }
  return theQuote;
};

let dailyQuote;
function getQuote() {
  dailyQuote = randomQuote(randomQuotes);
}
var i = 0;
var text;
var speed = 50;

function typeWriter() {
  text = dailyQuote;
  if (i < text.length) {
    quote.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

btn.addEventListener('click', () => {
  quote.textContent = '';
  btn.setAttribute('disabled', true);
  animate();
  getQuote();
  typeWriter();
  setTimeout(() => {
    btn.removeAttribute('disabled', false);
    animate.remove;
    location.reload();
  }, 10000);
});

// create a sky with stars

function addStarsLoop(i) {
  var i = i;
  while (i) {
    // calling the create star element function
    createStarElements();
    i -= 1;
  }
}

function createStarElements() {
  var star = document.createElement('span');
  star.className = 'star';
  star.style.top = 100 * Math.random() + '%';
  star.style.left = 100 * Math.random() + '%';
  document.querySelector('.underlay').appendChild(star);
}
let stars;
// getting all the stars from the dom that is created
function getAllStars() {
  stars = document.querySelectorAll('.star');
  /* console.log(stars) */
}

function animate() {
  Array.prototype.forEach.call(stars, function (el, i) {
    TweenMax.to(el, Math.random() * 0.5 + 0.5, {
      opacity: Math.random(),
      onComplete: animate,
    });
  });
}

addStarsLoop(140);
getAllStars();
