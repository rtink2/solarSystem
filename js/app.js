var BjsApp = BjsApp || {};

BjsApp.init = function() {
  //get the canvas
  var canvas = document.getElementById('renderCanvas');

  //create a BabylonJS engine object
  var engine = new BABYLON.Engine(canvas, true);

  // Create a basic BJS Scene object.
  var scene = new BABYLON.Scene(engine);

  //create a camera
  var camera = new BABYLON.ArcRotateCamera(
    'camera',
    0,
    0,
    15,
    BABYLON.Vector3.Zero(),
    scene
  );

  //let the user move the camera
  camera.attachControl(canvas);

  camera.upperRadiusLimit = 50;

  // Create a basic light, aiming 0,1,0 - meaning, to the sky.
  var light = new BABYLON.HemisphericLight(
    'light',
    new BABYLON.Vector3(0, 1, 0),
    scene
  );
  light.intensity = 0.5;
  light.groundColor = new BABYLON.Color3(0, 0, 1);

  scene.clearColor = new BABYLON.Color3(0, 0, 0);

  // Create a built-in "sun" shape.
  var sun = BABYLON.MeshBuilder.CreateSphere(
    'sun',
    { segments: 16, diameter: 4 },
    scene
  );
  var sunMaterial = new BABYLON.StandardMaterial('sunMaterial', scene);
  sunMaterial.emissiveTexture = new BABYLON.Texture(
    'assets/images/sun.jpg',
    scene
  );
  sunMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
  sunMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
  sun.material = sunMaterial;

  // sun light
  var sunLight = new BABYLON.PointLight(
    'sunLight',
    BABYLON.Vector3.Zero(),
    scene
  );
  sunLight.intensity = 2;

  // planets material
  var mercuryMaterial = new BABYLON.StandardMaterial('mercuryMat', scene);
  mercuryMaterial.diffuseTexture = new BABYLON.Texture(
    'assets/images/mercury.jpg',
    scene
  );
  mercuryMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

  var venusMaterial = new BABYLON.StandardMaterial('venusMat', scene);
  venusMaterial.diffuseTexture = new BABYLON.Texture(
    'assets/images/venus.jpg',
    scene
  );
  venusMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

  var earthMaterial = new BABYLON.StandardMaterial('earthMat', scene);
  earthMaterial.diffuseTexture = new BABYLON.Texture(
    'assets/images/earth.jpg',
    scene
  );
  earthMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

  var marsMaterial = new BABYLON.StandardMaterial('marsMat', scene);
  marsMaterial.diffuseTexture = new BABYLON.Texture(
    'assets/images/mars.jpg',
    scene
  );
  marsMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

  var jupiterMaterial = new BABYLON.StandardMaterial('jupiterMat', scene);
  jupiterMaterial.diffuseTexture = new BABYLON.Texture(
    'assets/images/jupiter.jpg',
    scene
  );
  jupiterMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

  var saturnMaterial = new BABYLON.StandardMaterial('saturnMat', scene);
  saturnMaterial.diffuseTexture = new BABYLON.Texture(
    'assets/images/saturn.jpg',
    scene
  );
  saturnMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

  var uranusMaterial = new BABYLON.StandardMaterial('uranusMat', scene);
  uranusMaterial.diffuseTexture = new BABYLON.Texture(
    'assets/images/uranus.jpg',
    scene
  );
  uranusMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

  var neptuneMaterial = new BABYLON.StandardMaterial('neptuneMat', scene);
  neptuneMaterial.diffuseTexture = new BABYLON.Texture(
    'assets/images/neptune.jpg',
    scene
  );
  neptuneMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

  // planets
  // Mercury
  var mercury = BABYLON.MeshBuilder.CreateSphere(
    'mercury',
    { segments: 16, diameter: 1 },
    scene
  );
  mercury.position.x = 4;
  mercury.material = mercuryMaterial;
  mercury.orbit = {
    radius: mercury.position.x,
    speed: 0.009,
    angle: 0
  };
  // Venus
  var venus = BABYLON.MeshBuilder.CreateSphere(
    'venus',
    { segments: 16, diameter: 1 },
    scene
  );
  venus.position.x = 6;
  venus.material = venusMaterial;
  venus.orbit = {
    radius: venus.position.x,
    speed: 0.008,
    angle: 0
  };
  // Earth
  var earth = BABYLON.MeshBuilder.CreateSphere(
    'earth',
    { segments: 16, diameter: 1 },
    scene
  );
  earth.position.x = 7;
  earth.material = earthMaterial;
  earth.orbit = {
    radius: earth.position.x,
    speed: 0.007,
    angle: 0
  };

  // Mars
  var mars = BABYLON.MeshBuilder.CreateSphere(
    'mars',
    { segments: 16, diameter: 1.5 },
    scene
  );
  mars.position.x = 8;
  mars.material = marsMaterial;
  mars.orbit = {
    radius: mars.position.x,
    speed: 0.006,
    angle: 0
  };

  // Jupiter
  var jupiter = BABYLON.MeshBuilder.CreateSphere(
    'jupiter',
    { segments: 16, diameter: 2 },
    scene
  );
  jupiter.position.x = 9;
  jupiter.material = jupiterMaterial;
  jupiter.orbit = {
    radius: jupiter.position.x,
    speed: 0.005,
    angle: 0
  };

  // Saturn
  var saturn = BABYLON.MeshBuilder.CreateSphere(
    'saturn',
    { segments: 16, diameter: 1 },
    scene
  );
  saturn.position.x = 10;
  saturn.material = saturnMaterial;
  saturn.orbit = {
    radius: saturn.position.x,
    speed: 0.004,
    angle: 0
  };

  // Uranus
  var uranus = BABYLON.MeshBuilder.CreateSphere(
    'uranus',
    { segments: 16, diameter: 1.5 },
    scene
  );
  uranus.position.x = 11;
  uranus.material = uranusMaterial;
  uranus.orbit = {
    radius: uranus.position.x,
    speed: 0.003,
    angle: 0
  };

  // Neptune
  var neptune = BABYLON.MeshBuilder.CreateSphere(
    'neptune',
    { segments: 16, diameter: 1.75 },
    scene
  );
  neptune.position.x = 12;
  neptune.material = neptuneMaterial;
  neptune.orbit = {
    radius: neptune.position.x,
    speed: 0.002,
    angle: 0
  };

  // skybox
  var skybox = BABYLON.Mesh.CreateBox('skybox', 1000, scene);
  var skyboxMaterial = new BABYLON.StandardMaterial('skyboxMat', scene);

  // don't render what we can't see
  skyboxMaterial.backFaceCulling = false;

  // move with camera
  skybox.infiniteDistance = true;

  skybox.material = skyboxMaterial;

  // remove reflection in skybox
  skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
  skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

  // texture of 6 sides of the cube
  skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture(
    'assets/images/skybox',
    scene
  );
  skyboxMaterial.reflectionTexture.coordinatesMode =
    BABYLON.Texture.SKYBOX_MODE;

  // thing method allows you to animate / move things
  scene.beforeRender = function() {
    mercury.position.x = mercury.orbit.radius * Math.sin(mercury.orbit.angle);
    mercury.position.z = mercury.orbit.radius * Math.cos(mercury.orbit.angle);
    mercury.orbit.angle += mercury.orbit.speed;

    venus.position.x = venus.orbit.radius * Math.sin(venus.orbit.angle);
    venus.position.z = venus.orbit.radius * Math.cos(venus.orbit.angle);
    venus.orbit.angle += venus.orbit.speed;

    earth.position.x = earth.orbit.radius * Math.sin(earth.orbit.angle);
    earth.position.z = earth.orbit.radius * Math.cos(earth.orbit.angle);
    earth.orbit.angle += earth.orbit.speed;

    mars.position.x = mars.orbit.radius * Math.sin(mars.orbit.angle);
    mars.position.z = mars.orbit.radius * Math.cos(mars.orbit.angle);
    mars.orbit.angle += mars.orbit.speed;

    jupiter.position.x = jupiter.orbit.radius * Math.sin(jupiter.orbit.angle);
    jupiter.position.z = jupiter.orbit.radius * Math.cos(jupiter.orbit.angle);
    jupiter.orbit.angle += jupiter.orbit.speed;

    saturn.position.x = saturn.orbit.radius * Math.sin(saturn.orbit.angle);
    saturn.position.z = saturn.orbit.radius * Math.cos(saturn.orbit.angle);
    saturn.orbit.angle += saturn.orbit.speed;

    uranus.position.x = uranus.orbit.radius * Math.sin(uranus.orbit.angle);
    uranus.position.z = uranus.orbit.radius * Math.cos(uranus.orbit.angle);
    uranus.orbit.angle += uranus.orbit.speed;

    neptune.position.x = neptune.orbit.radius * Math.sin(neptune.orbit.angle);
    neptune.position.z = neptune.orbit.radius * Math.cos(neptune.orbit.angle);
    neptune.orbit.angle += neptune.orbit.speed;
  };

  engine.runRenderLoop(function() {
    scene.render();
  });

  // the canvas/window resize event handler
  window.addEventListener('resize', function() {
    engine.resize();
  });
};
