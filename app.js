class Producto {
  constructor(nombre, precio, detalle, cantidad) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.detalle = detalle;
    this.cantidad = parseInt(cantidad);
    this.disponible = true;
  }

  sumarIva() {
    return this.precio * 1.21;
  }

  vender() {
    this.disponible = false;
  }

  precioSugerido() {
    return this.precio * 1.21 * 1.25;
  }
}

var arrayProductos = [];
var continuar = true;

do {
  var comprobacion = prompt(
    "Ingrese el modelo seleccionado o escriba 'fin' para terminar"
  );

  if (comprobacion.toLowerCase() === "fin") {
    continuar = false;
  } else {
    var nombreP = comprobacion;
    var precioP = prompt("Ingrese el precio del producto");
    var detalleP = prompt("Ingrese el detalle del producto");
    var cantidadP = prompt("Ingrese la cantidad comprada del producto");
    arrayProductos.push(new Producto(nombreP, precioP, detalleP, cantidadP));
  }
} while (continuar);

console.log(arrayProductos);

document.write("<h3>Lista de Productos:</h3>");

for (var producto of arrayProductos) {
  document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
  document.write("<li><h3>Detalle: " + producto.detalle + "</h3></li>");
  document.write("<li><h3>Cantidad: " + producto.cantidad + "</h3></li>");
  document.write("<li><h3>Precio: " + producto.precio + "</h3></li>");
  document.write(
    "<li><h3>Precio con IVA: " + producto.sumarIva() + "</h3></li></ul><br>"
  );
}

var pocoStock = arrayProductos.filter((producto) => producto.cantidad <= 5);
console.log(pocoStock);
document.write(
  "<h3>Lista de Productos con poco Stock (menos de 5 unidades):</h3>"
);

for (var producto of pocoStock) {
  document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
  document.write("<li><h3>Detalle: " + producto.detalle + "</h3></li>");
  document.write(
    "<li><h3>Cantidad: " + producto.cantidad + "</h3></li></ul><br>"
  );
}

var sinStock = arrayProductos.filter(
  (producto) => producto.cantidad === 0 || !producto.disponible
);
console.log(sinStock);
document.write(
  "<h3>Lista de Productos sin Stock (cantidad = 0 o disponible = false):</h3>"
);

for (var producto of sinStock) {
  document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
  document.write("<li><h3>Detalle: " + producto.detalle + "</h3></li>");
  document.write(
    "<li><h3>Cantidad: " + producto.cantidad + "</h3></li></ul><br>"
  );
}

var ingresado = prompt("Ingrese el producto que desea buscar");
var prodIngresado = arrayProductos.filter((producto) =>
  producto.nombre.includes(ingresado)
);
console.log(prodIngresado);
document.write("<h3>Lista de Productos ingresados para búsqueda:</h3>");

for (var producto of prodIngresado) {
  document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
  document.write("<li><h3>Detalle: " + producto.detalle + "</h3></li>");
  document.write("<li><h3>Precio: " + producto.precio + "</h3></li></ul><br>");
}

var ordenadosCantidad = arrayProductos
  .slice()
  .sort((a, b) => a.cantidad - b.cantidad);
console.log("Ordenados por cantidad Ascendente:");
console.log(ordenadosCantidad);
document.write("<h3>Lista de Productos ordenados por cantidad:</h3>");

for (var producto of ordenadosCantidad) {
  document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
  document.write("<li><h3>Detalle: " + producto.detalle + "</h3></li>");
  document.write(
    "<li><h3>Cantidad: " + producto.cantidad + "</h3></li></ul><br>"
  );
}

var ordenadosPrecio = arrayProductos
  .slice()
  .sort((a, b) => a.precio - b.precio);
console.log("Ordenados por Precios Ascendentes");
console.log(ordenadosPrecio);
document.write("<h3>Lista de Productos ordenados por Precio Ascendente:</h3>");

for (var producto of ordenadosPrecio) {
  document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
  document.write("<li><h3>Detalle: " + producto.detalle + "</h3></li>");
  document.write("<li><h3>Precio: " + producto.precio + "</h3></li></ul><br>");
}
