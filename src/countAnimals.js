const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const contandoAnimais = species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
    return contandoAnimais;
  }
  if (animal.specie && animal.sex) {
    const sexoAnimais = species.find((nome) => nome.name === animal.specie).residents
      .filter((nome) => nome.sex === animal.sex).length;
    return sexoAnimais;
  }
  const quantAnimais = species.find((nome) => nome.name === animal.specie).residents.length;
  return quantAnimais;
}

console.log(countAnimals());

module.exports = countAnimals;
