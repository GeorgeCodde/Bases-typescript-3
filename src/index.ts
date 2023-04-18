import { Pokemon } from "./decorators/pokemon";


const charmander = new Pokemon('Charmander');

//(Pokemon.prototype as any).customName ='Pikachu'
//console.log(charmander);

//charmander.savePokemonToDB(50)

charmander.publicApi = 'https;// fernando-herrera.com'
console.log(charmander);
