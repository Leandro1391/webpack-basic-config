import { searchHeroeAsync } from "./promesas";

const heroesIds = ['capi', 'iron', 'spider'];

export const getHeroesArr = async () => {

    const heroesArr = [];

    for (const id of heroesIds) {
        // searchHeroeAsync(id).then(heroe => heroesArr.push(heroe));
        const heroe = await searchHeroeAsync(id);
        heroesArr.push(heroe)
    }

    // searchHeroeAsync.forEach(heroe => heroesArr.push(heroe));

    return heroesArr;
}