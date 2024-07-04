// #Primitive
//->7 Types : String,Number,Null,undefined,Booleran,symbol,BigInt

const score = 100
const scorevalue= 100.3

const isLoggedin = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol ('123')

console.log(id === anotherId);

const bigNumber = 12345678910n

// Reference (Non premitive)
// Arrays,Objects,functions

const heros = [ "spiderman", "PowerX", "Nobita"];
let myOBJ = {
    name: "Harsh",
    Age: 18 ,
}

const myfunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber)