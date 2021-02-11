const heroes = {
    capi: {
        nombre: 'Capitan América',
        poder: 'Aguantar'
    },
    Iron: {
        nombre: 'Ironman',
        poder: 'Conocimiento e inteligencia'
    },
    Spider: {
        nombre: 'Spiderman',
        poder: 'Sexto sentido arágnido'
    }
}

// callback returna algo... esto se comenta para dejar documentado que devuelve el callback
// En esta parte se arma los manejadores de error o excepciones
// En el primer  argumento del callback es el error si es satisfactorio se envía el null primero y en el segundo parámetro el dato que quiero mostrar
export const searchHeroe = (id, callback) => {

    const heroe = heroes[id];

    if (heroe) {
        callback(null, heroe);
    } else {
        //Error
        callback(`No existe un héroe con el id ${id}`);
    }

    // callback(heroe);
}