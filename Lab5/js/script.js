let post = $("#postButton")
let clear = $("#clearButton")
let mark = $("#markButton")
let del = $("#delButton")

function TodoPost(e){
    e.preventDefault()
    let todo = $("#todoText")
    let list = $("#todoList")
    
    let div = $("<div>")
    let input = $("<input>")
    let label = $("<label>")
    input.attr("type","checkbox")
    input.attr("name", "todo")
    label.text(todo.val())

    div.append(input)
    div.append(label)
    list.append(div)

    todo.val("")
}

function TodoMark(){
    let todos = $("[name=todo]")
    todos.each(function markTodo(index, todo){
        $(todo).prop("checked", true)
    })
}

function TodoClear(){
    let todos = $("[name=todo]")
    todos.each(function markTodo(index, todo){
        $(todo).prop("checked", false)
    })
}

function TodoDel(){
    let todos = $("[name=todo]")
    todos.each(function markTodo(index, todo){
        if($(todo).prop("checked")){
            $(todo).parent().remove()
        }
    })
}

post.on("click", TodoPost);
clear.on("click", TodoClear);
mark.on("click", TodoMark);
del.on("click", TodoDel);
