function x2(n,i,x1,r) {return x1 + r*Math.sin(2*Math.PI*n/i);};
function y2(n,i,y1,r) {return y1 - r*Math.cos(2*Math.PI*n/i);};

function checkTime(i) {
    if (i<10)
    {
      i="0" + i;
    }
    return i;
  }

function myLine(ctx,x1,y1,x2,y2,width,color) {
  ctx.beginPath();           // comenzar nueva linea
  ctx.moveTo(x1,y1);         // Comienzo de linea
  ctx.lineTo(x2,y2);         // Final de linea

  ctx.strokeStyle = color;   // color de línea
  ctx.lineWidth = width;     // anchura de linea:  5 puntos
  ctx.stroke();              // dibujar linea
}



function myCircle(ctx,x,y,r,width,color) {
  ctx.beginPath();             // comenzar figura
                                   // añadir arco (circulo completo):
  ctx.arc(x,y,r,0,2*Math.PI);  //     ctx.arc(x, y, r, start, stop)

  ctx.strokeStyle = color;     // color de la línea del circulo
  ctx.lineWidth = width;       // anchura de la línea del circulo
  ctx.stroke();                // dibujar circulo
}

function mostrar_hora(ctx) {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  var ds = d.getMilliseconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  ds = Math.floor(ds/100);//se captura la fraccion de los milisegundos
  $('#tex').html(h + ":" + m + ":" + s+"."+ds);

  ctx.clearRect(0,0,140,140)  // borrar CANVAS
  
  myCircle(ctx,80,80,50,3,"black");   // esfera del reloj
  myCircle(ctx,80,100,10,1,"brown");  //se define el circulo de las decimas de seg  


  myLine(ctx,80,80,x2(h,12,80,30),y2(h,12,80,30),5,"grey"); // horas
  myLine(ctx,80,80,x2(m,60,80,40),y2(m,60,80,40),3,"grey"); // min.
  myLine(ctx,80,80,x2(s,60,80,50),y2(s,60,80,50),1,"red"); // seg.
  myLine(ctx,80,100,x2(ds,10,80,10),y2(ds,10,100,10),1,"blue"); //dec seg
}

$(function() {
  var c=document.getElementById("myCanvas"); // obtiene CANVAS
  if (c.getContext) {                     // CANVAS soportado?
    var ctx = c.getContext("2d");         // define contexto 2D
    mostrar_hora(ctx);

    setInterval(function(){mostrar_hora(ctx);}, 10)

  }
})


