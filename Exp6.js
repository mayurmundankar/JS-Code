function removeArrayElement() {
    const arrayInput = document.getElementById("arrayInput").value.split(",").map(item => item.trim());
    const elementToRemove = document.getElementById("removeElement").value.trim();

    const index = arrayInput.indexOf(elementToRemove);
    let resultMessage;

        arrayInput.splice(index, 1); // Remove element if found
        resultMessage = `Array after removal: [${arrayInput.join(", ")}]`;

    document.getElementById("removeResult").innerText = resultMessage;
}

function checkArrayElement() {
    const arrayInput = document.getElementById("arrayInput").value;
    const elementToCheck = document.getElementById("checkElement").value;

    const index = arrayInput.indexOf(elementToCheck);
    let resultMessage;

    if (index !== -1) {
        resultMessage = "Element " + elementToCheck + " found at index " + index;
    } else {
        resultMessage = "Element Not Found!";
    }

    document.getElementById("checkResult").innerText = resultMessage;
}
