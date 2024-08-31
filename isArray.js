// 1. Create different variables, each containing either an array or a non-array value.
const books =["To kill a Mockinbird","1984","Moby-Dick","JavScript: The Good Parts","The Great Gatsby"];
    console.log(books); 

const city ="New York"; //String
const age =30; //Number
let person = { name:"john", age:25}; // object
let empty = []; // Empty Array
let isTrue =true; //boolean

// 2. Now use isArray to check if each variable is an array.


// 3. Print a message to the console indicating whether each variable is an array or not.
    console. log(Array.isArray(books));
    console. log(Array.isArray(city));
    console.log(Array.isArray(age));
    console.log(Array.isArray(person));
    console.log(Array.isArray(empty));
    console.log(Array.isArray(isTrue));