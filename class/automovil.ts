class Automovil {
    placa: string;
    fecha: string;
    hora: string
    //constructor
    constructor(placa: string, fecha: string, hora: string) {
        this.placa = placa;
        this.fecha = fecha;
        this.hora = hora;
    }

    //getters
    getPlaca(): string {
        return this.placa;
    }
    getFecha(): string {
        return this.fecha;
    }
    getHora(): string {
        return this.hora;
    }

    //setters
    setPlaca(placa: string) {
        this.placa = placa;
    }
    setFecha(fecha: string) {
        this.fecha = fecha;
    }
    setHora(hora: string) {
        this.hora = hora;
    }
}