const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const colaborador = (ids) => {
  const colab = employees
    .find((nome) => nome.id === ids.id || nome.firstName === ids.name
      || nome.lastName === ids.name);
  const newObj = {
    id: colab.id,
    fullName: `${colab.firstName} ${colab.lastName}`,
    species: colab.responsibleFor
      .map((idAnimal) => species
        .find((especie) => especie.id === idAnimal).name),
    locations: colab.responsibleFor
      .map((id) => species
        .find((especie) => especie.id === id).location),
  };
  return newObj;
};

function getEmployeesCoverage(idOrName) {
  if (!idOrName) {
    return employees.map((funcionario) => colaborador(funcionario));
  }
  if (employees
    .find((nome) => nome.id === idOrName.id || nome.firstName === idOrName.name
      || nome.lastName === idOrName.name)) {
    return colaborador(idOrName);
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
