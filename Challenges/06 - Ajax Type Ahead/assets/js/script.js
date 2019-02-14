const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
  .then(response => {
    if (!response.ok) {
      console.error(`HTTP error, status ${response.status}`);
    }
    return response.json();
  })
  .then(response => {
    cities.push(...response);
  });

function findMatches(word, cities) {
  return cities.filter(city => {
    return new RegExp(word, 'gi').test(`${city.city}.${city.state}`);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  if (!this.value) {
    const html = '<li>Filter fo a city</li><li>or a state</li>';
    suggestions.innerHTML = html;
    return undefined;
  }
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map(city => {
      const r = new RegExp(this.value, 'gi');
      const cityName = city.city.replace(
        r,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = city.state.replace(
        r,
        `<span class="hl">${this.value}</span>`
      );
      return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(city.population)}</span>
      </li>
     `;
    })
    .join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('#search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
