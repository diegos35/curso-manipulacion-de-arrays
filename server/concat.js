// Es inmutable (no modifica el array original).
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2); //expected [ 'a', 'b', 'c', 'd', 'e', 'f' ]

console.log('arra3',array3);


//Concat con spread operator :
const elements = [1, 2, 3, 4];
const otherElements = [5, 6, 7, 8];
const concat = elements.concat(otherElements);

console.log(concat);
const spreadOperatorMetod = [...elements, ...otherElements];
console.log('Concat con spread operator: ', spreadOperatorMetod );



//Fusionar arrays método push:

elements.push(...otherElements); // con spread operator
console.log('Push con spread operator:', elements);

elements.push(otherElements); // sin spread operator 
console.log('Push sin spread operator:', elements);



//Slice El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio
//hasta fin (fin no incluido). El array original no se modificará.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2)); //elimina el bison

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]
