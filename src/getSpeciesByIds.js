const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const idAnimais = species.filter((id) => 
  ids.find((especies) => especies === id.id))
  return idAnimais;
}
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'))
module.exports = getSpeciesByIds;
