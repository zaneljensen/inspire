import { ToDo } from "../Models/ToDo.js";



export function getToDoForm(toDo = new ToDo({})) {

    return `
    <form onsubmit="app.toDosController.createToDo()">
    <input type="text" placeholder="Add Tasks" value="" id="description">
          <button id="submit">Add</button>
    </form>
    
    
    `
}