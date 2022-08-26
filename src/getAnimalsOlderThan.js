const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const nomeAnimais = species.find((animals) => animals.name === animal).residents;
  const idadeAnimais = nomeAnimais.every((idade) => idade.age >= age);
  return idadeAnimais;
}

console.log(getAnimalsOlderThan('lions', 4));

module.exports = getAnimalsOlderThan;
