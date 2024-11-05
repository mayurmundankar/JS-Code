// Function to calculate area of a triangle
function calculateTriangleArea() {
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);
    var area = 0.5 * base * height;
    document.getElementById('triangle-area').innerText = "Area of Triangle: " + area;
}

// Function to calculate area of a rectangle
function calculateRectangleArea() {
    var length = parseFloat(document.getElementById('length').value);
    var breadth = parseFloat(document.getElementById('breadth').value);
    var area = length * breadth;
    document.getElementById('rectangle-area').innerText = "Area of Rectangle: " + area;
}

// Function to calculate area of a circle
function calculateCircleArea() {
    var radius = parseFloat(document.getElementById('radius').value);
    var area = 3.14 * radius * radius;
    document.getElementById('circle-area').innerText = "Area of Circle: " + area;
}
