/* const tasks = [
  {
    task: "Tarea 1",
    descp: "Descripcion de la tarea 1",
    done: false,
  },
  {
    task: "Tarea 2",
    descp: "Descripcion de la tarea 2",
    done: true,
  },
  {
    task: "Tarea 3",
    descp: "Descripcion de la tarea 3",
    done: false,
  },
  {
    task: "Tarea 4",
    descp: "Descripcion de la tarea 4",
    done: true,
  },
];

tasks.forEach(({ task
 }) => console.log(task));
console.log('------------------------')
 tasks.forEach(( item
    ) => console.log('tem',item)
 );
 */
 const app = document.getElementById('app');
console.log('as ');


 const tasks = [
     { title: 'make dinner', done: false },
     { title: 'sweep the floor', done: true },
     { title: 'feed the kittens', done: true },
     { title: 'buy groceries', done: false },
     { title: 'take a bath', done: true },
 ];
 
 tasks.forEach(({ title, done }) => {
     const element = `
          <li>
                <input 
                      type='checkbox' 
                      id='${title}' 
                      name='${title}' 
                      ${done && 'checked'} />
                   <label for='${title}' >${title} </label>   
          </li>`;
 app.insertAdjacentHTML('beforeend', element);});