$(document).ready(function() {

// Start your code from here

let animales = ["dog", "cat", "rabbit", "hamster", "frog"]

for(let i=0; i<animales.length; i++){
    let a = $("<button>")
    a.addClass("animal-button")
    a.attr("data-type",animales[i])
    a.text(animales[i])
    $("#animal-buttons").append(a)
}

$("body").on("click", ".animal-button", function(){
    $("#animals").empty()

    let search = $(this).attr("data-type")
    let queryURL= "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=5oAWxqnaOsOU8mRw6df6xKWFujPTlR0B&limit=10"

    $.ajax({
        url: queryURL
    })
    .then(function(response){
        let results = response.data

        for(let i=0; i<results.length; i++){

            let animalDiv = $("<div class=\"animal-item\">")

            let rating = results[i].rating

            let p = $("<p>").text("Rating: " + rating)

            let animalImage = $("<img>")

            animalImage.attr("scr",results[i].images.fixed_height.url)
            animalImage.attr("data-still", results[i].images.fixed_height.url)
            //animalImage.attr("data-animate",)
            //animalImage.attr("data-state",)

            animalDiv.append(p)
            animalDiv.append(animalImage)

            $("#animals").append(animalDiv)
        }
    })

})






});
