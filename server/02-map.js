const letters = ['a', 'b', 'c',]

const newArray = letters.map(item => item + '++') //En una arrow function si no se usan paréntesis se conoce como un return implícito

console.log('original', letters);
console.log('new', newArray);