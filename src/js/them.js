
import { fetchCountries } from './fetchCountries.js'
import countryCardTpl from '../templates/country.hbs'
import countryInfoTpl from '../templates/information.hbs'
import { refs } from './refs.js'
import { DEBOUNCE_DELAY } from '../index.js'

// export { renderCountryDescription }
// const DEBOUNCE_DELAY = 300;
console.log(DEBOUNCE_DELAY);

fetchCountries() 


///////////// Разметка в HTML
function renderCountryDescription(country) {
   if (country.length === 1) {
      const markup = countryInfoTpl(country);
      refs.countryList.innerHTML = markup;
   } else { const markup = countryCardTpl(country);
      refs.countryList.innerHTML = markup;
   }
};
      
  

// const debounce = require('lodash.debounce');
// console.log(debounce);



// refs.inputField.addEventListener('input', countrySearch);

// Ввод сзанчений дял поиска в input
// function countrySearch() {
//    // valueSearch.push()   
//    console.log(valueSearch);  
// };

// SearchValue()

// function SearchValue() {
//    const valueSearch = refs.inputField.textContent
//    // console.log(valueSearch);
// };

//////////////////
// import * as fetchCountries from './fetchCountries.js'
// import countryCardTpl from '../templates/country.hbs'
// import { from } from 'form-data';
