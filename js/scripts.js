// Business Logic
var suits = ["hearts", "diamonds","clubs", "spades"];
var faces = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

// User Logic
$(function(){
    suits.forEach(function(x){
      $('main').append("<ul id='"+ x +"'></ul>");
      faces.forEach(function(y){
          $('main ul#'+ x).append("<li><h2>"+y+" of "+x+"</h2></li>");
      });
    });
});
