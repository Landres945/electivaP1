var base,altura,radio,area,figura;

figura = prompt('INGRESE NOMBRE DE LA FIGURA PARA HALLAR AREA ' , ' ');
if (figura === "cuadrado") {
  base=prompt('INGRESE EL NUMERO DE LA BASE PARA UN CUADRADO:' , ' ');
  altura=prompt('INGRESE EL NUMERO DE LA ALTURA PARA EL CUADRADO: ' , ' ');
  area = base*altura;
  alert("EL AREA DEL CUADRADO ES : " + area);


}else
if (figura === "triangulo") {
  base=prompt('INGRESE EL NUMERO DE LA BASE PARA UN CUADRADO:' , ' ');
  altura=prompt('INGRESE EL NUMERO DE LA ALTURA PARA EL CUADRADO: ' , ' ');
  area = (base*altura)/2;
  alert("EL AREA DEL TRIANGULO ES : " + area);
}else
if (figura === "circulo") {
  radio=prompt('INGRESE EL NUMERO DEL RADIO PARA UN CIRCULO:' , ' ');
  area = Math.PI * Math.pow(radio,2);//instruccion que permite obtener el numero PI y multiplicarlo por un valor obtenido al cuadrado con la instruccion math.pow
  alert("EL AREA DEL CIRCULO ES : " + area);
}
