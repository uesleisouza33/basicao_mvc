export default class Cone {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    get generatrix() {
        return Math.sqrt(
            (this.radius ** 2) + (this.height ** 2)
        );
    }

    get baseArea() {
        return Math.PI * (this.radius ** 2);
    }

    get lateralArea() {
        return Math.PI * this.radius * this.generatrix;
    }

    get totalArea() {
        return this.baseArea + this.lateralArea;
    }

    get volume() {
        return (1 / 3) * Math.PI * (this.radius ** 2) * this.height;
    }
}