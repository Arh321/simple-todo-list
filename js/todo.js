

let toDoWork = [];
const getTodo = (e) => {
    toDoWork = e.target.value;
    console.log(toDoWork);
    if(toDoWork.length == 0){
        document.getElementById('errore').style.display = 'block'
    }else{
        document.getElementById('errore').style.display = 'none'
    }
}

document.getElementById('text')
.addEventListener('input',getTodo)

const addTodo = () =>{
    if(toDoWork.length == 0){
        document.getElementById('errore').style.display = 'block'
    }else{
        document.getElementById('errore').style.display = 'none'
        document.getElementById('list-todo').innerHTML +=`
        <div class ="task">
            <span id="taskname" class ="task--text">
                ${toDoWork}
            </span>
            <button id="delete" class="delete">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 1024 1024"><path fill="white" d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"/></svg>
            </button>
        </div>
        `;
        toDoWork = ''
        let curentTask = document.querySelectorAll(".delete");
        for(let i=0; i < curentTask.length ;i++){
        curentTask[i].onclick = function() {
           this.parentNode.remove();
            }
        }
        let getValue= document.getElementById("text");
        if (getValue.value !="") {
            getValue.value = "";
        }
    }
}

document.getElementById('add')
.addEventListener('click',addTodo)
