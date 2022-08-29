const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const semanaDias = Object.keys(hours);
const diasSemana = {
  Tuesday: {
    officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
    exhibition: species.filter((dias) => dias.availability.includes('Tuesday'))
      .map((nome) => nome.name),
  },
  Wednesday: {
    officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
    exhibition: species.filter((dias) => dias.availability.includes('Wednesday'))
      .map((nome) => nome.name),
  },
  Thursday: {
    officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
    exhibition: species.filter((dias) => dias.availability.includes('Thursday'))
      .map((nome) => nome.name),
  },
  Friday: {
    officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
    exhibition: species.filter((dias) => dias.availability.includes('Friday'))
      .map((nome) => nome.name),
  },
  Saturday: {
    officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
    exhibition: species.filter((dias) => dias.availability.includes('Saturday'))
      .map((nome) => nome.name),
  },
  Sunday: {
    officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
    exhibition: species.filter((dias) => dias.availability.includes('Sunday'))
      .map((nome) => nome.name),
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};
function getSchedule(scheduleTarget) {
  if (species.some((animal) => animal.name === scheduleTarget)) {
    return species.find((animais) => animais.name === scheduleTarget).availability;
  }
  if (semanaDias.includes(scheduleTarget)) {
    const newObj = {
      [scheduleTarget]: diasSemana[scheduleTarget],
    };
    return newObj;
  }
  return diasSemana;
}

console.log(getSchedule('Monday'));
module.exports = getSchedule;
