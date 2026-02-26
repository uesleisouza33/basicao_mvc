export function showCone(cone) {
    console.log(`Geratriz do cone: ${cone.generatrix.toFixed(2)} cm`);
    console.log(`Área da base do cone: ${cone.baseArea.toFixed(2)} cm²`);
    console.log(`Área lateral do cone: ${cone.lateralArea.toFixed(2)} cm²`);
    console.log(`Área total do cone: ${cone.totalArea.toFixed(2)} cm²`);
    console.log(`Volume total do cone: ${cone.volume.toFixed(2)} cm³`);
    console.log("\n");
}