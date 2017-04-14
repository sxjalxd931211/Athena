// $(document).ready(function(){
// 	$("#tagContent0_m").parent().attr("class","current");
// 	$('.tags_row a').click(function(e){
// 		e.preventDefault();
// 		$(".tags_row li").attr("class","");
// 		$(this).parent().attr("class","current");
// 		})
// })

$(document).ready(function(){
	// $(window).resize(function(){
	// if(document.body.clientWidth<1000){
	// alert("No Resize!");
	// window.resizeTo(document.body.clientWidth,1000);
	// }
	// });
    $(".tagContent div").hide();
	$(".tags_row li:first").attr("class","current");
	$(".tagContent div:first").fadeIn();
	$('.tags_row a').click(function(e){
		e.preventDefault();
		$(".tagContent div").hide();
		$(".tags_row li").attr("class","");
		$(this).parent().attr("class","current");
		$('#'+$(this).attr('title')).fadeIn();
		//$('#'+$(this).attr('title>div')).fadeIn();
		})
})
function toEmail(){
	var objFrm = document.frmEmail;
	var objFrmEmail = document.frmEmail_hidden;
	var msg = "";
	msg += "Name: " + objFrm.name.value + " ";
	msg += "Email: " + objFrm.email.value + " ";
	objFrmEmail.message.value = msg;
	objFrmEmail.action = "mailto:ivy_sj_2016@163.com?subject=" + objFrm.subject.value;
	objFrmEmail.submit();
}

function vedioClick(){
	document.getElementById("tagContent0").style.display = "block";
	document.getElementById("tagContent1").style.display = "none";
	document.getElementById("tagContent2").style.display = "none";
	document.getElementById("tagContent3").style.display = "none";
	window.location.hash = "#vedio_jump";
}
function workClick(){
	document.getElementById("tagContent0").style.display = "block";
	document.getElementById("tagContent1").style.display = "none";
	document.getElementById("tagContent2").style.display = "none";
	document.getElementById("tagContent3").style.display = "none";
	window.location.hash = "#work_jump";
}
function usClick(){
	document.getElementById("tagContent3").style.display = "block";
	document.getElementById("tagContent0").style.display = "none";
	document.getElementById("tagContent1").style.display = "none";
	document.getElementById("tagContent2").style.display = "none";
}
