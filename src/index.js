import { searchHeroe } from './js/callback.js';
import './styles.css';

// const heroeId = 'capi';
// const heroeId = 'capi2';

const heroeId1 = 'capi';
const heroeId2 = 'iron';



//El segundo parámetro es un callback
searchHeroe(heroeId1, (err, heroe1) => {

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

});

console.log('fin de la instrucción');
