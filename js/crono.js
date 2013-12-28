$(function(){
	localStorage.c = (localStorage.c || "0.00");
	localStorage.x = (localStorage.x || "");
	localStorage.v = (localStorage.v || "0");
	var cl = $("#crono"), com = $("body"), lista = $("#lista");
	var t;

	$("#cambiar").on('click', cambiar);
	$("#iniciar").on('click', empezar);
	com.on("tap", cambiar);
	com.on("swipe", empezar);

	function cambiar(){if (!t) arrancar(); else parar();};
	function arrancar(){t=setInterval(function(){incrementar(); mostrar()}, 10);};
	function incrementar(){localStorage.c = +localStorage.c + 0.01;}
	function mostrar(){cl.html((+localStorage.c).toFixed(2)); lista.html(localStorage.x);};
	function parar(){clearInterval(t); alista(); t = undefined; mostrar();};
	function empezar(){if (!t) {localStorage.x = ""; localStorage.c = "0.00"; localStorage.v = "0"; mostrar();};};
	function alista(){
		vis = +localStorage.v;
		++vis;
		localStorage.x = localStorage.x + "Parada " + vis + ": " + (+localStorage.c).toFixed(2) + " seg" + " <br> ";
		localStorage.v = vis;
	};
	mostrar();
});
