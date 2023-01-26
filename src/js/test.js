// 1st work 




// import './css/styles.css';
// import Notiflix from 'notiflix';
// import debounce from 'lodash.debounce';
// import { fetchCountries } from './fetchCountries';

// const refs = {
//   searchBox: document.querySelector('#search-box'),
//   countryList: document.querySelector('.country-list'),
//   countryInfo: document.querySelector('.country-info'),
//   DEBOUNCE_DELAY: (DEBOUNCE_DELAY = 300),
// };

// const searchCountry = () => {
//   const searchTerm = refs.searchBox.value.trim();

//   fetchCountries(searchTerm)
//     .then(data => {
//       countriesData(data);
//     })
//     .catch(error => {
//       if (trimmedValue !== '') {
//         errorInput(error);
//       }
//       if (trimmedValue === '') {
//         clearData(refs.countryList);
//         clearData(refs.countryInfo);
//       }
//     });
// };
// function errorInput() {
//   Notiflix.Notify.failure('Ops, there is no country with that name');
//   console.log(
//     'Ops, there is no country with that name (Ой, нет страны с таким названием)'
//   );
// }

// function countriesData(data) {
//   if (data.length > 10) {
//     Notiflix.Notify.info(
//       'Too many matches found. Please enter a more specific name.'
//     );
//     console.log(
//       'Too many matches found. Please enter a more specific name(Найдено слишком много совпадений. Пожалуйста, введите более конкретное имя).'
//     );
//   } else if (data.length > 1 && data.length <= 10) {
//     clearData(refs.countryList);
//     clearData(refs.countryInfo);

//     return (refs.countryList.innerHTML = data
//       .map(
//         item => `
                
//                     <li>
//                         <img src = '${item.flags.svg}' width = 150px />
//                         <p>${item.name}</p>
//                     </li>
                
//                 `
//       )
//       .join(''));
//   } else {
//     clearData(refs.countryList);
//     clearData(refs.countryInfo);
//     return (refs.countryInfo.innerHTML = data
//       .map(
//         item => `
                
//                     <div >
                    
//                         <img src = '${item.flags.svg}' width = 150px />
    
//                         <div>
//                             <h3>${item.name}</h3>
//                             <p>Region:  ${item.region}</p>
//                             <p>Capital:  ${item.capital}</p>
//                             <p>Population:  ${item.population.toLocaleString()}</p>
//                             <p>Languages:  ${item.languages[0].name}</p>
//                         </div>
//                     </div>
                
//                 `
//       )
//       .join(''));
//   }
// }

// function clearData(output) {
//   output.innerHTML = '';
// }

// refs.searchBox.addEventListener(
//   'input',
//   debounce(searchCountry, refs.DEBOUNCE_DELAY)
// );

// refs.searchBox.placeholder = 'Search for any country....';
