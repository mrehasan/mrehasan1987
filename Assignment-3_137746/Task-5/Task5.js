var arr1=[3,"a","a","a",2,3,"a",3,"a",2,4,9,3];

var arr2=[];

for(var i=0;i<arr1.length;i++){
    if(arr2.indexOf(arr1[i])== -1)
    arr2.push(arr1[i]);
}
document.write(arr2);
