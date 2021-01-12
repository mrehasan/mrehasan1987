var colors=[];
colors[0]= "White";
colors[1]= "Blue";
colors[2]= "Pink";

document.write(colors);
document.write("<br>");

//A
var newcolor= prompt("Enter New color at First Place");

document.write("<br>");
document.write("<h2>New Color Added at First Place</h2>");
colors.splice(colors[0],colors[0],newcolor);
document.write("<br>");
document.write(colors);

//B

var endcolor= prompt("Enter New color at Last Place");

document.write("<br>");
document.write("<h2>New Color Added at Last Place</h2>");
colors.push(endcolor);
document.write("<br>");
document.write(colors);

//C
document.write("<br>");
document.write("<h2>2 New Color Added</h2>");
var twocolor1= prompt("Enter New color at First Place: ");
var twocolor2= prompt("Enter 2nd New color at First Place: ");

colors.splice(0,0,twocolor1);
colors.splice(1,0,twocolor2);
document.write("<br>");
document.write(colors);

//D

var delcolor= prompt("Press ENTER to delete First Color","PRESS ENTER");

document.write("<br>");
document.write("<h2>First Color Deleted</h2>");
colors.shift(colors[0]);
document.write("<br>");
document.write(colors);

//E

var delcolorlast= prompt("Press ENTER to delete Last Color","PRESS ENTER");

document.write("<br>");
document.write("<h2>Last color Deleted</h2>");
colors.pop(colors[0]);
document.write("<br>");
document.write(colors);

//F
document.write("<br>");

document.write("<h2>Color At your Desired Place</h2>");

var index= prompt("Enter the Desired color");
var index1= prompt("Enter the Desired Place for the Given Color");
document.write("<br>");

colors.splice(index1,0,index);
document.write(colors);

//G

document.write("<br>");

document.write("<h2>Colors after deletion</h2>");

var index2= prompt("Delete The Desired Color");
var index3= prompt("Number of colors you want to Delete");
document.write("<br>");
colors.splice(0,index3,colors);
colors.splice(0,index2,colors);

document.write(colors);