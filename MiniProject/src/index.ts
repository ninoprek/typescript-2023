// // const btn = document.getElementById("btn");
// const btn = document.getElementById("btn")!;
// console.log(btn);

// btn.addEventListener("click", () => {
//   alert("CLICKED!")
// })


// "hello".replaceAll("l", "!");

// let mystery: unknown = "Hello world!";

// const numChars = (mystery as string).length;
// console.log("NUM CHARS: ", numChars);

interface Todo {
  text: string;
  completed: boolean;
}

const btn = document.getElementById("btn");
const input = document.getElementById("todoinput") as HTMLInputElement;
// const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");

let todos: Todo[] = readTodos();
if (todos.length > 0) {
  // todos.forEach(createToDo);
  todos = todos.filter(todo => {
    if (!todo.completed) createToDo(todo);
    return !todo.completed
  });
  saveTodo();
}

function saveTodo () {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// btn?.addEventListener("click", () => {
//   alert((<HTMLInputElement>input).value);
// });

// form?.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("SUBMITED")
// });

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();

  const newTodo: Todo = { text: input.value, completed: false };
  todos.push(newTodo);
  createToDo(newTodo);
  saveTodo();
  input.value = "";
}


function readTodos(): Todo[] {
  const localTodos = localStorage.getItem("todos");
  if(!localTodos) return []
  return JSON.parse(localTodos);
}

function createToDo (todo: Todo):any {
  const newEl = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newEl.innerHTML = todo.text;
  checkbox.checked = todo.completed;
  checkbox.addEventListener("change", () => {
    console.log("todo: ", todo);
    todo.completed = checkbox.checked;
    saveTodo();
  });
  newEl.append(checkbox);
  list?.appendChild(newEl);
}

form?.addEventListener("submit", handleSubmit);