function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        const result = eval(display.value);
        
        if (isNaN(result) || result === Infinity || result === -Infinity) {
            alert("Invalid Calculation");
            clearDisplay();
        } else {
            display.value = result;
        }
    } catch (error) {
        alert("Invalid Calculation");
        clearDisplay();
    }
}
