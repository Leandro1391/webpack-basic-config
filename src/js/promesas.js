const heroes = {
    capi: {
        nombre: 'Capitan América',
        poder: 'Aguantar'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Conocimiento e inteligencia'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'Sexto sentido arágnido'
    }
}

export const searchHeroe = (id) => {

    const heroe = heroes[id];

    return new Promise((resolve, reject) => {

        (heroe) ? resolve(heroe) : reject(`No existe un héroe con el id ${id}`);
    });

}