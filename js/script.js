function validBasic(){
	var sname=document.sbFourm.yourName.value;
	var spassword=document.sbFourm.pass1.value;
	var cpassword=document.sbFourm.pass2.value;
	//
	if(sname=="null" || sname==""){
		alert("please provide valid name");
		return false;		
	}
	//
	if(spassword.length>6){
		alert("Please enter valid password");
		return true;
	}
	//
	if(spassword==cpassword){
		return true;
	}else{
		alert("password confirm password must be same");
		return false;
	}
}