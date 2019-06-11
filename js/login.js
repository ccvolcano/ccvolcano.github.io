function r(){
	var userName=document.getElementById("userName");
	var passWord=document.getElementById("passWord");
	if(username.value==""){
		alert("请输入用户名");
		userName.focus();
		return;
	}
	if(pass.value==""){
		alert("请输入密码");
		return;
	}
	return true;
}// JavaScript Document