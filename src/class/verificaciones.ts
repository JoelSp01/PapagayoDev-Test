export class Verificaciones {
    // Método para validar la fecha
    public verificarFecha(fecha: string): boolean {
        const fechaObjeto = new Date(fecha);
        return !isNaN(fechaObjeto.getTime());  // Verifica si la fecha es válida
    }

    // Validar hora en formato HH:mm
    public verificarHora(hora: string): boolean {
        // Expresión regular para validar el formato HH:mm
        const regex = /^([01]?[0-9]|2[0-3]):([0-5]?[0-9])$/;
        return regex.test(hora);
    }
}
