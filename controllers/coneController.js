import Cone from "../models/Cone.js";

export function createCone(data) {
  const cone = new Cone(
    data.radius, 
    data.height
);

  return {
    generatrix: cone.generatrix,
    baseArea: cone.baseArea,
    lateralArea: cone.lateralArea,
    totalArea: cone.totalArea,
    volume: cone.volume,
  };
}
