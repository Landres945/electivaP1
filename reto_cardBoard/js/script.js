window.onload = function()
{
    var camera, scene, renderer;
    var effect, controls;
    var element, container, mercurio;
    var clock = new THREE.Clock();
    var cube, veCubo = false;
    var tamanoPlanetas			=	50;

    var planetas = [
					 {
						             imagen 	   : "img/planetas/luna.jpg",
                         nombre      : "La Luna",
                         vista       : false,
                         position    : {x : -300, y : 350, z : 30},
						             objeto		   : 0
					 },
             {           imagen 	   : "img/planetas/marte.jpg",
                         nombre      : "Marte",
                         vista       : false,
                         position    : {x : 150, y : 200, z : 10},
                         objeto		   : 0

           },
           {           imagen 	   : "img/planetas/tierra.jpg",
                       nombre      : "tierra",
                       vista       : false,
                       position    : {x : 400, y : 200, z : 20},
                       objeto		   : 0

         },
         {           imagen 	   : "img/planetas/mercurio.jpg",
                     nombre      : "mercurio",
                     vista       : false,
                     position    : {x : 100, y : 300, z : 20},
                     objeto		   : 0

       }];
    var crearPlaneta = function(data)
	{
		var geometria = new THREE.SphereGeometry(data.tamano,data.tamano,data.tamano);
		var textura = THREE.ImageUtils.loadTexture(data.imagen);
		var material = new THREE.MeshBasicMaterial( { map: textura } );
		return new THREE.Mesh(geometria, material);
	};

    var resize = function()
    {
        var width = container.offsetWidth;
        var height = container.offsetHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
        effect.setSize(width, height);
    };

    var init = (function()
    {
        renderer = new THREE.WebGLRenderer();
        element = renderer.domElement;
        container = document.getElementById('example');
        container.appendChild(element);
        effect = new THREE.StereoEffect(renderer);
        effect.separation = 0.2;
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(90, 1, 0.001, 700);
        camera.position.set(0, 5, 0);
        scene.add(camera);
        controls = new THREE.OrbitControls(camera, element);
        controls.rotateUp(Math.PI / 4);
        controls.target.set
        (
            camera.position.x + 0.1,
            camera.position.y + 0.1,
            camera.position.z
        );
        controls.noZoom = false;
        controls.noPan = false;
        //controls.autoRotate = true;
        function setOrientationControls(e)
        {
            if (!e.alpha)
            {
                return;
            }
            controls = new THREE.DeviceOrientationControls(camera, true);
            controls.connect();
            controls.update();
            element.addEventListener('click', fullscreen, false);
            window.removeEventListener('deviceorientation', setOrientationControls, true);
        }
        //Adicona luz..
        window.addEventListener('deviceorientation', setOrientationControls, true);
        var light = new THREE.HemisphereLight(0x777777, 0x000000, 0.6);
        scene.add(light);
        for (var i = 0; i < planetas.length; i++)
        {
          planetas[i].objeto = crearPlaneta({tamano: 50, imagen: planetas[i].imagen});
          scene.add(planetas[i].objeto);
          planetas[i].objeto.position.x = planetas[i].position.x;
          planetas[i].objeto.position.y = planetas[i].position.y;
          planetas[i].objeto.position.z = planetas[i].position.z;

        }
        var imagePrefix = "img/place/place-";
        var directions  = ["xpos", "xneg", "ypos", "yneg", "zpos", "zneg"];
        var imageSuffix = ".jpg";
        var skyGeometry = new THREE.BoxGeometry( 800, 800, 800 );

        var materialArray = [];
        for (var i = 0; i < 6; i++)
        {
            materialArray.push( new THREE.MeshBasicMaterial({
                map: THREE.ImageUtils.loadTexture( imagePrefix + directions[i] + imageSuffix ),
                side: THREE.BackSide
            }));
        }
        var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
        var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
        scene.add( skyBox );
        window.addEventListener('resize', resize, false);
        setTimeout(resize, 1);
    })();

    var update = function(dt)
    {
        resize();
        camera.updateProjectionMatrix();
        controls.update(dt);
    };
    //Saber si el elemento está dentro del punto de vista que se está viendo...
    var puntoDeVista = function()
	{
        var frustum = new THREE.Frustum();
        var cameraViewProjectionMatrix = new THREE.Matrix4();
        camera.updateMatrixWorld(); // make sure the camera matrix is updated
        camera.matrixWorldInverse.getInverse( camera.matrixWorld );
        cameraViewProjectionMatrix.multiplyMatrices( camera.projectionMatrix, camera.matrixWorldInverse );
        frustum.setFromMatrix( cameraViewProjectionMatrix );
        //frustum.intersectsObject(objeto) indica si está el punto de vísta...
        //ESTO LO HARÁ POR CADA FRAME, POR LO QUE ES IMPORTANTE VALIDAR SI YA ESTÁ VIENDO EL OBJETO...
        //EN EL EJEMPLO DEL ARRAY DE PLANETAS, EXISTE LA PROPIEDAD "vista", la cual indica si se está viendo el planeta...
        //EJEMPLO VIENDO UN CUBO...
        for (var i = 0; i < planetas.length; i++)
        {
            if(frustum.intersectsObject(planetas[i].objeto))
            {
                if(!planetas[i].vista)
                {
                    planetas[i].vista = true;
                    responsiveVoice.speak("Estas viendo el planeta " + planetas[i].nombre, "Spanish Female");
                    console.log("Estas viendo " + planetas[i].nombre);
                }
            }
            else
            {
                planetas[i].vista = false;
            }
        }
};

    var animate = function()
    {
        requestAnimationFrame(animate);
        //ESPACIO DONDE SE ESPERA QUE LOS PLANETAS/LUNA GIREN EN Y
        //SE PUEDE HACER USO DE LA PROPIEDAD rotation
        //cube.rotation.y += 0.1; //EJEMPLO, NO DEBERÁ ESTAR AL FINAL DEL EJERCICIO...
        //cube.rotation.y	+= 0.05;
        planetas[0].objeto.rotation.y += 0.1;
        planetas[1].objeto.rotation.y += 0.1;
        planetas[2].objeto.rotation.y += 0.1;
        planetas[3].objeto.rotation.y += 0.1;

        puntoDeVista();
        update(clock.getDelta());
        effect.render(scene, camera);
    };
    animate();

    var fullscreen = function()
    {
        if (container.requestFullscreen)
        {
            container.requestFullscreen();
        }
        else if (container.msRequestFullscreen)
        {
            container.msRequestFullscreen();
        }
        else if (container.mozRequestFullScreen)
        {
            container.mozRequestFullScreen();
        }
        else if (container.webkitRequestFullscreen)
        {
            container.webkitRequestFullscreen();
        }
    };

};
