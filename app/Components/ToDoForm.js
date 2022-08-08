import { ToDo } from "../Models/ToDo.js";



export function getToDoForm(toDo = new ToDo({})) {

    return `
    <form onsubmit="app.todosController.createTodo()">
    <input type="text" placeholder="Add Tasks" value="${toDo.description}">
          <button id="submit">Add</button>
    </form>
    
    
    `
}