import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import getRefs from './js/refs';

const DEBOUNCE_DELAY = 300;

const refs = getRefs();

refs.searchBox.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));

function searchCountry(e) {
  e.preventDefault();
  clearData();
  const searchTerm = refs.searchBox.value.trim();

if (searchTerm){
  fetchCountries(searchTerm).then(r => {
    if (r.length > 10) {

      Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
      console.log("Too many matches found. Please enter a more specific name.");

  }else if (r.length === 0){

    Notiflix.Notify.failure("Oops, there is no country with that name");
    console.log("Oops, there is no country with that name");

  } else if (r.length >= 2 && r.length <= 10) {
    console.log('render country list')
    listOfCountries(r);
    
  } else if (r.length === 1) {

    console.log(' render country')
    renderCountry(r);
  }
});
}
}

function listOfCountries(countries) {
  const markup = countries.map(country => {
    clearData();
    return `<li>
    <img src="${country.flags.svg}" alt="Flag of ${country.name.official}"width="150px"border="1px">
    <b>${country.name.official}</p>
    </li>`;

  }).join('');
  refs.countryList.innerHTML = markup;
}

function renderCountry(countries) {
const markup = countries.map(country => {
  clearData();
  
  return `<div> 
  <img src="${country.flags.svg}"alt="Flag of ${country.name.official}"width="150" border = "1px"> 
  <p><b>${country.name.official}</p>
  <p><b>Capital</b>: ${country.capital}</p>
  <p><b>Population</b>: ${country.population}</p>
  <p><b>Languages</b>: ${Object.values(country.languages)} </p>
  </div>`;
}).join('');
refs.countryInfo.innerHTML = markup;
}

function clearData() {
  refs.countryInfo.innerHTML = '';
  refs.countryList.innerHTML = '';
}


document.querySelector('#search-box').placeholder = 'Search for any country...';