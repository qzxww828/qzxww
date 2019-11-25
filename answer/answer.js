$(".issue-sel").click(function() {
  	$(this).parents("div.issue-cnt").children().each(function () {
        $(this).removeClass("selected");
   });
	$(this).addClass("selected");
})
$(".issue-submit").click(function() {
	var issue_len=$(".issue").length;
	var select_len=$(".selected").length;
	if(issue_len!=select_len){
		$(".issue-result").css("display","none");
		$(".issue-error").css("display","block");
	}else{
		$(".issue-error").css("display","none");
		$(".issue-result").css("display","block");
		var score=0;
		$(".selected").each(function () {
			score+=parseInt ($(this).attr("value"));
		});
		$("#issue-score").html(score);
	}
	
})	