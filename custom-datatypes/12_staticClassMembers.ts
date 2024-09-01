class Circle {
    static pi: number = Math.PI;

    static diameter(radius: number): number {
        return radius * 2;
    }

    static circumference(radius: number): number {
        return this.pi * this.diameter(radius);
    }
}

console.log(Circle.pi);
console.log(Circle.diameter(8));
console.log(Circle.circumference(8));