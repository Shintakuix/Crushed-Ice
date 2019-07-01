$("#block3").on("click", function(event) {
    console.log("works!!!");
    event.preventDefault();
    /* console.log("works"); */
    $("#response3").empty();

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=sports&api-key=e8Sb2nfsg50GLoGeAhKQFkDMQzyjIhkE";
    console.log(queryURL);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) { 
      console.log(response);
    
      var h1 = $("<p>").text("HeadLine: " + response.response.docs[Math.floor(Math.random() * 10)].headline.main);
      var p = $("<p>").text("abstract: " + response.response.docs[Math.floor(Math.random() * 10)].lead_paragraph);
      console.log(h1);
      console.log(p);
      
      $("#response3").append(h1);
      $("#response3").append(p);
    });
})