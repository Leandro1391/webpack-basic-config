import { promiseFast, promiseSlow, promiseMedium } from './js/promesas.js'

/* promiseSlow.then(console.log);
promiseMedium.then(console.log);
promiseFast.then(message => console.log(message)); */

/* Promise.race([promiseFast, promiseSlow, promiseMedium])
    .then(message => console.log(message)); */


// En promise race va invocar solamente la promsea más rápda, si alguna de las otra da un error no se va a mostrar

Promise.race([promiseFast, promiseSlow, promiseMedium])
    .then(console.log);