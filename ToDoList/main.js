import { ToDo } from "./todo.js";

let todos = [
  new ToDo("Zugticket kaufen", false),
  new ToDo("Wäsche waschen", true),
  new ToDo("Hausaufgaben machen", true),
];

function updateToDoListOnScreen() {
  const todoListElement = document.getElementById("todolist");

  // Liste leeren
  todoListElement.innerHTML = "";

  // ToDo's einfügen
  for (const todo of todos) {
    const toDoListEntry = todo.element();
    todoListElement.appendChild(toDoListEntry);
  }

  // offene ToDo's
  const offeneToDos = todos.filter((offen) => !offen.erledigt);
  const elementAnzahl = document.getElementById("anzahl");
  elementAnzahl.textContent = `${offeneToDos.length} ToDo's offen`;
}

document.addEventListener("DOMContentLoaded", (event) => {
  updateToDoListOnScreen();

  const checkboxElement = document.getElementById("");

  const neuesToDoElement = document.getElementById("neuesToDo");
  neuesToDoElement.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
      const todo = new ToDo(neuesToDoElement.value, false);
      todos.push(todo);
      neuesToDoElement.value = "";

      todo.addEventListener("loeschen", (e) => {
        const index = todos.indexOf(e.target);
        todos.splice(index, 1);
        updateToDoListOnScreen();
      });

      todo.addEventListener("changeCheck", (e) => {
        const index = todos.indexOf(e.target);
        todo.erledigt = true;
        updateToDoListOnScreen();
      });

      const aufräumen = document.getElementById("aufraeumen");
      todos.forEach(todo => {
        if (todo.erledigt) {
          todo.addEventListener('loeschen', (e) => {
            const index = todos.indexOf(e.target);
            todos.splice(index, 1);
            updateToDoListOnScreen();
          });
        }
      })
      updateToDoListOnScreen();
    }
  });
});
