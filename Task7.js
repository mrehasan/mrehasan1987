
    var text = "the quick brown fox jumps over lazy the dog";
    var word = "'the'";
    var temp = text.split("the");
    var count = 0;
    
    for (var i = 0; i < temp.length; i++) {
    if (word.indexOf(temp[i]))
    count++;
    
    }
    document.write("Text : " + text);
    document.write("<br>");
    document.write("There are " + count + " occurrenc(s) of the word " + word);
    