import { getSaludo } from "../../src/base-pruebas/02-template-string"


describe('Tests in 02-tempĺate-strings', () => {

  test('getSaludo debe retornar el nombre "Hola Ignacio"', () => {
    const name = 'Ignacio';
    const message = getSaludo(name);

    expect(message).toBe(`Hola ${name}`)
  })

})