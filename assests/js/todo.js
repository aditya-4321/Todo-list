

$("ul").on("click","span",function(event){

	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
})











var input=$("input");



input.keypress(function(event){
	if(event.which == 13){
		var newtodo = $(this).val();
		$(this).val(""); 
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newtodo + "</li>")
	}
	
})

$("#j").click(function(){
	$("input[type='text']").fadeToggle();
})