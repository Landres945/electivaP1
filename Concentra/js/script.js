$(function()
{
var dimensiones = 4;
var tiempo = 0;
var cuentaTiempo = 0;
//Para crear el escenario...
var crearEscenario = function()
{
  var txt = "<table id = 'chess_board' cellpadding = '0' cellspacing = '0'>";
   divTabla = "";
  for(var i = 0; i < dimensiones; i++)
  {
    txt += "<tr>";
    for(var c = 0; c < dimensiones; c++)
    {
      divTabla = i + "_" + c;

        txt += "<td id = '"+(divTabla)+"'></td>";
    }
    txt += "</tr>";
  }
  txt += "</table>";

//nom_div(Math.floor(Math.random() *3)) + divTabla.style.backgroundColor = "red";
  $("#escenario").html(txt);

}();//Funcion que se autoejecutara para iniciar el juego...

//escoger celdas aleatorias...
CeldaAleatoria();

function CeldaAleatoria(){
      for (var i = 0; i < 3; i++) {
          x= Math.floor(Math.random()*3);
          y= Math.floor(Math.random()*3);

          console.log("#"+x+"_"+y);
    //$("#"+x+"_"+y).removeClass().addClass("azul") ;
          $("#"+x+"_"+y).css("background-color", "blue");

  }
}
var click = function()
{
  for(var i = 0; i < dimensiones; i++)
  {
    for(var c = 0; c < dimensiones; c++)
    {
      $("#" + i + "_" + c).click(function(event)
      {
        var ind = this.id.split("_");

          if (Number(ind[0]) === x && Number(ind[1]) === y) {// esto permite ver que al darle click en una celda de las que cambiaron, se cambia el css nuevamente
              $("#"+x+"_"+y).css("background-color", "red");

              console.log($("#"+x+"_"+y));
        }
              console.log(ind);
              //console.log(posicion);
        	});
        }
      }
    }
//crearEscenario();
click();



});
