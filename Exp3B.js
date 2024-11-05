function replace(){
    var inputStr = document.getElementById("inputStr").value;
    var matchingStr = document.getElementById("matchingStr").value;
    var replacingStr = document.getElementById("replacingStr").value;

    var newStr = inputStr.replace(matchingStr, replacingStr);
    document.getElementById("result").innerHTML = "Replaced String: " + newStr;
}
