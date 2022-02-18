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
const newOrder = orders.map(({total}) => total);
  

const rta = orders.map(item => {
    // retornamos un nuevo objeto 
    //pero evitamos hacer ref. en memoria
    return {
        ...item, //spread operator CREA UN NUEVO OBJECTO
        tax: .19,//agregando propiedad al nuevo objecto
    }
})
console.log('orginal', orders);
console.log('new', newOrder);
console.log('nuevo objecto de order',rta);