$.ajax({
    url: 'https://icanhazdadjoke.com/',
    method: 'GET',
    dataType: 'json',
     success: function (response) {
        console.log(response.joke)
        //process the JSON data etc
    },
    error: function () {
        alert("Cannot get data");
    }
})