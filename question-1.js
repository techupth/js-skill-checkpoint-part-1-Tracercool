// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้
myTodo.push({id: 5, todo: "Walk the dog"});

const newMyTodo = myTodo.map((item) =>{
  if (item.id === 4) {
    return {...item, todo: "Go to the gym"};
  }
  return item;
});

newMyTodo.pop();
const lastTodo = newMyTodo[newMyTodo.length -1];
//console.log(NewMyTodo);
console.log(`To-do id: ${lastTodo.id}, ${lastTodo.todo}`);