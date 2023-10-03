let scene, camera, renderer, cube;

function init() {
    // Create a Scene
    scene = new THREE.Scene();

    // Create a Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a Renderer with a transparent background and append it to the #3d-asset div
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('3d-asset').appendChild(renderer.domElement);

    // Create a Geometry
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

   


    // Handle Window Resize
    window.addEventListener('resize', handleWindowResize, false);



    


    // Animation
    animate();
}

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

function handleWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}



// Initialize the Three.js Scene
init();
