import {Renderer} from 'expo-three';
import * as THREE from 'three';
export const useViewModelScene = () => {
  const onGLContextCreate = async (gl: any) => {
    const {drawingBufferWidth: width, drawingBufferHeight: height} = gl;
    var scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.4, 1000);
    const renderer = new Renderer({gl});
    renderer.setSize(width, height);
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
      gl.endFrameEXP();
    };
    animate();
  };
  return {onGLContextCreate};
};
