// import { renderCountryDescription } from './them.js'
// import { countrySearch } from './them.js'
// import { name } from './them.js'
import { fetchStatusHandler } from './them.js'

export function fetchCountries(name) {
   return fetch(`https://restcountries.eu/rest/v2/name/${name}?fields=name;capital;population;languages;flag`)
      .then(fetchStatusHandler)
      .then(response => {
        return response.json();
      })
   };
