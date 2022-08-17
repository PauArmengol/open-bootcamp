class Persona {
    constructor(edad, nombre, telefono) {
        this.edad = edad;
        this.nombre = nombre;
        this.telefono = telefono;
    }
}

class Cliente extends Persona {
    constructor(edad, nombre, telefono, credito) {
        super(edad, nombre, telefono);
        this.credito = credito;
    }

}
const nuevoCliente = {
    edad: 36,
    nombre: 'Paula',
    telefono: '123456789',
    credito: true
}

class Trabajador extends Persona {
    constructor(edad, nombre, telefono, salario) {
        super(edad, nombre, telefono);
        this.salario = salario;
    }
}