import { searchHeroe as searchHeroeCallback } from './js/callback.js';
import { searchHeroe } from './js/promesas.js';
import './styles.css';

// const heroeId = 'capi';
// const heroeId = 'capi2';

const heroeId1 = 'capi1';
const heroeId2 = 'iron';



//El segundo parámetro es un callback
/* searchHeroe(heroeId1, (err, heroe1) => {

    // (err)
    //     ? console.error(err)
    //     : console.log(heroe);

    if (err) {
        return console.error(err);
    }

    searchHeroe(heroeId2, (err, heroe2) => {
        if (err) {
            return console.error(err);
        }
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);

    }); // esto es añadir callbacks (callbacks hell)

}); */

//then() => cuando devuelve una respuesta correcta
//cathc() => cuando queremos capturar el error
//finally() => se ejecuta al finalizar el then y el catch, se utiliza la mayoría de las veces para realizar una limpieza

/* searchHeroe(heroeId1).then(heroe => {
    // console.log(`Enviando a ${heroe.nombre} a la misión`);
    searchHeroe(heroeId2).then(heroe2 => {
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
    })
}); */

// se pueden llamar promesas dentro de promesas pero en realidad se hace un promise.all ek bloque comentado arriba se puede hacer así
Promise.all([searchHeroe(heroeId1), searchHeroe(heroeId2)])
    .then(([heroe1, heroe2]) => {
        // console.log('promise.all', heroes);
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
    }).catch(err => {
        alert(err);
    })


console.log('fin de la instrucción');
