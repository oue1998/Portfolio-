function getParams() {
  	var idx = document.URL.indexOf('?');
  	var params = new Array();
  	if (idx != -1) {
  		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
  		for (var i=0; i<pairs.length; i++) {
  			nameVal = pairs[i].split('=');
  			params[nameVal[0]] = nameVal[1];
  		}
 	}
  	return params;
 }

window.onload = loginLoad;
function loginLoad(){
	// วิธีใช้ getParams()
	var parameter = getParams();
	console.log(parameter.username);
	console.log(parameter.password2);
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	var parameter = getParams();
	var a = document.forms["myLogin"]["username"].value;
	var b = document.forms["myLogin"]["password"].value;
	var user = parameter.username;
	var pass = parameter.password2;
	if(a==user && b == pass){
		alert("Welcome");
		return true;
	}else{
		alert("password is not true");
		return false;
	}
}

			