var date = new Date();

document.write(date);
document.write("<br>");
var milliSeconds = date.getTime();
document.write("Elapsed milliseconds since January 1,1970 : "+milliSeconds);
document.write("<br>");
document.write("Elapsed minuts since January 1,1970 : "+milliSeconds/1000*60);

 
