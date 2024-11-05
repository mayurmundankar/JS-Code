function table() {
    var str = "Table:";
    var n = parseInt(document.getElementById("num").value);
    for (var i = 1; i <= 10; i++) {
      var b = n * i;
      str = str + "<p>" + n + " x " + i + " = " + b + "</p>";
    }
    document.getElementById("result").innerHTML = str;
}
