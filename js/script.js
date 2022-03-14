
const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    // console.log(countries)
    const sliceCountry = countries.slice(0, 36)
    const allCountriesHTML = sliceCountry.map(country => getCountriesHTML(country))
    // console.log(allCountriesHTML)
    const country = document.getElementById('country');
    country.innerHTML = allCountriesHTML.join(' ')
}

const getCountriesHTML = country => {
    return `
        <div class="country-box">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}">
        </div>
    `
}

loadCountries()