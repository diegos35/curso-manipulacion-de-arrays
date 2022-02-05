const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
console.log('orginal', orders);
const resp = orders.map(({total}) => total);
  
console.log('new', resp);

const rta = orders.map(item => {
    // retornamos un nuevo objeto 
    //pero evitamos hacer ref. en memoria
    return {
        ...item, //spread operator
        tax: .19,//agregando propiedad al nuevo objecto
    }
})
console.log('rta',rta);