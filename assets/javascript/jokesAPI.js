      var search = 
      var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=WLBFiQ7GnS37bP29n3qxnRk7MOIciO94&q=" + search + "&limit=10&offset=0&rating=G&lang=en";
  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function (response) {
          
      })