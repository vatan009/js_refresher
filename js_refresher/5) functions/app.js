import * as fn from './greet.js'

const one=fn.greet()
console.log(fn.greet());
console.log(fn.hello("vatan"))
console.log(fn.helloAge({name:"vatan"}));
console.log(fn.helloAge({name:"vatan",age:22,a:"5"}));

console.log(fn.twoProps("vatan ","pawar"));
