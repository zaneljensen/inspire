import { ProxyState } from "../AppState.js"
import { Background } from "../Models/Background.js";
import { ToDo } from "../Models/ToDo.js";
import { sandboxApi } from "./AxiosService.js"

class BackgroundsService {
    async getBackground() {
        const res = await sandboxApi.get('/images')
        console.log(res.data);
        ProxyState.imgUrl = res.data.largeImgUrl
        // ProxyState.background = new Background(res.data)
        // console.log(ProxyState.background);

    }

    async createToDo(toDoFormData) {
        let res = await sandboxApi.post('/zane/todos', toDoFormData)
        let toDo = new ToDo(res.data)
        ProxyState.toDos = [...ProxyState.toDos, toDo]
    }
}








export const backgroundsService = new BackgroundsService()