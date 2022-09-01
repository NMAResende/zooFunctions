const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function localizacaoSpecie(loc) {
  const locali = species.filter((local) => local.location === loc)
    .map((specie) => loc.location = specie.name);
  return locali;
}

function animal(ani) {
  const anim = species.find((nome) => nome.name === ani).residents
    .map((nomes) => nomes.name);
  return anim;
}

function sexoDoAnimal(ani, sexos) {
  const s = species.find((nome) => nome.name === ani).residents
    .filter(({ sex }) => sex === sexos).map((element) => element.name);
  return s;
}

function includeNames() {
  const nomes = {
    NE: localizacaoSpecie('NE').map((nome) => ({ [nome]: animal(nome) })),
    // Comentário: primeiro nome - ex: ['lions', 'giraffes']; segundo [nome] - ex: lions:; terceiro nome: parâmetro que será passado.
    NW: localizacaoSpecie('NW').map((nome) => ({ [nome]: animal(nome) })),
    SE: localizacaoSpecie('SE').map((nome) => ({ [nome]: animal(nome) })),
    SW: localizacaoSpecie('SW').map((nome) => ({ [nome]: animal(nome) })),
  };
  return nomes;
}

function tipoAnimais() {
  const nomes = {
    NE: localizacaoSpecie('NE'),
    NW: localizacaoSpecie('NW'),
    SE: localizacaoSpecie('SE'),
    SW: localizacaoSpecie('SW'),
  };
  return nomes;
}

function sorted() {
  const nomesOrdenados = {
    NE: localizacaoSpecie('NE').map((nome) => ({ [nome]: animal(nome).sort() })),
    NW: localizacaoSpecie('NW').map((nome) => ({ [nome]: animal(nome).sort() })),
    SE: localizacaoSpecie('SE').map((nome) => ({ [nome]: animal(nome).sort() })),
    SW: localizacaoSpecie('SW').map((nome) => ({ [nome]: animal(nome).sort() })),
  };
  return nomesOrdenados;
}

function sexAni(sexo) {
  const sexoAnimais = {
    NE: localizacaoSpecie('NE').map((nome) => ({ [nome]: sexoDoAnimal(nome, sexo) })),
    NW: localizacaoSpecie('NW').map((nome) => ({ [nome]: sexoDoAnimal(nome, sexo) })),
    SE: localizacaoSpecie('SE').map((nome) => ({ [nome]: sexoDoAnimal(nome, sexo) })),
    SW: localizacaoSpecie('SW').map((nome) => ({ [nome]: sexoDoAnimal(nome, sexo) })),
  };

  return sexoAnimais;
}

function orderSex(s) {
  const sexoAnimaisOrder = {
    NE: localizacaoSpecie('NE').map((nome) => ({ [nome]: sexoDoAnimal(nome, s).sort() })),
    NW: localizacaoSpecie('NW').map((nome) => ({ [nome]: sexoDoAnimal(nome, s).sort() })),
    SE: localizacaoSpecie('SE').map((nome) => ({ [nome]: sexoDoAnimal(nome, s).sort() })),
    SW: localizacaoSpecie('SW').map((nome) => ({ [nome]: sexoDoAnimal(nome, s).sort() })),
  };
  return sexoAnimaisOrder;
}

function semSorted(options) {
  if (options.sex) {
    return sexAni(options.sex);
  }
  if (options.includeNames === true) {
    return includeNames();
  }
}

function comSorted(options) {
  if (options.includeNames === true && options.sorted === true && options.sex) {
    return orderSex(options.sex);
  }
  if (options.sorted === true) {
    return sorted();
  }
}

function getAnimalMap(options) {
  if (typeof options === 'undefined' || typeof options.includeNames === 'undefined') {
    return tipoAnimais();
  }
  if (!options.sorted) {
    return semSorted(options);
  }
  return comSorted(options);
}

// function getAnimalMap(options) {
//   if (typeof options === 'undefined' || typeof options.includeNames === 'undefined') {
//     return tipoAnimais();
//   }
//   if (options.includeNames === true && options.sorted === true && options.sex) {
//     return orderSex(options.sex);
//   }
//   if (options.includeNames === true && options.sorted === true) {
//     return sorted();
//   }
//   if (options.sex) {
//     return sex(options.sex);
//   }
//   if (options.includeNames === true) {
//     return includeNames();
//   }
// }

module.exports = getAnimalMap;
