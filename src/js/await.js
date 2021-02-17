import { searchHeroe, searchHeroeAsync } from "./promesas";

const heroesIds = ['capi', 'iron', 'spider'];

export const getHeroesArr = async () => {

    return await Promise.all(heroesIds.map(searchHeroeAsync));

    /*   const heroesArr = [];
  
      for (const id of heroesIds)
          heroesArr.push(searchHeroe(id));
  
      return await Promise.all(heroesArr); */

    /* for (const id of heroesIds) {
        // searchHeroeAsync(id).then(heroe => heroesArr.push(heroe));
        const heroe = await searchHeroeAsync(id);
        heroesArr.push(heroe)
    } */

    // searchHeroeAsync.forEach(heroe => heroesArr.push(heroe));

    // return heroesArr;
}