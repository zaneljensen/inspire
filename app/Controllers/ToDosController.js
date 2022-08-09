import { ProxyState } from "../AppState.js"
import { getToDoForm } from "../Components/ToDoForm.js"
import { sandboxApi } from "../Services/AxiosService.js"
import { toDosService } from "../Services/ToDosService.js"
import { Pop } from "../Utils/Pop.js"



function _drawToDos() {
    let template = ''
    ProxyState.todos.forEach(t => template += t.Template)
    document.getElementById('tasks').innerHTML = template
    document.getElementById('newtask').innerHTML = getToDoForm()
}


export class ToDosController {
    constructor() {
        ProxyState.on('todos', _drawToDos)
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
            form.reset()
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

    async deleteToDo(id) {
        try {
            debugger
            const yes = await Pop.confirm('Delete ToDo')
            if (!yes) { return }
            await toDosService.deleteToDo(id)
        } catch (error) {
            console.error('[Delete ToDo]', error)
            Pop.error(error)
        }
    }

    async toggleToDo(toDoId) {
        try {
            await toDosService.toggleToDo(toDoId)
        } catch (error) {
            console.error('[Toggle ToDo]', error)
            Pop.error(error)
        }
    }

}