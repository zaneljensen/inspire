import { ProxyState } from "../AppState.js"
import { ToDo } from "../Models/ToDo.js"
import { sandboxApi } from "./AxiosService.js"




class ToDosService {
    async toggleToDo(toDoId) {
        let toDo = ProxyState.todos.find(t => t.id == toDoId)
        if (!toDo) {
            throw new Error('Same Task')
        }
        toDo.completed = !toDo.completed
        let toDoIndex = ProxyState.todos.indexOf(toDo)

        let res = await sandboxApi.put(`/zane/todos/${toDoId}`, toDo)

        let updatedToDo = new ToDo(res.data)

        ProxyState.todos.splice(toDoIndex, 1, updatedToDo)

        ProxyState.todos = ProxyState.todos
    }








    async getToDos() {
        let res = await sandboxApi.get('/zane/todos')
        ProxyState.todos = res.data.map(t => new ToDo(t))
    }

    async createToDo(toDoFormData) {
        let res = await sandboxApi.post('/zane/todos', toDoFormData)
        let todo = new ToDo(res.data)
        ProxyState.todos = [...ProxyState.todos, todo]
    }

    async deleteToDo(id) {
        await sandboxApi.delete(`/zane/todos/${id}`)
        ProxyState.todos = ProxyState.todos.filter(t => t.id != id)
    }

}








export const toDosService = new ToDosService()