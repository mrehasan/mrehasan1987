
var input = parseFloat(prompt("Enter A value"));

if (input < 0){
    alert("Invalid");
}else{ 
document.write("Number :"+input);

document.write("<br>");

document.write("Round off value :"+input.toFixed(0));

document.write("<br>");

document.write("Floor Value :"+Math.floor(input));

document.write("<br>");

document.write("Ceil Value :"+Math.ceil(input));
}