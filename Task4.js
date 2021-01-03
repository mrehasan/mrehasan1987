var marksobtained = prompt('Enter marks Obtained.');
var markstotal = prompt('Enter Total marks.', 300);

var marksper = (marksobtained/markstotal)*100;
document.write("<h1>Marks Sheet</h1>");
if(marksper < 60){
    var grade = "Fail";
    var remark = "Sorry";

}else if(marksper >= 60 && marksper < 70){
    var grade = "B";
    var remark = "You need to improve";
}else if(marksper >= 70 && marksper < 80){
    var grade = "A";
    var remark = "Good";
}else if(marksper >= 80 && marksper <= 100){
    var grade = "A-one";
    var remark = "Excellent";
}

window.onload = function() {

var result1 = document.getElementById("total");
var result2 = document.getElementById("obtained");
var result3 = document.getElementById("perc");
var result4 = document.getElementById("grade");
var result5 = document.getElementById("remark");

result1.innerHTML = markstotal;
result2.innerHTML = marksobtained;
result3.innerHTML = marksper +"%";
result4.innerHTML = grade;
result5.innerHTML = remark;
}

