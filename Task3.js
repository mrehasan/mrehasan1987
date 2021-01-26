var Password= prompt(
    "Enter New Password\n"+ 
    "1. It should contain alphabets and numbers\n"+
    "2. It should not start with a number\n"+
    "3. It must at least 8 characters long\n")

    var lowerCaseLetters = /[a-z]/;
    var upperCaseLetter = /[A-Z]/;
    var numbers = /[0-9]/;
    var firstChar = Password.charAt(0);

    if(firstChar.match(/[0-9]/g)){
  alert("Inavalid Password, Please Use character code of a-z,A-Z & 0-9");
}
    else if (Password.length >= 8 || Password.lowerCaseLetters == /[a-z]/g || Password.upperCaseLetter == /[A-Z]/ || Password.numbers == /[0-9]/g )
{
   
document.write("New Password Registered");
}
    
else{
  alert("Inavalid Password. Please Use character code of a-z,A-Z & 0-9");
}