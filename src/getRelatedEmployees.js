const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const gerente = employees.some((nome) => nome.managers.includes(id));
  return gerente;
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const pessoasLideradas = employees.filter((nome) => nome.managers.includes(managerId))
    .map((nomes) => `${nomes.firstName} ${nomes.lastName}`);
  return pessoasLideradas;
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
