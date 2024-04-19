const apiUrl = 'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries';
const countriesContainer = document.getElementById('countries-container');

async function fetchCountries(sortParam = '') {
    try {
      const response = await fetch(`${apiUrl}${sortParam}`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const countries = await response.json();
      await createCountryCards(countries); // Call createCountryCards after data is fetched
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  }

function createCountryCards(countries) {
  countriesContainer.innerHTML = ''; // Clear existing cards before creating new ones
  countries.forEach(country => {
    const card = document.createElement('div');
    card.classList.add('country-card');

    const name = document.createElement('h3');
    name.textContent = country.name;
    card.appendChild(name);

    const population = document.createElement('p');
    population.textContent = `Population: ${country.population}`;
    card.appendChild(population);

    if (country.flag) { // Display flag if available
      const flagImage = document.createElement('img');
      flagImage.src = country.flag;
      flagImage.alt = `${country.name} Flag`;
      card.appendChild(flagImage);
    }

    // Add other relevant country details as needed

    countriesContainer.appendChild(card);
  });
}

const sortButton = document.getElementById('sort-btn');
sortButton.addEventListener('click', () => {
  fetchCountries('?sort=population&order=desc'); // Sort by population (descending)
});

fetchCountries(); // Fetch initial data without sorting
