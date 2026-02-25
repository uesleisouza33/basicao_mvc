import Cilinder from "../models/Cilinder.js";

export function createCilinder(data){
    const cilinder = new Cilinder(
        data.radius,
        data.height,
    );

    return {
        area: cilinder.area,
        totalArea: cilinder.totalArea,
        lateralArea: cilinder.lateralArea,
        volume: cilinder.volume,
    }

}