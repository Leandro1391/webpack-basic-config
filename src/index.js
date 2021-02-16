import { searchHeroe, searchHeroeAsync } from './js/promesas.js';

searchHeroe('capi2')
    .then(console.log)
    .catch(console.warn);

searchHeroeAsync('iron2')
    .then(console.log)
    .catch(console.error);