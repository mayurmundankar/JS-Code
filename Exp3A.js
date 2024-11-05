function reverse(){
    var inputStr = document.getElementById("inputStr").value;
    let reversedStr = " ";
    for(var i = inputStr.length - 1; i >= 0; i--){
        reversedStr = reversedStr + inputStr[i];
    }
    document.getElementById("result").innerHTML = reversedStr;
}
