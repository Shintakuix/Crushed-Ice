$("#block1").on("click", function(event) {
    console.log("jokes!!!")
    event.preventDefault();
    $("#response1").empty();
    var queryURL = 'https://icanhazdadjoke.com/';

$.ajax({
    url: queryURL,
    method: 'GET',
    dataType: 'json',
}).then(function(response) {
        console.log(response);
        
        var h1 = $("<p>").text("Alright check it out: " + response.joke);
        console.log(response.joke);
        $("#response1").append(h1);

    })
})