
window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
    }

function validateForm() {
    var a = document.forms["myForm"]["password1"].value;
    var b = document.forms["myForm"]["password2"].value;
    if(a == b){
        return true
    }else {
        var text1 = document.getElementById("errormsg");
        text1.innerHTML="password does not match";
        return false;
    }
}