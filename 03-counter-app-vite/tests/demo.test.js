
describe('Prueba en <DemoComponent/>', () => {

  test('this test shouldt fail', () => {
    //1- inicializacion
    const message1 = 'hola mundo    ';
    //2- estimulo
    const message2 = message1.trim();
    //3- Observar el comportamiento
    expect(message1).toBe(message2)
  })

})