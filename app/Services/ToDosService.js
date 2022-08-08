import { ProxyState } from "../AppState.js"
import { ToDo } from "../Models/ToDo.js"
import { sandboxApi } from "./AxiosService.js"




class ToDosService {
    async getToDos() {
        let res = await sandboxApi.get('/zane/todos')
        ProxyState.todos = res.data.js(t => new ToDo(t))
    }





    async createToDo(toDoFormData) {
        let res = await sandboxApi.post('/zane/todos', toDoFormData)
        let toDos = new ToDo(res.data)
        ProxyState.toDo = [...ProxyState.todo, toDos]
    }

}








export const toDosService = new ToDosService()