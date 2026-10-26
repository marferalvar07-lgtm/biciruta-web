let carrito = [];

function anadir(producto) {
  carrito.push(producto);
  document.getElementById("contador").textContent = carrito.lenght;
  console.log("Añadido:", producto);
}

document.querySelectorAll(".btn-anadir").forEach(function (boton) {
  boton.addEventListener("click", function () {
    anadir(boton.dataset.producto);
  });
});

document.getElementById("boton-menu").addEventListener("click", function () {
  document.getElementById("menu").classList.toggle("abierto");
});
