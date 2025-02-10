function getAreaOfTriangle(base, height) {
    const retVal = (base * height) / 2;
    return retVal;
}
function getAreaOfRectangle(length, breadth) {
    const retVal = length * breadth;
    return retVal;
}
function getAreaOfSquare(side) {
    const retVal = side ^ 2;
    return retVal;
}
function getAreaOfCircle(radius) {
    const retVal = 3.14159 * (radius ^ 2);
    return retVal;
}
let Triangle_Base = 10;
let Triangle_Height = 10;
console.log("Area of Triangle: " + getAreaOfTriangle(Triangle_Base, Triangle_Height));
let Rectangle_Length = 10;
let Rectangle_Breadth = 10;
console.log("Area of Rectangle: " + getAreaOfRectangle(Rectangle_Length, Rectangle_Breadth));
let Square_Side = 10;
console.log("Area of Square: " + getAreaOfSquare(Square_Side));
let Circle_Radius = 10;
console.log("Area of Circle: " + getAreaOfCircle(Circle_Radius));