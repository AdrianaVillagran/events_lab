console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );
  $("form").on("submit", function stopForm(event){
    event.preventDefault();
  });


})
