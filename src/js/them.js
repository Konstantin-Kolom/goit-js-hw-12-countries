import { fetchCountries } from './fetchCountries.js'
import countryCardTpl from '../templates/country.hbs'
import countryInfoTpl from '../templates/information.hbs'
import { refs } from './refs.js'
import Notiflix from "notiflix";

const DEBOUNCE_DELAY = 300;
export let name = "";

//////////////  Разметка в HTML и натификация, по  количеству полученных строк данных
function renderCountryDescription(country) {
   if (country.length < 10) {
      const markup = countryCardTpl(country);
      refs.countryList.innerHTML = markup;
   }
   if (country.length === 1) {
      const markup = countryInfoTpl(country);
      refs.countryList.innerHTML = markup;
   }
   if (country.length >= 11) {
      notifixSearchCountry(Notiflix);
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
         console.log(error);
      });
}

// Ошибка ввода
export function fetchStatusHandler(response) {
  if (response.status === 200) {
    return response;
  } else {
   erorrSearchCountry(Notiflix)
   // const error = new Error(response.statusText || response.status)
   // error.response = response
   // return Promise.reject(error)
  }
}



///////////// Нотификации
//  изменение формата натификаций
changesFormatNatification(Notiflix)

function changesFormatNatification() {
   Notiflix.Notify.init({
      // useFontAwesome: true,
      fontAwesomeIconSize: "24px",
      fontAwesomeIconStyle: "shadow",
      // fontFamily: "Quicksand",
      useGoogleFont: true,
      opacity: 1,
   });
}

// уведомление если введен значение с большим отборома данных
function notifixSearchCountry() {
   const notiflix = require("notiflix");
   console.log(notiflix);
   Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
};


// уведомление о ошибке - не корректный запрос 
function erorrSearchCountry() {
Notiflix.Notify.failure('Oops, there is no country with that name');
}

// натификаци при выполненни запроса, (попробовал как работает)))
// loadingIndicator(Notiflix)
function loadingIndicator() {
   Notiflix.Loading.standard('Database search...');
}

 
 