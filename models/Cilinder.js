export default class Cilinder{
    constructor(radius, height){
        this.radius = radius;
        this.height = height;
    }

    get area(){
        return Math.PI * (this.radius ** 2)
    }

    get lateralArea(){
        return (2) * (Math.PI * (this.radius) * (this.height))
    }

    get totalArea(){
        return (2) * ((this.area) + (this.lateralArea))
    }

    get volume(){
        return Math.PI * (this.radius**2) * this.height
    }
}