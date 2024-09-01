var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.diameter = function (radius) {
        return radius * 2;
    };
    Circle.circumference = function (radius) {
        return this.pi * this.diameter(radius);
    };
    Circle.pi = Math.PI;
    return Circle;
}());
console.log(Circle.pi);
console.log(Circle.diameter(8));
console.log(Circle.circumference(8));
