const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const colaborador = employees.find((nome) =>
    nome.firstName === employeeName || nome.lastName === employeeName);
  return colaborador;
}

console.log(getEmployeeByName('Nigel'));

module.exports = getEmployeeByName;
