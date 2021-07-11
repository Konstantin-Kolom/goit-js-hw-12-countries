import { fetchCountries } from './fetchCountries.js'
import countryCardTpl from '../templates/country.hbs'
import countryInfoTpl from '../templates/information.hbs'
import { refs } from './refs.js'
import Notiflix from "notiflix";
// import { Notify } from "notiflix";

// export { renderCountryDescription }

const DEBOUNCE_DELAY = 300;
export let name = "";

//////////////  Разметка в HTML
function renderCountryDescription(country) {
   if (country.length === 1) {
      const markup = countryInfoTpl(country);
      refs.countryList.innerHTML = markup;
   }
   if (country.length > 10 || country.length < 2) {
      notifixSearchCountry(Notiflix)
   }
   else {
      const markup = countryCardTpl(country);
      refs.countryList.innerHTML = markup;
   }

};

// очистка списка
function clearsMarkup() {
   refs.countryList.innerHTML = "";
}

////////////// Обработка данных введенных в поле поиска
refs.inputField.addEventListener('input', _.debounce(() => {
   countrySearch()}, DEBOUNCE_DELAY)
   );

// Ввод сзанчений дял поиска в input
function countrySearch() {
   name = document.getElementById("search-box").value;
   if (name === "") {
      clearsMarkup()
   } else {
      dataСall()
   }
};

// Вызов данных
function dataСall() {
   fetchCountries(name)
      .then(renderCountryDescription)
      .catch(error => {
         console.log(404);
      });
}

///////////// Нотификации
nnn(Notiflix)

function nnn() {
   Notiflix.Notify.init({
      useFontAwesome: true,
      fontAwesomeIconSize: "24px",
      fontAwesomeIconStyle: "shadow",
      fontFamily: "Quicksand",
      useGoogleFont: true,
      opacity:1,
   });
}

function notifixSearchCountry() {
   const notiflix = require("notiflix");
   console.log(notiflix);
   Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
};

erorrSearchCountry(Notiflix)

function erorrSearchCountry() {
Notiflix.Notify.failure('Oops, there is no country with that name');
 }

 
 