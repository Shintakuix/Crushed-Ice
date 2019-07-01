$.ajax({
    url: "https://www.reddit.com/r/todayilearned/search.json?q=glow&limit=25&sort=top&restrict_sr=1",
    method: "GET",
    success: function (response) {
      console.log(response.data.children[Math.floor(Math.random()*25)].data.title);
    },
    error: function(){
      alert("Cannot get data");
    }
});