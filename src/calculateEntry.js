const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];
function countEntrants(entrants) {
  const newObj = {
    child: entrants.filter((criancas) => criancas.age < 18).length,
    adult: entrants.filter((adultos) => adultos.age >= 18 && adultos.age < 50).length,
    senior: entrants.filter((idoso) => idoso.age >= 50).length,
  };
  return newObj;
}

function calculateEntry(entrants) {
  if (!entrants || JSON.stringify(entrants) === '{}') { // Referência: https://levelup.gitconnected.com/different-ways-to-check-if-an-object-is-empty-in-javascript-e1252d1c0b34
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  const crianca = prices.child * child;
  const adulto = prices.adult * adult;
  const idoso = prices.senior * senior;
  return crianca + adulto + idoso;
}

console.log(calculateEntry());
module.exports = { calculateEntry, countEntrants };
