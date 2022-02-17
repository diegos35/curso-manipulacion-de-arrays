const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
  { userId: 2, username: "Mike", attributes: ["Lovely"] },
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];

const rta = users.map(({ attributes }) => attributes); //Expected rta [ [ 'Nice', 'Cute' ], [ 'Lovely' ], [ 'Nice', 'Cool' ] ]
console.log("rta", rta);

const flatMap1 = users.flatMap(({ attributes }) => attributes); //Expected rta [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]
console.log("map-flat1", flatMap1);

const flatMap = users.map(({ attributes }) => attributes).flat(); //Expected rta [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]
console.log("map-flat", flatMap);

//Reto

const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};

const rta3 = Object.keys(calendars); //devuelve las key
//.map((key) => ({id: key, name: calendars[key].startDate})) //atributos que tiene el objecto
console.log("rta3", rta3);

const rta4 = Object.values(calendars).flat(); //Returns an array of values of the enumerable properties of an object

console.log("rta4", rta4);

//----------------

//  TODO: flatMap() realiza un map y luego el flat
const rta5 = Object.values(calendars).flatMap((item) => {
  console.log("item", item);
  return item.map((date) => date.startDate);
});
console.log("rta5", rta5);

//----------------

const rta6 = Object.entries(calendars).flat(2);
console.log("rta6", rta6);
const flatArrayFiltered = flatArray.filter((item) => {
  if (typeof item === "object") return item;
});
const rta7 = flatArrayFiltered.map((item) => item.startDate);
console.log("rta7", rta7);
