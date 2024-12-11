# Proyecto Pico y Placa

Este proyecto implementa un predictor para determinar si un automóvil puede circular en función del último dígito de su placa, el día de la semana y las restricciones horarias del sistema de "Pico y Placa". Se desarrolló utilizando **TypeScript**, con un enfoque en la programación orientada a objetos y la creación de pruebas automatizadas con **Jest**.

---

## Descripción del Proyecto

El sistema se divide en 3 clases principales:

1. **Clase Automovil**: Representa los atributos básicos de un automóvil, como la placa, la fecha y la hora en que se realiza la consulta.
2. **Clase Operaciones**: Contiene la lógica necesaria para determinar si el automóvil puede circular o no, basada en:
   - Último dígito de la placa.
   - Día de la semana (restricciones específicas por dígito).
   - Rango de horas restringidas para la circulación.
3. **Clase Verificaciones**: Se encarga de validar los datos ingresados por el usuario, garantizando que la información sea correcta antes de realizar cualquier operación. Su función principal incluye:
   - Verificación de la fecha, verificando que sea una fecha válida.
   - Verificación de la hora, asegurando que el formato sea correcto.

Además, se creó un archivo de pruebas para validar la lógica y asegurar que el sistema funcione correctamente bajo diferentes escenarios.

---

## Comandos Principales

Antes de ejecutar el proyecto, instalar las dependencias necesarias y tener configurado el entorno. Los comandos principales para trabajar con el proyecto son:

### Instalación de Dependencias
```bash
npm install
```
### Construcción del Proyecto
Para compilar el proyecto de TypeScript , utiliza el siguiente comando. Esto generará los archivos compilados en el directorio configurado en `tsconfig.json`:

```bash
npm run build
```
### Ejecución del Proyecto
Una vez que el proyecto esté construido, puedes ejecutarlo con el siguiente comando:

```bash
npm run start
```
### Ejecución del Proyecto
Para verificar que las clases y la lógica funcionan correctamente, se han creado pruebas unitarias utilizando Jest. Puedes ejecutar estas pruebas con el comando:
```bash
npm test
