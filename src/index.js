import { getHeroesArr, obtenerHeroeAwait } from './js/await.js';

console.time('await');


/* getHeroesArr().then(heroes => {
    console.table(heroes);

    console.timeEnd('await');
}); */


obtenerHeroeAwait('capì2')
    .then(heroe => {
        console.log(heroe);

        console.timeEnd('await');
    }).catch(console.warn);
