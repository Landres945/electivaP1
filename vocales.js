var palabra = [];
var nuevo = [];
palabra=prompt("INGRESE LA PALABRA PARA BUSCAR LAS VOCALES").toLowerCase();
for (var i = 0; i < palabra.length; i++) {
  var numVoc = 0;
if (palabra.charAt(i)==="a") {
  nuevo.push(palabra.charAt(i)==="a");
  //alert("hay vocal a");
}
if (palabra.charAt(i)==="e") {
  nuevo.push(palabra.charAt(i)==="e");
  //alert("hay vocal e");
}
if (palabra.charAt(i)==="i") {
  nuevo.push(palabra.charAt(i)==="i");
  //alert("hay vocal i");
}
if (palabra.charAt(i)==="o") {
  nuevo.push(palabra.charAt(i)==="o");
  //alert("hay vocal o");
}
if (palabra.charAt(i)==="u") {
  nuevo.push(palabra.charAt(i)==="u");

  //alert("hay vocal u");
}
}
alert("la cantidad de vocales es:" + " " + nuevo.length);
