import { createCilinder } from "./controllers/cilinderController.js";
import { createCone } from "./controllers/coneController.js";
import { createCube } from "./controllers/cubeController.js";
import { showCilinder } from "./views/cilinderView.js";
import { showCone } from "./views/coneView.js";
import { showCube } from "./views/cubeView.js";
import readline from 'readline-sync'

const cubeData = {
  edge: 2,
  color: "Green",
};

const cilinderData = {
  radius: 5,
  height: 5,
};

const coneData = {
  radius: 7,
  height: 7,
};

let opcao = ""

do {
  console.log("\n===== MENU =====");
  console.log("1 - Cilindro");
  console.log("2 - Cone");
  console.log("3 - Cubo");
  console.log("4 - Sair");

  opcao = readline.question("\nEscolha uma opcao: ").trim();

  switch (opcao) {
    case "1":
      const cilinder = createCilinder(cilinderData);
      showCilinder(cilinder);
      break;
    case "2":
      const cone = createCone(coneData);
      showCone(cone);
      break;
    case "3":
      const cube = createCube(cubeData);
      showCube(cube);
      break;
    case "4":
      console.log("Saindo do sistema...");
      break;
    default:
      console.log("\nOpção inválida! Tente novamente.");
  }
} while (opcao !== "4");
