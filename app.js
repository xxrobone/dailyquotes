import { randomQuotes } from './db.js';
/* const base_url = 'https://type.fit/api/quotes';
const single_quote_url = '';
 */
console.log(randomQuotes.length);

const btn = document.querySelector('.btn');
let quote = document.querySelector('.quote');

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

/* 
async function getapi(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
} */
/* 
getapi(base_url); */
/* 
async function getSingleQuote(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
}

getSingleQuote(single_quote_url); */
let dailyQuote;
function getQuote() {
  dailyQuote = randomQuote(randomQuotes);
}
var i = 0;
var text;
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  text = dailyQuote; /* The text */
  if (i < text.length) {
    quote.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

btn.addEventListener('click', () => {
  quote.textContent = '';
  getQuote();
  typeWriter();
  setTimeout(() => {
    location.reload();
  }, 10000);
});
