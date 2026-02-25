export default class Cube {
    constructor(edge, color) {
        this.edge = edge;
        this.color = color;
    }

    get volume() {
        return this.edge ** 3;
    }

    get lateralArea() {
        return (4) * (this.edge ** 2)
    }

    get totalArea() {
        return (6) * (this.edge ** 2)
    }
}