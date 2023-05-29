/*
Gastronomía Market es una empresa que se dedica a proveer de productos e insumos
gastronómicos a distintos restaurantes. Esta empresa en cuestión requiere el desarrollo de
un programa realizado en JavaScript, que permita hacer seguimiento de sus productos, sus
precios y sus proveedores. Sumado a esto la empresa requiere poder diferenciar entre tipos
de proveedores, dado que existen proveedores internacionales y nacionales
Para cumplir el requerimiento del cliente se debe generar:
Un objeto proveedor, el cual debe tener un nombre, un artículo y un precio. Por otro lado,
se debe generar un objeto artículo, el cual tenga un nombre, email y teléfono. Además,
debe contar con un método getInfoProveedor() que devuelva un mensaje con el nombre y
teléfono del proveedor. Se debe generar una clase extendida del objeto proveedor llamado
tipo_proveedor, el cual debe la función getInfoProveedor(), indicar país y con si es un
proveedor internacional o no
*/


import './style.css';
import javascriptLogo from './public/JavaScript.svg';
import viteLogo from './public/vite.svg';
import { setupCounter } from './components/counter.js';
import { Articulos } from './components/articulos.js';
import { Proveedores } from './components/proveedores.js';
import { TipoProveedor } from './components/TipoProveedor.js';
import { initClock } from './components/clocks.js';


document.querySelector('#app').innerHTML = `
<div>
<h2>Aqui usamos Vite!</h2>
<a href="https://vitejs.dev" target="_blank">
  <img src="${viteLogo}" class="logo" alt="Vite logo" />
</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
  <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
</a>
<div class="card">
  <button id="counter" type="button"></button>
</div>
<p class="read-the-docs">
  Clickea en el logo de vite y js para más informacion
</p>
</div>
`

setupCounter(document.querySelector('#counter'));

initClock(document.querySelector("#clock"));


let articulo2 = new Articulos("clavos", "20000");
console.log("============ A R T I C U L O ==============")

console.log(articulo2)

let proveedor2 = new Proveedores("ferrokabros spa", "ferroinfo@kabros.cl", articulo2, "+56912345678");
console.log("============ P R O V E E D O R ==============")

console.log(proveedor2)


let proveedor3 = new TipoProveedor("ferrokabros spa",articulo2,true,"ARGENTINA");
console.log("============ P R O V E E D O R / T I P O - P R O V E E D O R ==============")

console.log(proveedor3.getInfoProveedores())

const obtenImpuestos = (Proveedores) => {
  let totalEmpresa = Proveedores.articulo.precio;

  let tax = totalEmpresa * 19 / 100;
  let derecho = totalEmpresa * 6 / 100
  let total = tax + derecho;
  return [tax, derecho, total]
}

let [impuesto, aduanero, total] = obtenImpuestos(proveedor2)

console.log("============ I M P U E S T O S ==============")
console.log(`El IVA de ${articulo2.nombre} es ${impuesto}`)
console.log(`El impuesto aduanero de ${articulo2.nombre} es ${aduanero}`)
console.log(`El impuesto total de ${articulo2.nombre} es ${total}`)

console.log("============ F I N ==============")