var numero = [];
var result = ""
var result1 = ""
numero=prompt("PORFAVOR INGRESE EL NUMERO PARA VALIDAR SI ES CAPICÚA O NO: ");
for (i=0; i<numero.length-1; i++)
 {

	result += numero.charAt(i)
	result += "-"
}
result += numero.charAt(numero.length - 1)


for (i= numero.length -1; i>=0; i--)
{

if (result1 !== "")
{
result1 += "-"
}
	result1 += numero.charAt(i)

}
result1 += numero.charAt(numero.length)


if (result === result1)
{

	alert("EL NUMERO INGRESADO ES CAPICÚA")

}
else
{
alert("EL NUMERO INGRESADO NO ES CAPICÚA")
}
