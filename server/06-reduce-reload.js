//solo devuelve un único valor.
list = [];

for (let index = 0; index < 30; index++) {
    list.push(Math.floor(Math.random() * 11));
}

numbers = [1,3,2,3];

const rta = numbers.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj
}, {}); //devuelve un objecto inicializamos el  obj

console.log(list);
console.log(rta);

const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

  const resp = data.map(item => item.level)//almacena todos los levels
  .reduce((obj, item) => {  //recorremos cada uno de los eleme de los level
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj
  }, {})

  console.log(resp)