var age = prompt("Enter Your Age");

var date = new Date();

var day = date.getFullYear(2021)-age;

document.write("Your age is : "+ age);
document.write("<br>");
document.write("Your Birth Year is :"+ day);