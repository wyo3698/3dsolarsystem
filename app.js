window.addEventListener('DOMContentLoaded', function(){
    var canvas = document.getElementById('canvas');
    var engine = new BABYLON.Engine(canvas, true);
    var createScene = function(){

        var scene = new BABYLON.Scene(engine);

        //Skybox
        var skybox = BABYLON.Mesh.CreateBox("skyBox", 100.0, scene);
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
        earthMaterial.diffuseTexture = new BABYLON.Texture("textures/earth1.jpg", scene);
        earthMaterial.specularColor = new BABYLON.Color3(0,0,0);
        earth.material = earthMaterial;

        //Light
        var light = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(9.78,-13.022,36.5), new BABYLON.Vector3(-9.78,+13.022,-36.5), BABYLON.Tools.ToRadians(180), 0.01, scene);
        light.intensity = 1;

        var light1 = new BABYLON.SpotLight("spotLight1", new BABYLON.Vector3(-8.47,15.04,-42.15), new BABYLON.Vector3(8.47,-15.04,42.15), BABYLON.Tools.ToRadians(270), 0.1, scene);
        light1.intensity = 0.1;

        var light2 = new BABYLON.SpotLight("spotLight1", new BABYLON.Vector3(-11.29,11.28,-42.15), new BABYLON.Vector3(11.29,-11.28,42.15), BABYLON.Tools.ToRadians(270), 0.1, scene);
        light2.intensity = 0.1;

        var light3 = new BABYLON.SpotLight("spotLight1", new BABYLON.Vector3(-11.29,15.04,-31.6), new BABYLON.Vector3(11.29,-15.04,31.6), BABYLON.Tools.ToRadians(270), 0.1, scene);
        light3.intensity = 0.1;

        
        
        

        // var mat = new BABYLON.StandardMaterial("", scene);



        // var boxcolor = new BABYLON.Color4(1,1,1,1);

        // var box = BABYLON.MeshBuilder.CreateTiledBox("Box",{height:0.5, width:10.0, depth: 10.0, faceColors: boxcolor},scene);
        // var box2 = BABYLON.Mesh.CreateBox("Box2",4.0,scene);
        
        //Camera
        var camera = new BABYLON.ArcRotateCamera('arcCamera', BABYLON.Tools.ToRadians(-80), BABYLON.Tools.ToRadians(65), 40.0, earth.position, scene);
        camera.attachControl(canvas, true);
        camera.keysUp.push(87);
        camera.keysDown.push(83);
        camera.keysLeft.push(65);
        camera.keysRight.push(68);
        camera.upperRadiusLimit = 50;
        camera.lowerRadiusLimit = 10;
        
        // var light = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(0,10,0), scene);
        // light.parent = camera;
        // light.diffuse = new BABYLON.Color3(1,1,1);

        // scene.actionManager = new BABYLON.ActionManager(scene);
        // scene.actionManager.registerAction(
        //     new BABYLON.ExecuteCodeAction({
        //         trigger: BABYLON.ActionManager.OnKeyUpTrigger, parameter: " "},
        //     function(){
        //         light.setEnabled(!light.isEnabled());
        //     }));

        // var light = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(0,10,0), new BABYLON.Vector3(0,-1,0), BABYLON.Tools.ToRadians(45), 0.1, scene);


        // var material = new BABYLON.StandardMaterial("material1", scene);
        // this.material.diffuseTexture = new BABYLON.Texture("textures/earth.jpg", scene);
        // material.wireframe = true;
        // material.diffuseColor = BABYLON.Color3.Blue();
        // material.emissiveColor = BABYLON.Color3.Red();
        // material.specularColor = BABYLON.Color3.Red();
        // material.alpha = 0.9;
        // world.material = material;

        return scene;
    }
    var scene = createScene();
    engine.runRenderLoop(function(){
        // var light = scene.getLightByName("pointLight");
        // light.diffuse.g += 0.01;
        // light.diffuse.b += 0.01;
        // var light = scene.getLightByName("spotLight");
        // light.position.y -= 0.01;
        // var material = scene.getMeshByName("Box").material;
        // material.alpha -= 0.01;
        // if (material.alpha <=0) {
        //     material.alpha = 1;
        // }
        scene.render();
    });
});