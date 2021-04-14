// whem clicked on the h1 will chage color to purple
/*$("h1").click(function(){
  $("h1").css("color", "purple");
});

// when any button is clicked the h1 ill chage color to purple
$("button").click(function(){
  $("h1").css("color","purple")
});

// logs every letter that gets typed into the input field
$("input").keydown(function(event){
  $("h1").text(event.key);
});*/

// when the h1 is clicked the h1 will be hidden
$("button").on("click", function(){
  $("h1").animate({opacity:0.5});
});
