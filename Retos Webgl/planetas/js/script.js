window.onload = function()
{
	var ancho = window.innerWidth;
	var alto = window.innerHeight;
	var lienzo = new THREE.WebGLRenderer({alpha: true});
	lienzo.setSize(ancho, alto);
	document.body.appendChild(lienzo.domElement);
	var escena 		  = new THREE.Scene,
		tamanoJupiter = 300;
		tamanoTierra = tamanoJupiter * 0.12;
		tamanoMarte	=	tamanoJupiter * 0.04;
		tamanoVenus = tamanoJupiter * 0.11;
		tamanoMercurio = tamanoJupiter * 0.04;
	var crearPlaneta = function(data)
	{
		var geometria = new THREE.SphereGeometry(data.tamano,data.tamano,data.tamano);
		var textura = THREE.ImageUtils.loadTexture(data.imagen);
		var material = new THREE.MeshBasicMaterial( { map: textura } );
		return new THREE.Mesh(geometria, material);
	};

	/*var jupiter = crearPlaneta({
									tamano 	: tamanoJupiter,
									imagen	: 'img/jupiter.jpg'
							  }),
	escalaJupiter = true;
	escena.add(jupiter);*/
	//
	var Planetas = [jupiter = crearPlaneta({
									tamano 	: tamanoJupiter,
									imagen	: 'img/jupiter.jpg'
							  }),marte = crearPlaneta({
																tamano 	: tamanoMarte,
																imagen	: 'img/marte.jpg'}),
									tierra = crearPlaneta({
								  tamano 	: tamanoTierra,
									imagen	: 'img/tierra.jpg'}),
									venus = crearPlaneta({
									tamano 	: tamanoVenus,
									imagen	: 'img/venus.jpg'}),
									mercurio = crearPlaneta({
									tamano 	: tamanoMercurio,
									imagen	: 'img/mercurio.jpg'})];


	var camara = new THREE.PerspectiveCamera(50,(ancho / alto),0.1, 10000);
	escalaPlanetas = true;
	escena.add(Planetas[0]);
	escena.add(Planetas[1]);
	escena.add(Planetas[2]);
	escena.add(Planetas[3]);
	escena.add(Planetas[4]);
	camara.position.y = 160;
	camara.position.z = 400;
	camara.lookAt(jupiter.position);
	jupiter.position.x = 500;
	marte.position.x =	100;
	tierra.position.x = -40;
	venus.position.x =	-180;
	mercurio.position.x = -290;
	escena.add(camara);
	function renderizar()
	{
		jupiter.rotation.y += 0.001;
		marte.rotation.y	+= 0.05;
		tierra.rotation.y += 0.06;
		venus.rotation.y	+= 0.06;
		mercurio.rotation.y += 0.08;
		lienzo.render(escena, camara);
		requestAnimationFrame(renderizar);
	}
	renderizar();
};
