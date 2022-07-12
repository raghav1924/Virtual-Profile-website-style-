$(function(){

	let start	=0;
	let end		= $(".num").html();
	let speed 	=100;

	setInterval(function(){
  		if(start<end){
			start++;
		}
		$(".num").html(start);
	}, speed);

});

