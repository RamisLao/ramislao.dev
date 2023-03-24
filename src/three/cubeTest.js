
import * as THREE from 'three';

export function setupCubeScene(ref) {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    const canvas = document.querySelector('#container-three'); 
    const renderer = new THREE.WebGLRenderer({antialias: true, canvas});
    
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );

    const makeCubeInstance = (geometry, color, x) => {
        const material = new THREE.MeshPhongMaterial({color});
    
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
    
        cube.position.x = x;
        return cube;
    }

    var cubes = [
        makeCubeInstance(geometry, 0x44aa88, 0),
        makeCubeInstance(geometry, 0x8844aa, -2),
        makeCubeInstance(geometry, 0xaa8844, 2)
    ]

    camera.position.z = 5;

    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);

    const resizeRendererToDisplaySize = (renderer) => {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }

        return needResize;
    }

    const animate = () => {
        cubes.forEach((cube, ndx) => {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
        });

        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }
        
        renderer.render( scene, camera );

        requestAnimationFrame( animate );
    };

    requestAnimationFrame(animate);
}