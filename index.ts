import { Automovil } from "./class/automovil";
import { Operaciones } from "./class/operacion";

const miAuto = new Automovil("PKC-141", "2024-12-10", "07:00");
const operacion = new Operaciones(miAuto);
console.log(operacion.puedeCircular());