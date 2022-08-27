const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verificar se a função handlerElephants retorna undefined caso não receba parâmetro', () => {
    const actual = handlerElephants(undefined);
    const expected = undefined;
    expect(actual).toEqual(expected);
  });
  it('Verificar se a função handlerElephants retorna parâmetro inválido caso receba uma string', () => {
    const actual = handlerElephants(4);
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toBe(expected);
  });
  it('Verificar se a função handlerElephants retorna o id', () => {
    const actual = handlerElephants('id');
    const expected = 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5';
    expect(actual).toBe(expected);
  });
  it('Verificar se a função handlerElephants retorna a quantidade de elefantes no zoológico', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toBe(expected);
  });
  it('Verificar se a função handlerElephants retorna a localização dos elefantes', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toMatch(expected);
  });
  it('Verificar se a função handlerElephants retorna todos os elefantes', () => {
    const actual = handlerElephants('residents');
    const expected = [
      { name: 'Ilana', sex: 'female', age: 11 },
      { name: 'Orval', sex: 'male', age: 15 },
      { name: 'Bea', sex: 'female', age: 12 },
      { name: 'Jefferson', sex: 'male', age: 4 },
    ];
    expect(actual).toEqual(expected);
  });
  it('Verificar se a função handlerElephants retorna o nome dos elefantes', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toEqual(expected);
  });
  it('Verificar se a função handlerElephants retorna a media de idade dos elefantes', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toBeCloseTo(expected);
  });
  it('Verificar se a função handlerElephants retorna null caso ocorra um default', () => {
    const actual = handlerElephants('default');
    const expected = null;
    expect(actual).toBe(expected);
  });
});
