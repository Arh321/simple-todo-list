

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
                ali
            </span>
            <button id="delete" class="delete">
                Delete
            </button>
        </div>
        `;
        toDoWork = ''
        let curentTask = document.querySelectorAll(".delete");
        for(let i=0; i < curentTask.length ;i++){
        curentTask[i].onclick = function() {
            
           this.parentNode.remove();
        }}
        let getValue= document.getElementById("text");
        if (getValue.value !="") {
            getValue.value = "";
        }
    }
}

document.getElementById('add')
.addEventListener('click',addTodo)
