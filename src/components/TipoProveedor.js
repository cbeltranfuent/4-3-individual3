import { Proveedores } from "./proveedores.js";


export class TipoProveedor extends Proveedores{
    constructor(nombre, articulo = {}, internacional, pais){
        super(nombre, articulo);
        this._internacional = internacional;
        this._pais = pais;
    }

    get nombre() {
        return super.nombre;
    }
    set nombre(nombre) {
        super.nombre = nombre;
    }

    get articulo() {
        return super.articulo;
    }
    set articulo(articulo) {
        super.articulo = articulo;
    }

    // get precio() {
    //     return super.precio;
    // }
    // set precio(precio) {
    //     super.precio = precio;
    // }



    getInfoTipoProveedores() {
        return super.getInfoTipoProveedores();
    }
}