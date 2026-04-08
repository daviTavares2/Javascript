//var generateName = require('sillyname');

import generateName from "sillyname";

var sillyName = generateName();

console.log(`my name is ${sillyName}`)


import superheroes, {randomSuperhero} from 'superheroes';

const name =  randomSuperhero();
//=> 'Spider-Ham'

console.log(`I am ${name}`);