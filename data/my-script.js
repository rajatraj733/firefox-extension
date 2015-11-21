
// alert(self.options.a);
$("#user_id").focus();
$("#user_id").val(self.options.userid);
$("#password").val(self.options.pwd);
$("#password").focus();
var myVar = setInterval(function(){
	var ques = $("#question").html();
	if(ques==self.options.ques1)
	{
		$("#answer").val(self.options.ans1);
		$(".btn:first").click();
	}
	else if(ques==self.options.ques2)
	{
		$("#answer").val(self.options.ans2);
		$(".btn:first").click();
	}
	else if(ques==self.options.ques3)
	{
		$("#answer").val(self.options.ans3);
		$(".btn:first").click();
	}

}, 2000);