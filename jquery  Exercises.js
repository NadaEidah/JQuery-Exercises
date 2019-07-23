/*
Q1:
Check if jQuery is loaded
*/


/*
Q2:
If You would have very long website - How to help user with fast getting back on top :)
*/
$(document).reday(function(){

		$('#q1').prepend('<a href="#" id="q2">Back to Top</a>') 

})
/*
Q3:
If You would like to change sizes of Your div/button with on click :)
*/

$(document).reday(function(){
$( "#btn1" ).one( "click", function() {
  $( "#box" ).height( 30 ).width(30)

});
$( "#btn2" ).one( "click", function() {
  $( "#box" ).height( 150 ).width(150)

});

/*
Q4:
Learn how to fadein your boxes
*/
  $("#button4").click(function(){
    $("#div1").fadeIn(1000);
    $("#div2").fadeIn(2000);
    $("#div3").fadeIn(3000);
  });

/*
Q5:
User must first accept then he or she can signup
*/
	$('#accept').click(function(){
		if ($('#accept').prop("checked"))
		{
			$('#submitbtn').attr("disabled", false);
		}
		else{
			$('#submitbtn').attr("disabled", true);
		}
		});
	

/*
Q6:
Let them print
*/
$('.printPage').click(function(){
	window.print();
	
})

/*
Q7:
Can username be too long? Yest it can - lets limit that
*/
$('#textarea').attr("maxLength","20")

/*
Q8:
Wanna make some words bolder, do it with jQuery
*/
$('bolder').css({bolder})

/*
Q9:
Add new div to your website
*/
$('#newDiv').click(function(){
$('#add').append('<div>this my new div there</div>')


});

/*
Q10:
Select values from a JSON object using jQuery
*/


/*
Q11:
Add element within ul list
*/

$('#btnclick').click(function(){
	$('#header').append('<li><a href="#">is good</a></li>')
});
/*
Q12:
Know what user puts into textbox
*/
$('#usertext').change(function(){
	var x=$('#usertext').val()
	$('#usertext').after(x);
});


/*
Q13:
Change input value
*/
$('#button13').attr("value","nada")


// if you finish try a new thing by your self
// or go and repeat the DOM exercises using jQuery 
