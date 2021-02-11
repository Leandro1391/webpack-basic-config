import { searchHeroe } from './js/callback.js';
import './styles.css';

// const heroeId = 'capi';
const heroeId = 'capi2';

//El segundo parámetro es un callback
searchHeroe(heroeId, (err, heroe) => {

    (err)
        ? console.error(err)
        : console.log(heroe);

});

console.log('fin de la instrucción');
