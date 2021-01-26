//var date = prompt("Enter the Date")
var date = new Date();
var day = date.getDate();
alert(day);
if(day < 16){
    alert("First fifteen days of the month");
}else{
  alert("Last fifteen days of the month")
}