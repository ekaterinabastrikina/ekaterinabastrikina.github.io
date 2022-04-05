$(document).ready(function(){

const text = $(".description");
text.hide();

$(".btn1").click(function(){
	text.show(200);
	$(".btn1").hide()
	$(".btn2").show()
});

$(".btn2").click(function(){
	text.hide(200);
	$(".btn2").hide()
	$(".btn1").show()
});



});

