import { saludo, getId } from '../utils/strings';

describe('Pruebas con strings', () => {
  test('Probando funcion de saludo', () => {
    const saludar = saludo('Juan');
    expect(saludar).toMatch('Hola, me llamo Juan');
  });
  test('Probando funcion getId', () => {
    const id = getId();
    expect(id).toMatch(/\d{2}-\d{3}/);
  });
});
