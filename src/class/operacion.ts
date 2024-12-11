import { Automovil } from "./automovil";

export class Operaciones {
    automovil: Automovil;
    //constructor
    constructor(automovil: Automovil) {
        this.automovil = automovil;
        if (!this.verificarFecha(this.automovil.getFecha())) {
            throw new Error("Ingresar bien la fecha");
        }

        if (!this.verificarHora(this.automovil.getHora())) {
            throw new Error("Ingresar bien la hora");
        }
    }

    // Método para validar la fecha
    private verificarFecha(fecha: string): boolean {
        const fechaObjeto = new Date(fecha);
        return !isNaN(fechaObjeto.getTime());  // Verifica si la fecha es válida
    }

    // Validar hora en formato HH:mm
    private verificarHora(hora: string): boolean {
        // Expresión regular para validar el formato HH:mm
        const regex = /^([01]?[0-9]|2[0-3]):([0-5]?[0-9])$/;
        return regex.test(hora);
    }

    private validarDia(): boolean {
        const ultimoDigito: string = this.automovil.getPlaca().slice(-1);
        const fecha: string = this.automovil.getFecha();

        if (isNaN(Number(ultimoDigito))) {
            throw new Error("La placa es inválida. El último dígito debe ser un número.");
        }

        const fechaObjeto = new Date(fecha + 'T00:00:00');

        // Obtenemos el día de la semana
        const diaDeLaSemana = fechaObjeto.getDay();

        // Días de la semana bloqueados según el último dígito de la placa
        const bloqueados: { [key: number]: string[] } = {
            1: ['1', '2'],
            2: ['3', '4'],
            3: ['5', '6'],
            4: ['7', '8'],
            5: ['9', '0'],
        };

        // Si es fin de semana, no hay restricción por día
        if (diaDeLaSemana === 0 || diaDeLaSemana === 6) {
            return false; // Puede circular
        }

        // Verificamos si el último dígito está restringido en el día actual
        return bloqueados[diaDeLaSemana]?.includes(ultimoDigito) ?? false;
    }


    validarHora(hora: string): boolean {
        //Separar hora y minutos
        const [horaParte, minutosParte] = hora.split(":").map(Number);
        const minutosTotales = horaParte * 60 + minutosParte;

        // Intervalo de horas
        const inicioRango1 = 6 * 60;
        const finRango1 = 9 * 60 + 30;

        const inicioRango2 = 16 * 60;
        const finRango2 = 21 * 60;

        return (minutosTotales >= inicioRango1 && minutosTotales <= finRango1) ||
            (minutosTotales >= inicioRango2 && minutosTotales <= finRango2);
    }


    puedeCircular(): String {
        const hora: string = this.automovil.getHora();
        //condicon para circular
        if (this.validarDia() && this.validarHora(hora)) {
            return "No puede circular";
        } else {
            return "Puede circular";
        }
    }

}