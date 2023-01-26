// export function fetchCountries(searchTerm) {
//   return fetch(`https://restcountries.com/v2/name/${searchTerm}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .catch(error => console.log(`${error.name}: ${error.message}`));
// }


export const fetchCountries = name => {
  return fetch(`https://restcountries.com/v3.1/name/${name}?fields=,name,capital,population,flags,languages`)
  .then(response => {
      if (!response.ok) {
          if (response.status === 404) {
              return [];
          }
          throw new Error(response.status);
      }
      return response.json();
  })
  .catch(error => {
      console.error(error);
  });
};