import { getDataCallback } from '.././utils/async';

// Agregando el parámetro done ya indicamos que es asíncrono
describe('Haciendo test a operaciones asinctronas', () => {
  test('Haciendo test a callback', (done) => {
    getDataCallback((name) => {
      expect(name).toBe('Jose Garcia Mañez');
      // importante que no se olvide llamar al método done() aqui
      done();
    });
  });
});
