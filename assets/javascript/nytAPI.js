$("#block3").on("click", function(event) {
  console.log("works!!!");
  event.preventDefault();
  /* console.log("works"); */
  $("#response3").empty();
  
  var currentTime = moment();
  var todayFormat = moment(currentTime).format("YYYYMMDD")
  console.log(todayFormat);

  var pastTime = moment().subtract("2", "months");
  var fewMonths = moment(pastTime).format("YYYYMMDD");
  console.log(fewMonths);


  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=sports&facet=true&begin_date=" + fewMonths + "&end_date=" + todayFormat +  "&api-key=e8Sb2nfsg50GLoGeAhKQFkDMQzyjIhkE";
  console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) { 
    console.log(response);

    var randomArticle = response.response.docs[Math.floor(Math.random() * 10)];
    console.log(randomArticle);
  
    var h1 = $("<p>").text(randomArticle.headline.main);
    var headBold = $("<b>").text("Headline: ");
    var abstract = $("<p>").text(randomArticle.lead_paragraph);
    var abstractBold = $("<b>").text("Abstract: ");
    var webURL = $("<a>").text(randomArticle.web_url);
    webURL.attr("href" , randomArticle.web_url);

    $(h1).prepend(headBold);
    $(abstract).prepend(abstractBold);
    $("#response3").append(h1);
    $("#response3").append(abstract);
    $("#response3").append(webURL);
  });
})

