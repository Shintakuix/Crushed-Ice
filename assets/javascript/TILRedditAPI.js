function til() {
  var search = $("#search").val().trim();
  var queryURL = "https://www.reddit.com/r/todayilearned/search.json?q=" + search + "&limit=25&sort=top&restrict_sr=1";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    if (response.data.after === null) {
      var h1 = $("<p>").text("Either you didnt put anything in the search box, there aren't results for what ou searched. Try a synonym of what you were searching for or actually type a word :)");
      $("#response2").append(h1);
    }
    var h1 = $("<p>").text("You hear about this? Have you heard about this: " + response.data.children[Math.floor(Math.random() * 25)].data.title);
    console.log(response.data.children[Math.floor(Math.random() * 25)].data.title);
    $("#response2").append(h1);
  })
}


  $("#block2").on("click", function (event) {
    console.log("facts!!!")
    var delayButton =  $(this);
    delayButton.attr('disabled', true);
    setTimeout(function() {
        delayButton.attr('disabled', false);
    }, 1000);
  $("#response3").empty();
    event.preventDefault();
    $("#response2").empty();
    til();
  })