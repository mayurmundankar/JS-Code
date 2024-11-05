function palindrome(){
    var inputStr = document.getElementById("inputStr").value;
    var newStr = inputStr.toLowerCase();

    var reverseStr = "";

    for(var i = inputStr.length - 1; i >= 0; i--){
        reverseStr = reverseStr + inputStr[i];
    }
    if(newStr.localeCompare(reverseStr) === 0){
        document.getElementById("result").innerHTML = "String is Palindrome";
    }
    else{
        document.getElementById("result").innerHTML = "String is Not Palindrome";
    }
}
