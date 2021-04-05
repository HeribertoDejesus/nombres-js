
var resultado = [];
console.log(resultado);

function nombres(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
}

var nombre = ["Vanessita",
              "Maria",
              "Marta",
              "Roberto",
              "Jose",
              "Juan",
              "Noel"];

var apellido = ["Filipe",
                "Rodriguez",
                "Perez",
                "Martinez",
                "De jesus",
                "Petalta",
                "Bons"];

var edad = ["18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "30"];




function generator() {
  var cantidadRegistdos = document.getElementById("number").value;
  console.log(cantidadRegistdos);


for(var i = 0; i < cantidadRegistdos; i++){

  var random = Math.floor(Math.random() * 3);


if (random == 0) {
  this["nuevoRegistro"] = new nombres(nombre[random], apellido[Math.floor(Math.random() * 4)], edad[Math.floor(Math.random() * 4)]);
  resultado.push(this["nuevoRegistro"]);
  document.getElementById("table").innerHTML += "<td>" + this["nuevoRegistro"].nombre + "</td>" + "<td>" + this["nuevoRegistro"].apellido + "</td>" + "<td>" + this["nuevoRegistro"].edad + "</td>";
}
  else if (random == 1){
    this["nuevoRegistro"] = new nombres(nombre[random], apellido[Math.floor(Math.random() * 3)], edad[Math.floor(Math.random() * 4)]);
    resultado.push(this["nuevoRegistro"]);
    document.getElementById("table").innerHTML += "<td>" + this["nuevoRegistro"].nombre + "</td>" + "<td>" + this["nuevoRegistro"].apellido + "</td>" + "<td>" + this["nuevoRegistro"].edad + "</td>";
  }
  else{
    this["nuevoRegistro"] = new nombres(nombre[random], apellido[Math.floor(Math.random() * 3)], edad[Math.floor(Math.random() * 4)]);
    resultado.push(this["nuevoRegistro"]);
    document.getElementById("table").innerHTML += "<td>" + this["nuevoRegistro"].nombre + "</td>" + "<td>" + this["nuevoRegistro"].apellido + "</td>" + "<td>" + this["nuevoRegistro"].edad + "</td>";
   }
   console.log(this.nuevoRegistro);
  }
 }
