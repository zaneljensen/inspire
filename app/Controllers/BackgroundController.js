import { ProxyState } from "../AppState.js"
import { sandboxApi } from "../Services/AxiosService.js";
import { backgroundsService } from "../Services/BackgroundsService.js"


function _draw() {
    console.log('Drawing Image');
    // console.log(ProxyState.background)
    document.body.style.backgroundImage = `url(${ProxyState.imgUrl})`
}

export class BackgroundController {
    constructor() {
        // ProxyState.on('background', _draw)
        ProxyState.on('imgUrl', _draw)
        // ProxyState.on('toDos', saveState)
        backgroundsService.getBackground()


    }
    async getTheQuote() {
        let res = await sandboxApi.get('/quotes')
        document.getElementById('quote').innerHTML = res.data
    }


    async createToDo() {
        try {
            window.event.preventDefault()
            let form = window.event.target
            let newToDo = {
                completed: form.completed.value,
                user: form.user.value,
                description: form.description.value,
            }
            await backgroundsService.createToDo(newToDo)
            form.reset()
        } catch (error) {
            console.log('[Create ToDo]', error);
        }
    }

}

function drawClock() {
    let time = new Date().toLocaleTimeString()

    document.getElementById('time').innerHTML = time;

}


// document.querySelector('#push').onclick = function () {
//     document.querySelector('#tasks').innerHTML += `
//         <div class="form-check">
//         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
//         <label class="form-check-label" for="flexCheckDefault">
//           <span id="taskname">
//           ${document.querySelector('#newtask input').value}
//           </span>
//         </label>
//         <button class="delete">
//         <a onclick="return confirm('Are you sure you want to delete this task?');">Delete</a>
//         </button>
//       </div>
//         `
//     var tasks = document.querySelectorAll(".delete");
//     for (var i = 0; i < tasks.length; i++) {
//         tasks[i].onclick = function () {
//             this.parentNode.remove();
//         }
//     }

// }


setInterval(drawClock, 1000)

