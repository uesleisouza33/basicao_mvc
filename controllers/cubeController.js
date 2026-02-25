import Cube from '../models/Cube.js';

export function createCube(data){
    const cube = new Cube(
        data.edge,
        data.color
    );

    return {
        totalArea: cube.totalArea,
        lateralArea: cube.lateralArea,
        volume: cube.volume,
    }

}