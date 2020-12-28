var a= 2;
var b= 1;

//--a;  // 1
//--a - --b; // 1
//--a - --b + ++b // 2
//--a - --b + ++b + b--; // 3

var result= --a - --b + ++b + b--;
console.log(result);


