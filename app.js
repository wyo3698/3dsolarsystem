window.addEventListener('DOMContentLoaded', function(){
    var canvas = document.getElementById('canvas');
    var engine = new BABYLON.Engine(canvas, true);
    var createScene = function(){

        var scene = new BABYLON.Scene(engine);

        //Skybox
        var skybox = BABYLON.Mesh.CreateBox("skyBox", 5000.0, scene);
        var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
        skyboxMaterial.backFaceCulling = false;
        skyboxMaterial.disableLighting = true;
        skybox.material = skyboxMaterial;
        skybox.infiniteDistance = true;
        skyboxMaterial.disableLighting = true;
        var files = [
            "textures/Space/space_left.jpg",
            "textures/Space/space_up.jpg",
            "textures/Space/space_front.jpg",
            "textures/Space/space_right.jpg",
            "textures/Space/space_down.jpg",
            "textures/Space/space_back.jpg",
        ];
        skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture.CreateFromImages(files, scene);
        skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;

        //Earth
        var earth = BABYLON.Mesh.CreateSphere("earth", 100, 10, scene);
        var earthMaterial = new BABYLON.StandardMaterial("earthMaterial", scene);
        earthMaterial.diffuseTexture = new BABYLON.Texture("textures/earth.jpg", scene);
        earthMaterial.specularColor = new BABYLON.Color3(0,0,0);
        earth.material = earthMaterial;

        //Moon
        var moon = BABYLON.Mesh.CreateSphere("moon", 100, 2, scene);
        moon.position = new BABYLON.Vector3(-5, 6, 0);
        var moonMaterial = new BABYLON.StandardMaterial("moonMaterial", scene);
        moonMaterial.diffuseTexture = new BABYLON.Texture("textures/moon.jpg", scene);
        moonMaterial.specularColor = new BABYLON.Color3(0,0,0);
        moon.material = moonMaterial;

        //Mercury
        var mercury = BABYLON.Mesh.CreateSphere("mercury", 100, 5, scene);
        mercury.position = new BABYLON.Vector3(180, -80, 300);
        mercury.rotation.x = BABYLON.Tools.ToRadians(2);
        var mercuryMaterial = new BABYLON.StandardMaterial("mercuryMaterial", scene);
        mercuryMaterial.diffuseTexture = new BABYLON.Texture("textures/mercury.jpg", scene);
        mercuryMaterial.specularColor = new BABYLON.Color3(0,0,0);
        mercury.material = mercuryMaterial;

        //Venus
        var venus = BABYLON.Mesh.CreateSphere("venus", 100, 7, scene);
        venus.position = new BABYLON.Vector3(200, -50, 70);
        venus.rotation.x = BABYLON.Tools.ToRadians(3);
        var venusMaterial = new BABYLON.StandardMaterial("venusMaterial", scene);
        venusMaterial.diffuseTexture = new BABYLON.Texture("textures/venus.jpg", scene);
        venusMaterial.specularColor = new BABYLON.Color3(0,0,0);
        venus.material = venusMaterial;

        //Mars
        var mars = BABYLON.Mesh.CreateSphere("mars", 100, 5, scene);
        mars.position = new BABYLON.Vector3(200, -60, -100);
        mars.rotation.x = BABYLON.Tools.ToRadians(25.19);
        var marsMaterial = new BABYLON.StandardMaterial("marsMaterial", scene);
        marsMaterial.diffuseTexture = new BABYLON.Texture("textures/mars.jpg", scene);
        marsMaterial.specularColor = new BABYLON.Color3(0,0,0);
        mars.material = marsMaterial;

        //Jupiter
        var jupiter = BABYLON.Mesh.CreateSphere("jupiter", 100, 80, scene);
        jupiter.position = new BABYLON.Vector3(100, -120, -450);
        jupiter.rotation.z = BABYLON.Tools.ToRadians(3);
        var jupiterMaterial = new BABYLON.StandardMaterial("jupiterMaterial", scene);
        jupiterMaterial.diffuseTexture = new BABYLON.Texture("textures/jupiter.jpg", scene);
        jupiterMaterial.specularColor = new BABYLON.Color3(0,0,0);
        jupiter.material = jupiterMaterial;

        //Saturn
        var saturn = BABYLON.Mesh.CreateSphere("saturn", 100, 50, scene);
        saturn.position = new BABYLON.Vector3(-350, -155, -600);
        saturn.rotation.z = BABYLON.Tools.ToRadians(27);
        var saturnMaterial = new BABYLON.StandardMaterial("saturnMaterial", scene);
        saturnMaterial.diffuseTexture = new BABYLON.Texture("textures/saturn.jpg", scene);
        saturnMaterial.specularColor = new BABYLON.Color3(0,0,0);
        saturn.material = saturnMaterial;

        //Saturn Ring
        var saturnring = BABYLON.MeshBuilder.CreateTorus("saturnring", {thickness: 10, diameter: 110, tessellation: 100}, scene);
        saturnring.position = saturn.position;
        saturnring.rotation.z = BABYLON.Tools.ToRadians(27);
        saturnring.scaling = new BABYLON.Vector3(1, 0.1, 1);
        var saturnringMaterial = new BABYLON.StandardMaterial("saturnringMaterial", scene);
        saturnringMaterial.diffuseTexture = new BABYLON.Texture("textures/saturnring.png", scene);
        saturnringMaterial.specularColor = new BABYLON.Color3(0,0,0);
        saturnring.material = saturnringMaterial;

        //Uranus
        var uranus = BABYLON.Mesh.CreateSphere("uranus", 100, 15, scene);
        uranus.position = new BABYLON.Vector3(-500, -120, -105);
        uranus.rotation.x = BABYLON.Tools.ToRadians(98);
        var uranusMaterial = new BABYLON.StandardMaterial("uranusMaterial", scene);
        uranusMaterial.diffuseTexture = new BABYLON.Texture("textures/uranus.jpg", scene);
        uranusMaterial.specularColor = new BABYLON.Color3(0,0,0);
        uranus.material = uranusMaterial;

        //Neptune
        var neptune = BABYLON.Mesh.CreateSphere("neptune", 100, 15, scene);
        neptune.position = new BABYLON.Vector3(-550, -150, 500);
        neptune.rotation.x = BABYLON.Tools.ToRadians(28.5);
        var neptuneMaterial = new BABYLON.StandardMaterial("neptuneMaterial", scene);
        neptuneMaterial.diffuseTexture = new BABYLON.Texture("textures/neptune.jpg", scene);
        neptuneMaterial.specularColor = new BABYLON.Color3(0,0,0);
        neptune.material = neptuneMaterial;

        //Light
        var light = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(9.78,-13.022,36.5), new BABYLON.Vector3(-9.78,13.022,-36.5), BABYLON.Tools.ToRadians(180), 0.01, scene);
        light.intensity = 1;

        var light1 = new BABYLON.SpotLight("spotLight1", new BABYLON.Vector3(-8.47,11.278,-42.15), new BABYLON.Vector3(8.47,-11.278,42.15), BABYLON.Tools.ToRadians(270), 0.1, scene);
        light1.intensity = 0.1;

        var light2 = new BABYLON.SpotLight("spotLight2", new BABYLON.Vector3(-11.29,15.04,-31.6), new BABYLON.Vector3(11.29,-15.04,31.6), BABYLON.Tools.ToRadians(270), 0.1, scene);
        light2.intensity = 0.1;

        var light3 = new BABYLON.SpotLight("spotLight3", new BABYLON.Vector3(-495,-135,270), new BABYLON.Vector3(-605,-165,330), BABYLON.Tools.ToRadians(270), 0.01, scene);
        light3.intensity = 1;

        //Camera
        var camera = new BABYLON.ArcRotateCamera('arcCamera', BABYLON.Tools.ToRadians(-80), BABYLON.Tools.ToRadians(65), 40.0, earth.position, scene);
        camera.attachControl(canvas, true);
        camera.keysUp.push(87);
        camera.keysDown.push(83);
        camera.keysLeft.push(65);
        camera.keysRight.push(68);
        camera.upperRadiusLimit = 50;
        camera.lowerRadiusLimit = 10;

        return scene;
    }
    var scene = createScene();
    engine.runRenderLoop(function(){
        scene.render();
    });
});