const filters = document.querySelector('.filters');
const results = document.querySelector('#results');
const search = document.querySelector('#search');
const region = document.querySelector('#region');
const color = document.querySelector('#color');
const empty = document.querySelector('#empty-results');
const cards = [...document.querySelectorAll('#birds-grid .card')];

function normalize(value) {
  return value.toLowerCase().replaceAll('’', "'");
}

function showMatches() {
  const terms = normalize(search.value.trim()).split(/\s+/);
  let count = 0;
  for (const card of cards) {
    const matches = terms.every(term => normalize(card.dataset.search).includes(term))
      && (!region.value || card.dataset.regions.split(' ').includes(region.value))
      && (!color.value || card.dataset.colors.split(' ').includes(color.value));
    card.hidden = !matches;
    if (matches) count += 1;
  }
  results.textContent = count === 1 ? '1 bird found' : count + ' birds found';
  empty.hidden = count > 0;
}
filters.hidden = false;
results.hidden = false;
search.addEventListener('input', showMatches);
region.addEventListener('change', showMatches);
color.addEventListener('change', showMatches);
showMatches();
