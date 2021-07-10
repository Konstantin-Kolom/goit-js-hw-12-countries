import countryCardTpl from '../templates/country.hbs'
// import countryInfo from '../templates/information.hbs'
import '../index.js'

// console.log(DEBOUNCE_DELAY);

const refs = {
   inputField: document.querySelector('#search-box'),
   countryList: document.querySelector('.country-list'),
   countryInfo: document.querySelector('.country-info')
}

refs.inputField.addEventListener('input', countrySearch);

// Ввод сзанчений дял поиска в input
function countrySearch() {
   // valueSearch.push()   
   console.log(valueSearch);  
};

SearchValue()

function SearchValue() {
   const valueSearch = refs.inputField.textContent
   console.log(valueSearch);
};



fetch(`https://restcountries.eu/rest/v2/name/eesti`)
   .then(response => {
      return response.json()  
   })
   .then(country => {
      const markup = countryCardTpl(country);
      // console.log(country);
      console.log(markup);
   }).catch(error => {
      console.log(error); 
   })
  


// const debounce = require('lodash.debounce');
// console.log(debounce);

