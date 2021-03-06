import { saludo, getId, despedida } from '../utils/strings';

describe('Pruebas con strings', () => {
  test('Probando funcion de saludo', () => {
    const saludar = saludo('Juan');
    expect(saludar).toMatch('Hola, me llamo Juan');
  });
  test('Probando funcion de despedida', () => {
    const despedirse = despedida();
    expect(despedirse).not.toMatch('Adios');
  });
  test('Probando funcion getId', () => {
    const id = getId();
    expect(id).toMatch(/\d{2}-\d{3}/);
  });
});
