let myArray = [];

function addObject() {

const rollno = document.getElementById("rollno").value;
const name = document.getElementById("name").value;
const college = document.getElementById("college").value;
const studentObject = { rollno: rollno, name: name, college: college
    };

myArray.push(studentObject);

document.getElementById("A").innerText = JSON.stringify(myArray, null, 2);
}

function checkArray() {
const result = Array.isArray(myArray) ? "It's an array!" :
"It's not an array.";
document.getElementById("B").innerText = result;
}
