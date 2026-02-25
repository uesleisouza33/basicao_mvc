export default class Cone{
    constructor(radius, height){
        this.radius = radius;
        this.height = height;
    }

    get area(){
        return Math.PI * (this.radius **2 )
    }

    get volume(){
        return (1/3) * (Math.PI) * (this.radius ** 2) * this.height
    }
}