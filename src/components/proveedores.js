// import { proveedores } from "./proveedores";
class Proveedores {
    constructor(nombre, email, articulo = {}, telefono) {
        this._nombre = nombre;
        this._email = email;
        this._articulo = articulo;
        this._telefono = telefono;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }

    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }

    get articulo() {
        return this._articulo;
    }
    set articulo(articulo) {
        this._articulo = articulo;
    }

    get telefono() {
        return this._telefono;
    }
    set telefono(telefono) {
        this._telefono = telefono;
    }

    getInfoProveedores() {
        return `Proveedores: ${this._nombre}, teléfono: ${this._telefono}`;
    }

}


export { Proveedores }