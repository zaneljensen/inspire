import { ProxyState } from "../AppState.js";
import { ToDo } from "../Models/ToDo.js";



export function saveState() {
    let toDoData = JSON.stringify(ProxyState.toDos)
    localStorage.setItem('toDos', toDoData)
}

export function loadState() {
    let rawToDos = localStorage.getItem('toDos')
    if (rawToDos) {
        let toDoData = JSON.parse(rawToDos)
        ProxyState.toDos = toDoData.map(t => new ToDo(t))
    }
}