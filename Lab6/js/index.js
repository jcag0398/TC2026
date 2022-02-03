$(".agregar").on("click", function(e){
    e.preventDefault()
    let itemList = $("<li>")
 
    let newitemText = $("#newText").val()

    let checkButton = $("<button>")
    checkButton.text("check")
    checkButton.addClass("checar")

    let delButton = $("<button>")
    delButton.text("delete")
    delButton.addClass("del")

    let newItem = $("<p>")
    newItem.text(newitemText)

    $("#newText").val("")

    itemList.append(newItem)
    itemList.append(checkButton)
    itemList.append(delButton)

    $(".Lista").append(itemList)

})

function checkItem(){
    $(this).prev().toggleClass("checked")
}

function deleteItem(){
    $(this).parent().remove();
}


$(".Lista").on("click", ".checar", checkItem)
$(".Lista").on("click", ".del", deleteItem)