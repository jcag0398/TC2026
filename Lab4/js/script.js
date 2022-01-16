let post = document.getElementById("postButton")
let clear = document.getElementById("clearButton")
let mark = document.getElementById("markButton")
let del = document.getElementById("delButton")


post.addEventListener("click",TodoPost)
clear.addEventListener("click",TodoClear)
mark.addEventListener("click",TodoMark)
del.addEventListener("click",TodoDel)

function TodoPost(e){
    e.preventDefault()
    let todo = document.getElementById("todoText").value
    let list = document.getElementById("todoList")
    
    let div = document.createElement("div")
    let input = document.createElement("input");
    let label = document.createElement("label")

    input.type = "checkbox"
    input.name = "todo"

    label.textContent = todo

    div.appendChild(input)
    div.appendChild(label)

    list.appendChild(div)

}

function TodoMark(){
    let todos = document.getElementsByName("todo")
    for(let i=0; i<todos.length; i++){
        todos[i].checked=true;
    }
}

function TodoClear(){
    let todos = document.getElementsByName("todo")
    for(let i=0; i<todos.length; i++){
        todos[i].checked=false;
    }
}

function TodoDel(){
    let todos = document.getElementsByName("todo")
    for(let i=0; i<todos.length; i++){
        
        if(todos[i].checked){
            todos[i].parentElement.remove()
        }

    }
}
