//Todos cumplen con la condicion
const numbers = [1, 30, 19, 29, 10, 13];


const rta = numbers.every(item => item <= 40);
console.log('rta', rta);

//other example

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18
    },
  ];

const reto = team.every(({age}) => age <= 15);
console.log('reto', reto);

const admision = team => {
    return team.every(player => player.age < 15)
}



console.log(admision(team));

const underage = team
.map(person => person.age)
.every(age => age <= 15)
console.log('underage',underage);