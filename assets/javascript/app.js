$(".item-1").hover(function(){
    $("#response1").show();
    $("#response2").hide();
    $("#response3").hide();
})

$(".item-2").hover(function(){
    $("#response2").show();
    $("#response1").hide();
    $("#response3").hide();
})

$(".item-3").hover(function(){
    $("#response3").show();
    $("#response1").hide();
    $("#response2").hide();
})