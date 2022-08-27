const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verificar se a função getOpeningHours retorna uma mensagem de erro The abbreviation must be AM or PM', () => {
    expect(() => getOpeningHours('Wednesday', '09:00-BM')).toThrow(`The abbreviation must be 'AM' or 'PM'`);
  });
  it('Verificar se a função getOpeningHours retorna uma mensagem de erro The hour must be between 0 and 12', () => {
    expect(() => getOpeningHours('Wednesday', '40:00-PM')).toThrow('The hour must be between 0 and 12');
  });
  it('Verificar se a função getOpeningHours retorna uma mensagem de erro caso The minutes must be between 0 and 59', () => {
    expect(() => getOpeningHours('Wednesday', '09:68-AM')).toThrow('The minutes must be between 0 and 59');
  });
  it('Verificar se a função getOpeningHours retorna uma mensagem de erro caso The hour should represent a number', () => {
    expect(() => getOpeningHours('Wednesday', 'o9:00-AM')).toThrow('The hour should represent a number');
  });
  it('Verificar se a função getOpeningHours retorna uma mensagem de erro caso The minutes should represent a number', () => {
    expect(() => getOpeningHours('Wednesday', '09:o0-AM')).toThrow('The minutes should represent a number');
  });
  it('Verificar se a função getOpeningHours retorna uma mensagem de erro caso The day must be valid. Example: Monday', () => {
    expect(() => getOpeningHours('Wed', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  it('Verificar se a função getOpeningHours retorna a mensagem se o zoológico esta fechado', () => {
    expect(getOpeningHours('Wednesday', '11:00-PM')).toMatch('The zoo is closed');
  });
  it('Verificar se a função getOpeningHours retorna a mensagem se o zoológico esta aberto', () => {
    expect(getOpeningHours('Saturday', '09:00-AM')).toMatch('The zoo is open');
  });
  it('Verificar se a função getOpeningHours retorna a mensagem se o zoológico esta fechado', () => {
    expect(getOpeningHours('Monday', '09:00-PM')).toMatch('The zoo is closed');
  });
  it('Verificar se a função getOpeningHours retorna a agenda caso não receba nenhum parâmetro', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 }
    };
    expect(actual).toEqual(expected);
  });
});
