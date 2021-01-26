var text = "<p><strong><em>Only Print This</em></strong></p>";
var b = text.replaceAll("\\<.*?\\>", "");
document.write(b);
