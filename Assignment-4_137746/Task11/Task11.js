var input = prompt("Enter Numbers to find Mean");
 var a = input.split("");
var sum = 0;

 for(i=0; i< a.length; i++){
    sum = sum + Number(a[i]/a.length);
}
 alert(sum);