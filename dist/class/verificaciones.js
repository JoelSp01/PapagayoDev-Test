"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Verificaciones = void 0;
class Verificaciones {
    // Método para validar la fecha
    verificarFecha(fecha) {
        const fechaObjeto = new Date(fecha);
        return !isNaN(fechaObjeto.getTime()); // Verifica si la fecha es válida
    }
    // Validar hora en formato HH:mm
    verificarHora(hora) {
        // Expresión regular para validar el formato HH:mm
        const regex = /^([01]?[0-9]|2[0-3]):([0-5]?[0-9])$/;
        return regex.test(hora);
    }
}
exports.Verificaciones = Verificaciones;
