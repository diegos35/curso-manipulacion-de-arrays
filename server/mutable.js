const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];
const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));
const product = products.find(item => item.id === '🍔');
const productIndex = products.findIndex(item => item.id === '🍔');// inmutable
if (productIndex !== -1) {
    myProducts.push(products[productIndex]); //mutable
    products.splice(productIndex,1);  //index, cuantos quiero eliminar// mutable
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

//Reto 1: Eliminar un elemento sin borrarlo del la lista original.

const productsReto = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

//update

const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];
const update = {
    id: "🥞",
    change: {
        price: 200,
        description: 'delicioso'
    }
}
const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
//productsV2[productIndexV2] = update.change
productsV2[productIndexV2]  = {
    ...productsV2[productIndexV2], //NUEVO OBJECTO
    ...update.change //APLICAR CAMBIOS
};
console.log('productsV2',productsV2);

//Reto 2 Modificar una nueva lista sin modificar la original.


const productsV3 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];
const update = {
    id: "🍕",
    change: {
        price: 200,
        description: 'delicioso'
    }
}
const newArray2 = productsV3.map(item => {
    if(item.id === update.id){
        return {
            ...item,
            ...update.change
        }
    }else{
        return {
            ...item
        }
    }
});
console.log('productsV3',productsV3);

console.log('newArray2',newArray2);

//OTHER EXAMPLE RETO 2
const products5 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
  ];
  
  const update = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'delicioso'
    }
  };
  
  const productIndex = products5.findIndex(item => item.id === update.id);
  // Solo agrego esto
  const newProduct = [...products5] 
  
  // Cambio product por newProduct
  newProduct[productIndex] = {   ...products5[productIndex],
    ...update.changes
  };
  
  console.log('---'.repeat(10),'products','---'.repeat(10),products5)
  console.log('---'.repeat(10),'newProducts','---'.repeat(10),newProduct)