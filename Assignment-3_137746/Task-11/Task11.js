var a= ["cake","apple pie","cookie","chips","patties"];

var input = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?");
var found= false;

for (var i=0;i<a.length;i++){
    if (a[i] == input){
    document.write(input+ " is Available at index "+i+ " in Our Bakery");
    found= true;
    break;
    }
}
if(!found){
document.write(" We are Sorry. "+input+ " is/are Not Available");
}