const words = ["spray", "limit", "elite", "exuberant"];
const rta = words.filter((item) => item.length >= 6);

console.log("words", words);
console.log("rta", rta);

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

const ordersDelivery = orders.filter(({ delivered }) => !delivered);
console.log("orderDelivery", ordersDelivery);

//-------------------------------------------
//Buscador
const search = (query) => {
  return orders.filter((item) => {
    console.log(item.customerName.includes(query));
    return item.customerName.includes(query);
  });
};
console.log(search("Nico"));
//-------------------------------------------

//TODO: solve
//other example 

/* function denormalize( primary, related, relatedName, referenceId ) {
    const newArray = primary.map(pri => {
      pri[relatedName] = []
        related.filter(ord => ord[referenceId] === pri.id).forEach((ord,i,a) => {
        pri[relatedName].push(ord)
      })
      return pri
    })
    return newArray;
  }
  
  //Data:
  const customers = [
    { id: 1, name: 'Scarlett' },
    { id: 2, name: 'Rocío' },
    { id: 3, name: 'Gal' },
    { id: 5, name: 'Jennifer' },
    { id: 4, name: 'Jessica' },
  ]
  
  const orders = [
    { customerId: 1,   total: 600,   delivered: true },
    { customerId: 1,   total: 120,   delivered: false },
    { customerId: 3,   total: 1840,   delivered: true },
    { customerId: 2,   total: 240,   delivered: true },
    { customerId: 4,   total: 600,   delivered: true },
    { customerId: 5,   total: 120,   delivered: false },
    { customerId: 5,   total: 1840,   delivered: true },
    { customerId: 3,   total: 240,   delivered: true },
  ];
  
  // Calling function:
  const consolidated = denormalize(customers, orders, 'orders', 'customerId')
  // Si hago el log solo al resultado de la función (todo el objeto retornado) me salen los "[Object]"
  console.log(consolidated);
  // Pero si hago el log a cada elemento (customer) si me muestra la información. de las ordenes.  No me había dado cuenta que el "console.log" no muestra mas allá de dos niveles en los objetos. :-p
  consolidated.forEach(cus => {
    console.log(cus);
  })
  // console.log(denormalize(customers, orders, 'orders', 'customerId')[0].orders[0].delivered); */

