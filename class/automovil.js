"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Automovil = void 0;
class Automovil {
    //constructor
    constructor(placa, fecha, hora) {
        this.placa = placa;
        this.fecha = fecha;
        this.hora = hora;
    }
    //getters
    getPlaca() {
        return this.placa;
    }
    getFecha() {
        return this.fecha;
    }
    getHora() {
        return this.hora;
    }
    //setters
    setPlaca(placa) {
        this.placa = placa;
    }
    setFecha(fecha) {
        this.fecha = fecha;
    }
    setHora(hora) {
        this.hora = hora;
    }
}
exports.Automovil = Automovil;
