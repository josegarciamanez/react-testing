import { setTimeout } from 'timers';

export const getDataCallback = (callback) => {
  // Solicitud http a un API
  const name = 'Jose Garcia Mañez';

  setTimeout(() => {
    callback(name);
  }, 2000);
};
