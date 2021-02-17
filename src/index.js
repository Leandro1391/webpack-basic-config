import { getHeroesArr } from './js/await.js';

console.time('await');


getHeroesArr().then(heroes => {
    console.table(heroes);

    console.timeEnd('await');
});
