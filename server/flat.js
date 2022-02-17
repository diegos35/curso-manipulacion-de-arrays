//Flat y FlatMAP
const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        //const element = matriz[i][j];
        const element = array[j];
        newArray.push(element);
    }
}
console.log('for', newArray); //expected for [1, 2, 3, 4, 5,6, 7, 8, 9]

//Flat
const otherMatriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

const flat = otherMatriz.flat(3);
console.log('flat', flat)

//reto
function profundidad(list) {
    let newList = [];
    if (typeof list != "object") return [list];
    list.forEach(element => {
        newList = newList.concat(profundidad(element));
    });
    return newList;
}

const newArray = profundidad(otherMatriz);

console.log(newArray);

