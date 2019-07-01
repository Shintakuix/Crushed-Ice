$(".block2").on("click", function(event) {
  console.log("facts!!!")
  event.preventDefault();
  $("#response2").empty();
  var queryURL = "https://www.reddit.com/r/todayilearned/search.json?q=glow&limit=25&sort=top&restrict_sr=1";

$.ajax({
    url: queryURL,
    method: "GET",
}).then(function (response) {

      var h1 = $("<p>").text("You hear about this? Have you heard about this: " + response.data.children[Math.floor(Math.random()*25)].data.title);
        console.log(response.data.children[Math.floor(Math.random()*25)].data.title);
        $("#response2").append(h1);

    })
  })