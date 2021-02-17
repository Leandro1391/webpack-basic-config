import { searchHeroe, searchHeroeAsync } from "./promesas";

const heroesIds = ['capi', 'iron', 'spider'];
const heroesPromises = heroesIds.map(searchHeroe)
// const heroesPromises = heroesIds.map(id => searchHeroe)

export const getHeroesArr = async () => await Promise.all(heroesIds.map(searchHeroeAsync));

export const obtenerHeroeAwait = async(id) => {

    try {
        return await searchHeroeAsync(id);
    } catch (error) {
        console.log(`Error en el await (CATCH) es: ${error}`);
        // throw error;
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        };
    }

}

export const heroesCiclo = async() => {

    console.time('HeroesCiclo');

    //No se recomienda realizar un forEach porque se separa del hilo principal MEJOR for await() pero es válido dependiendo que necesite
    // heroesPromises.forEach(async(p) => console.log(await p));

    //siempre que devuelve una promesa se puede colocar await
    for await (const hero of heroesPromises)
        console.log(hero);
        
    
    // console.log(heroes);
    
    console.timeEnd('HeroesCiclo');

    // const heroes = await Promise.all( heroesPromises);
    // heroes.forEach( heroe => console.log(heroe));
    
}

export const heroeIfAwait = async(id) => {

    ((await searchHeroeAsync(id)).nombre === 'Ironman') 
        ? console.log('Is the best of all')
        : console.log(`I don't think so`);
    
}

/* export const getHeroesArr = async () => {
    return await Promise.all(heroesIds.map(searchHeroeAsync));
} */


// export const getHeroesArr = async () => {

//     return await Promise.all(heroesIds.map(searchHeroeAsync));

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
// }