import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Test en 11-async-await.js', () => {

  test('getImagen debe retornar un URL de imagen', async () => {
    const imagen = await getImagen();
    console.log(imagen);
  });

  test('getImagen debe retornar un error si no tenemos api key', async () => {
    const imagen = await getImagen();
    console.log(imagen);
  });

})