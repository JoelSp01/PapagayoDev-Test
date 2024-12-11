import { Automovil } from "../class/automovil";  // Ajusta según la ubicación real
import { Operaciones } from "../class/operacion";  // Ajusta según la ubicación real

describe('Pruebas de la clase Operaciones', () => {

    it('Debe permitir circular un automóvil en sábado a las 10:00', () => {
        const automovil = new Automovil("ABC123", "2024-12-07", "10:00"); // Sábado
        const operaciones = new Operaciones(automovil);
        expect(operaciones.puedeCircular()).toBe("Puede circular");
    });

    it('No debe permitir circular un automóvil en martes a las 8:00 con placa terminada en 3', () => {
        const automovil = new Automovil("ABC123", "2024-12-03", "08:00"); // Martes
        const operaciones = new Operaciones(automovil);
        expect(operaciones.puedeCircular()).toBe("No puede circular");
    });

    it('Debe permitir circular un automóvil en lunes a las 9:00 con placa terminada en 5', () => {
        const automovil = new Automovil("ABC135", "2024-12-02", "09:00"); // Lunes
        const operaciones = new Operaciones(automovil);
        expect(operaciones.puedeCircular()).toBe("Puede circular");
    });

    it('No debe permitir circular un automóvil en viernes a las 7:30 con placa terminada en 9', () => {
        const automovil = new Automovil("XYZ139", "2024-12-06", "07:30"); // Viernes
        const operaciones = new Operaciones(automovil);
        expect(operaciones.puedeCircular()).toBe("No puede circular");
    });

    it('Debe permitir circular un automóvil en miércoles a las 16:30 con placa terminada en 7', () => {
        const automovil = new Automovil("DEF347", "2024-12-04", "16:30"); // Miércoles
        const operaciones = new Operaciones(automovil);
        expect(operaciones.puedeCircular()).toBe("Puede circular");
    });

});
