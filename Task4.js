
//function ValidateEmail(inputText)
var inputText = prompt("email");

var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var dot=".";


if(inputText.match(mailformat)){

alert("Valid email address!");
//document.form1.text1.focus();
//return true;
}

 else {
alert("You have entered an invalid email address!");
//document.form1.text1.focus();
//return false;
}

