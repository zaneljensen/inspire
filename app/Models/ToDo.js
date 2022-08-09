export class ToDo {
    constructor({ id, completed, user, description }) {
        this.id = id
        this.completed = completed
        this.user = user
        this.description = description
    }

    get Template() {
        return `
        <div class="form-check">
        <input class="form-check-input" type="checkbox" ${this.completed ? 'checked' : ''} onchange="app.toDosController.toggleToDo('${this.id}')" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
        <div id="tasks">${this.description} <button onclick="app.toDosController.deleteToDo('${this.id}')">delete</button> 
        </div>
        </div>
        
        `
    }
}