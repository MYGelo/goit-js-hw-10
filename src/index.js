import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
searchBox.insertAdjacentHTML(
  'beforebegin',
  '<header><h1>Country Finder</h1></header>'
);
