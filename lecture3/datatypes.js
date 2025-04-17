// this file is about datatypes as per the interview and all things
// in official document there are two type of datatypes primitative and non primative

//primitive 7 types


/* call by value
copy of the value is given to us
string, number, boolean, null, undefined, symbol, BigInt
*/

//other non-primitive (reference type)
//array , object , functions

const valuefthing = false;
const thisis = 12

console.log(valuefthing);
console.log(thisis)

//javascript is 


// symbols in javascript
//put somekind of ID and then use following syntax

const id = Symbol("123")


const anotherid = Symbol("123")


console.log(id === anotherid)


const heros = ['Shaktiman', 'naagraj' , 'doga']

let myinfo = {
    name : "shubham",
    age:22,
}


function add(a,b)
{
    return a+b
}

console.log(add(10,20))