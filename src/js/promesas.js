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

const promiseSlow = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise slow'), 2000);
});

const promiseMedium = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise medium'), 1500);
});

const promiseFast = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise fast'), 1000);
});

export {
    promiseFast,
    promiseMedium,
    promiseSlow
}

