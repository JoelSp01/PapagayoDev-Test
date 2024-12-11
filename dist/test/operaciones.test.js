"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const automovil_1 = require("../class/automovil"); // Ajusta según la ubicación real
const operacion_1 = require("../class/operacion"); // Ajusta según la ubicación real
const verificaciones_1 = require("../class/verificaciones");
describe('Pruebas de la clase Operaciones', () => {
    it('Debe permitir circular un automóvil en sábado a las 10:00', () => {
        const automovil = new automovil_1.Automovil("ABC123", "2024-12-07", "10:00"); // Sábado
        const operaciones = new operacion_1.Operaciones(automovil);
        expect(operaciones.puedeCircular()).toBe("Puede circular");
    });
    it('No debe permitir circular un automóvil en martes a las 8:00 con placa terminada en 3', () => {
        const automovil = new automovil_1.Automovil("ABC123", "2024-12-03", "08:00"); // Martes
        const operaciones = new operacion_1.Operaciones(automovil);
        expect(operaciones.puedeCircular()).toBe("No puede circular");
    });
    it('Debe permitir circular un automóvil en lunes a las 9:00 con placa terminada en 5', () => {
        const automovil = new automovil_1.Automovil("ABC135", "2024-12-02", "09:00"); // Lunes
        const operaciones = new operacion_1.Operaciones(automovil);
        expect(operaciones.puedeCircular()).toBe("Puede circular");
    });
    it('No debe permitir circular un automóvil en viernes a las 7:30 con placa terminada en 9', () => {
        const automovil = new automovil_1.Automovil("XYZ139", "2024-12-06", "07:30"); // Viernes
        const operaciones = new operacion_1.Operaciones(automovil);
        expect(operaciones.puedeCircular()).toBe("No puede circular");
    });
    it('Debe permitir circular un automóvil en miércoles a las 16:30 con placa terminada en 7', () => {
        const automovil = new automovil_1.Automovil("DEF347", "2024-12-04", "16:30"); // Miércoles
        const operaciones = new operacion_1.Operaciones(automovil);
        expect(operaciones.puedeCircular()).toBe("Puede circular");
    });
    // Pruebas para la clase Verificaciones
    describe('Pruebas de la clase Verificaciones', () => {
        let verificaciones;
        beforeEach(() => {
            verificaciones = new verificaciones_1.Verificaciones(); // Instanciamos la clase Verificaciones antes de cada prueba
        });
        it('Debe devolver true para una fecha válida', () => {
            const resultado = verificaciones.verificarFecha('2024-12-10');
            expect(resultado).toBe(true);
        });
        it('Debe devolver false para una fecha inválida', () => {
            const resultado = verificaciones.verificarFecha('2024-11-33');
            expect(resultado).toBe(false);
        });
        it('Debe devolver true para una hora válida en formato HH:mm', () => {
            const resultado = verificaciones.verificarHora('14:30');
            expect(resultado).toBe(true);
        });
        it('Debe devolver false para una hora inválida en formato HH:mm', () => {
            const resultado = verificaciones.verificarHora('25:00');
            expect(resultado).toBe(false);
        });
        it('Debe devolver false para una hora con minutos inválidos en formato HH:mm', () => {
            const resultado = verificaciones.verificarHora('14:60');
            expect(resultado).toBe(false);
        });
    });
});
