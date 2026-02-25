import Cone from "../models/Cone.js";

export function createCone(data){
    const cone = new Cone(
        data.radius,
        data.height,
    )

    return {
        area: cone.area,
        volume: cone.volume,
    }
}