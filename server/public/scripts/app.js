$(document).ready(function(){
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        console.log(data);
        appendDom(data.omicron);
        buttonAdd();
        newArray(data.omicron);
      }
    });

});

//This adds the first div as the first person is added to the DOM
function appendDom(data) {
	$(".container").append('<div class="student"></div>');
	var $el = $(".container").children().last();
	$el.append('<p>' + data.omicron[0].git_username + '</p>');
  $el.append('<p>' + data.omicron[0].name + '</p>');
  $el.append('<p>' + data.omicron[0].shoutout + '</p>');
}

//adds next and previous buttons
function buttonAdd(){
  $('.buttons').append('<button class ="Previous">Previous</button>');
  $('.buttons').append('<button class ="Next">Next</button>');

}

//This replaces people within the DOM
function replacePeople(data) {
  var i = 1;
	$(".container").find('.student').replaceWith('<div class="student"></div>');
	var $el = $(".container").children().last();
	$el.append('<p>' + data.git_username + '</p>');
  $el.append('<p>' + data.name + '</p>');
  $el.append('<p>' + data.shoutout + '</p>');
  i++;
}

//This should add all the blocks to keep track of the points in the array
function createblock(){
  for(var i = 0; i < data.length; i++){
    $('.container').append("<div></div");
  }
}
function newArray(data){
  for(var i = 0; i < data.length; i++){
    peopleArray.push(data[i]);
    $('.boxes').append("<div class ='box'  style= 'background-color: grey'></div");
    $('.boxes').children().last().data('id', data.omicron[i]);
}
peopleArray = [];

// function createblock(data){
//   for(var i = 0; i < data.omicron.length; i++){
//     $('.container').append("<div class ='box'></div");
//     $('.container').children().last().data('id', data.omicron[i]);
//
//   }
// }
