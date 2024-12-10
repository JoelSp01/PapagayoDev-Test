"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const automovil_1 = require("./class/automovil");
const operacion_1 = require("./class/operacion");
const miAuto = new automovil_1.Automovil("PKC-141", "2024-12-10", "07:00");
const operacion = new operacion_1.Operaciones(miAuto);
console.log(operacion.puedeCircular());
