/* let res;
let a = 3;
let b = 5;


res = a + b;
res = a - b; 
res = a * b;
res = a / b;

console.log(res); */

const random = (min, max) => {
    return Math.random() * (max - min) + min;
}

let myRandom = random(5, 21.5);
console.log(myRandom); 

const ucFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.substring(1);
}

console.log(ucFirst('test'));


const myNumber = Infinity; // Change this value
const myNewNumber = myNumber + 5;

if(myNewNumber == myNumber){
    console.log("It works");
}else{
    console.log("It doesnt work");
}
