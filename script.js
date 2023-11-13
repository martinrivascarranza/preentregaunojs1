

//variables
let nombreApellido;
let precios;
let metodoPago;
let costo;
let costoTotal;
let pesoKettlebell;
let otraCompra;
const SI = 'si';



// bienvenida al usuario
alert("Bienvenido a la tienda de Kettlebells");

// solicitar nombre y apellido
nombreApellido = prompt("Por favor, ingrese su nombre y apellido:");

// saludo personalizado
alert(`Hola ${nombreApellido}, bienvenido/a a nuestra tienda de kettlebells.`);

// definir precios de kettlebells
 precios = {
  4: 10,
  6: 15,
  8: 20,
  12: 25,
  16: 30,
  20: 40,
  24: 50
};

// método de pago
metodoPago = prompt("Por favor, elija su método de pago: efectivo, debito o credito");

// inicializar el costo total
costoTotal =0;

// Realizar compras hasta que el usuario decida salir de la tienda
do {
  // kettlebells disponibles por peso
  alert("Estas son las Kettlebells disponibles:\n4kg, 6kg, 8kg, 12kg, 16kg, 20kg, 24kg");

  //eleccion del peso de la kettlebell
   pesoKettlebell = +prompt("Ingrese el peso de la kettlebell que desea comprar:");

  // verificación peso correcto
  if (pesoKettlebell in precios) {
    // calculo costo subtotal
    const costoSubtotal = precios[pesoKettlebell];
   
    
    // costo total con el impuesto iva
    costoTotal = costoSubtotal * 1.19;

    // detalle de la compra realizada
    alert(`Resumen de la compra:\nPeso: ${pesoKettlebell}kg\nCosto Subtotal: ${costoSubtotal} euros\nCosto Total con IVA: ${costoTotal.toFixed(2)} euros`);

    // preguntar si desea hacer otra compra
    otraCompra = prompt("¿Desea comprar algo más? (si/no)").toLowerCase();

    if (otraCompra !== SI) {
      // si no desea hacer otra compra, terminar la operación
      alert("Muchas Gracias por su compra.");
      break;
    }
  } else {
    // si el peso no es correcto mostrar error
    alert("Peso de kettlebell no válido. Por favor, elija un peso válido.");
  }

} while (true); // ciclo para comprar más veces
