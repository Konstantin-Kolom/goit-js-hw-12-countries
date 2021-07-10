import '../node_modules/normalize.css/normalize.css'
import './sass/main.scss'

import './js/them.js'
import './js/fetchCountries.js'

// export default 
const DEBOUNCE_DELAY = 300;

const refs = {
   inputField: document.querySelector('#search-box'),
   countryList: document.querySelector('.country-list'),
   countryInfo: document.querySelector('.country-info')
}



