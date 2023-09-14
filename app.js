// Definir productos
const productosJSON = [
  {
    nombre: "Imagen",
    precio: 150,
    detalle: "Producto",
    tallas: [
      "37",
      "37.5",
      "38",
      "38.5",
      "39",
      "39.5",
      "40",
      "40.5",
      "41",
      "41.5",
      "42",
      "43",
    ],
    cantidad: 10,
  },
  // Agregar más productos aquí
];

let carrito = [];
const carritoIcon = document.getElementById("carrito-icon");
const carritoList = document.getElementById("carrito-list");
const carritoContainer = document.getElementById("carrito");
const productosContainer = document.getElementById("productos");

carritoIcon.addEventListener("click", toggleCarrito);

function toggleCarrito() {
  carritoContainer.classList.toggle("visible");
}

// Función para agregar producto al carrito
function agregarAlCarrito(producto) {
  const productoExistente = carrito.find(
    (p) => p.nombre === producto.nombre && p.talla === producto.talla
  );

  if (productoExistente) {
    // Si el producto ya existe en el carrito, aumenta la cantidad
    productoExistente.cantidad += producto.cantidad;
  } else {
    carrito.push(producto);
  }
  actualizarCarrito();
}

// Función para actualizar el contenido del carrito
function actualizarCarrito() {
  carritoList.innerHTML = "";
  let costoTotal = 0;

  carrito.forEach((producto) => {
    const li = document.createElement("li");
    li.textContent = `${producto.nombre} - Talla: ${producto.talla} - $${producto.precio} x ${producto.cantidad}`;
    carritoList.appendChild(li);

    costoTotal += producto.precio * producto.cantidad;
  });

  if (carrito.length === 0) {
    carritoList.innerHTML = "<li>El carrito está vacío.</li>";
  }

  costoTotalSpan.textContent = `$${costoTotal}`;

  // Guardar el carrito en el almacenamiento local (localStorage)
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Recuperar el carrito desde el almacenamiento local al cargar la página
window.addEventListener("load", () => {
  const carritoGuardado = localStorage.getItem("carrito");
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
    actualizarCarrito();
  }
});

productosJSON.forEach((producto) => {
  for (let i = 37; i <= 44; i++) {
    const productoElement = document.createElement("div");
    productoElement.classList.add("producto-item");
    productoElement.innerHTML = `
        <img src="imagen${i}.jpg" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.detalle}</p>
        <p>Precio: $${producto.precio}</p>
        <label for="talla-${producto.nombre}-${i}">Seleccionar Talla:</label>
        <select id="talla-${producto.nombre}-${i}" class="tallas">
            ${producto.tallas
              .map((talla) => `<option>${talla}</option>`)
              .join("")}
        </select>
        <input type="number" class="cantidad" min="1" max="${
          producto.cantidad
        }" value="1">
        <button class="agregarBtn">Agregar al Carrito</button>
    `;

    const agregarBtn = productoElement.querySelector(".agregarBtn");
    agregarBtn.addEventListener("click", () => {
      const nombre = producto.nombre;
      const precio = parseFloat(producto.precio);
      const cantidad = parseInt(
        productoElement.querySelector(".cantidad").value
      );
      const talla = productoElement.querySelector(".tallas").value;

      agregarAlCarrito({
        nombre,
        precio,
        cantidad,
        talla,
      });
    });

    productosContainer.appendChild(productoElement);
  }
});

const costoTotalSpan = document.getElementById("costoTotal");
