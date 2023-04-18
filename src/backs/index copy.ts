import { getPokemon } from "../genericos/get-pokemon";


//console.log(getPokemon());



getPokemon(10)
    .then(pokemon => console.log(pokemon.sprites.back_default))
    .catch(error => console.log(error))
    .finally( ()=> console.log('Finalizo la funcion'))