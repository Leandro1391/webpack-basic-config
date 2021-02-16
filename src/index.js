import { promiseFast, promiseSlow, promiseMedium } from './js/promesas.js'

/* promiseSlow.then(console.log);
promiseMedium.then(console.log);
promiseFast.then(message => console.log(message)); */

/* Promise.race([promiseFast, promiseSlow, promiseMedium])
    .then(message => console.log(message)); */

Promise.race([promiseFast, promiseSlow, promiseMedium])
    .then(console.log);