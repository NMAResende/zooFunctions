const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const colaborador = data.employees.find((nome) => nome.id === id).responsibleFor[0];
  const animal = data.species.find((animals) => animals.id === colaborador).residents;
  const dadosAnimal = animal.sort((a, b) => b.age - a.age);
  return Object.values(dadosAnimal[0]);
}
// const dadosAnimal = animal.reduce((acc, curr) => {
//   if (curr.name === 'Esther') {
//     return Object.values(acc);
//   }
//   if (curr.age > acc.age) {
//     return Object.values(curr);
//   }
//   return acc.age;
// });
console.log(getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
console.log(getOldestFromFirstSpecies('c1f50212-35a6-4ecd-8223-f835538526c2'));

module.exports = getOldestFromFirstSpecies;
