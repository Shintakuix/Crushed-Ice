$("#block3").on("click", function(event) {
  console.log("works!!!");
  event.preventDefault();
  /* console.log("works"); */
  $("#response3").empty();
  /* &begin_date=20120101&end_date=20121231 */

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
  
    var h1 = $("<p>").text("HeadLine: " + randomArticle.headline.main);
    var abstract = $("<p>").text("Abstract: " + randomArticle.lead_paragraph);
    var webURL = $("<p>").text("Full Article: " + randomArticle.web_url);
   /*  console.log(h1);
    console.log(p); */
    
    $("#response3").append(h1);
    $("#response3").append(abstract);
    $("#response3").append(webURL);


  });
})

