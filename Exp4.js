function compare(){
    var str1 = document.getElementById("str1").value;
    var str2 = document.getElementById("str2").value;

    var mathop = (str1 == str2) ? "Strings Equal" : "Strings not Equal"
    document.getElementById("mathop").innerHTML = mathop;

    var stricteq = (str1 === str2) ? "Strings Equal" : "Strings not Equal"
    document.getElementById("stricteq").innerHTML = stricteq;

    var match = str1.match(str2) ? "Strings Equal" : "Strings not Equal"
    document.getElementById("match").innerHTML = match;

    var matchAll = str1.matchAll(str2) ? "Strings Equal" : "Strings not Equal"
    document.getElementById("matchAll").innerHTML = matchAll;

    var localecompare = str1.localeCompare(str2) == 0 ? "Strings Equal" : "Strings not Equal"
    document.getElementById("localecompare").innerHTML = localecompare;
}
