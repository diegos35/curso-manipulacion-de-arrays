//El método join() une todos los elementos de un array en una cadena y devuelve esta cadena. Podemos pasarle cualquier elemento como separador que deseemos.

const elements = ['fair', 'Air', 'Water'];

const join =elements.join('--')

console.log('join',join);


//el método split() divide un objeto de tipo String en un array de cadenas mediante la separación de la cadena en sub-cadenas
const title = 'curso de manipulacion de arrays';

console.log(title.split(' ')); //expected [ 'curso', 'de', 'manipulacion', 'de', 'arrays' ]

const titleFinal = title.split(' ').join('-'); //elimina los espacions y los concatena con -
console.log(titleFinal);

const word = 'Arepero'

const palindrome = (word) => {
  // Lo que hace dividir, voltear y luego unirlo con el join...
  return word.split('').reverse().join('').toLocaleLowerCase()

};

console.log(palindrome(word));

