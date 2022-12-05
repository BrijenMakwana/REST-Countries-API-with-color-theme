let displayCountries = "";
const countriesContainer = document.getElementById("countries-container");

const getCountriesData = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      displayCountries += data.map((item, index) => {
        return `<div class="country-container" key=${index}>
              <img
                src=${item.flags.png}
                alt="flag"
                class="flag-image"
              />
              <h2 class="country-name">${item.name.common}</h2>
              <div class="country-info-container">
                <div class="country-stats-container">
                  <span class="data-heading">Population:</span>
                  <span class="data-info">${item.population}</span>
                </div>
                <div class="country-stats-container">
                  <span class="data-heading">Region:</span>
                  <span class="data-info">${item.region}</span>
                </div>
                <div class="country-stats-container">
                  <span class="data-heading">capital:</span>
                  <span class="data-info">capitol</span>
                </div>
              </div>
            </div>`;
      });
    })
    .then(() => (countriesContainer.innerHTML = displayCountries));
};

getCountriesData();
