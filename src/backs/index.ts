//import { Hero as superHero, Hero2 } from "./classes/Hero";
/*import * as HeroClasses from "./classes/Hero";
import powers2, {Power} from "./data/ powers";
const Hero:number = 123;

console.log('Hola Mundo!!!');


//const ironman = new superHero('Ironmna', 100, 43)
const ironman = new HeroClasses.Hero('Ironmna', 2, 43)

console.log(ironman.power)

console.log(powers2);*/

import { genericFuntionArrow } from "../genericos/generics";
import { Villan, Hero } from "../interfaces";


/*import { genericFuntion, genericFuntionArrow, printObject } from "./genericos/generics";


printObject(123);
printObject('Mi nombre');
printObject(true);
printObject(new Date())
printObject({ a: 1, b: 2, c: 5 })
printObject( [1,2,3,4,5])

console.log(genericFuntion(3.1416).toFixed(2));
 console.log(genericFuntion( new Date()).getHours());
console.log(genericFuntion( 'Hola mundo').toUpperCase());

console.log(genericFuntionArrow (3.1416).toFixed(2));
 console.log(genericFuntionArrow( new Date()).getHours());
console.log(genericFuntionArrow( 'Hola mundo').toUpperCase());*/

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericFuntionArrow<Villan>(deadpool).dangerLevel);
