const totals = [1,2,3,4];
const suma = totals.reduce((sum, element) => sum + element,0)
console.log(suma);

//another way
const totals = [1, 2, 3, 4];
const suma = totals.reduce((acumulador, item, indice) => {
  console.log(acumulador, item, indice);
   acumulador + item;
}, 0);

console.log("suma total:", suma);
