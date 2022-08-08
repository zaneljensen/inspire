import { ProxyState } from "../AppState.js"
import { getToDoForm } from "../Components/ToDoForm.js"
import { toDosService } from "../Services/ToDosService.js"



function _drawToDos() {
    let template = ''
    let toDos = ProxyState.toDos
    toDos.forEach(t => template += t.Template)
    document.getElementById('tasks').innerHTML = template
    document.getElementById('newtask').innerHTML = getToDoForm()
}


export class ToDosController {
    constructor() {
        ProxyState.on('todo', _drawToDos)

    }

    viewToDos() {
        _drawToDos()
        this.getToDos()
    }

    async createToDo() {
        try {
            window.event.preventDefault()
            let form = window.event.target
            let newToDo = {
                description: form.description.value,
            }
            await toDosService.createToDo(newToDo)
            //    form.reset
        } catch (error) {
            console.error('[Create ToDo]', error)

        }
    }

    async getToDos() {
        try {
            await toDosService.getToDos()
        } catch (error) {
            console.error('[Getting ToDos]')
        }
    }
}