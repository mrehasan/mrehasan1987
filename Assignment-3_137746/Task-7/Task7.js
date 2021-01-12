var a =[10,20,4,40,60,70];
var b= [1,2,3,4,5,6,7,8,9,10];

var c= [];


for(var i=0; i<b.length; i++){
    if(c.indexOf(b[i])== -1)
    c.push(b[i]);
}
for (var i=0; i<a.length;i++){
    if(c.indexOf(a[i])== -1)
    c.push(a[i]);
}


document.write(c);
