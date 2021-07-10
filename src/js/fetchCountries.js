import { renderCountryDescription } from './them.js'

export function fetchCountries() {
   fetch(`https://restcountries.eu/rest/v2/name/bra`)
      .then(response => {
         return response.json();
      })
      
      .then(renderCountryDescription)
               
      .catch(error => {
         console.log(error);
      });
   };
