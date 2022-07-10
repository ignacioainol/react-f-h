import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";


describe('Test en 08 importar exportar', () => {

  test('getHeroeById debe de retornar un heroe por ID', () => {

    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
  });

  test('getHeroeById debe de retornar undefined si no existe el ID', () => {

    const id = 20;
    const hero = getHeroeById(id);

    // expect(hero).toBe(undefined)
    expect(hero).toBeFalsy()
  });

  //getHeroesByOwner
  test('Debe returnar los heroes de DC', () => {

    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);

    expect(heroes).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }
    ]);

    expect(heroes.length).toBe(3)
  });

  test('Debe returnar los heroes de Marvel', () => {

    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);

    expect(heroes).toEqual([
      { id: 2, name: 'Spiderman', owner: 'Marvel' },
      { id: 5, name: 'Wolverine', owner: 'Marvel' }
    ]);

    expect(heroes.length).toBe(2)
  });
})