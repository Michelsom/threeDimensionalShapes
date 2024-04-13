

import { Renderer, THREE } from 'expo-three';

export const useViewModelBoxScene = () => {

  const createScene = () => {
    const scene = new THREE.Scene();
    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(10, 10, 10);
    light.castShadow = true;
    scene.add(light);
    return scene;
  };
  const createCamera = (gl: WebGLRenderingContext): THREE.PerspectiveCamera => {
    return new THREE.PerspectiveCamera(
      75,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      0.1,
      1000,
    );
  };

  const createRenderer = (gl: WebGLRenderingContext): Renderer => {
    const renderer = new Renderer({ gl });
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
    renderer.shadowMap.enabled = true;
    return renderer;
  };

  const createGeometry = (shapeType: string): THREE.BufferGeometry => {
    switch (shapeType) {
      case 'cube':
        return new THREE.BoxGeometry();
      case 'cone':
        return new THREE.ConeGeometry();
      case 'dodecahedron':
        return new THREE.DodecahedronGeometry();
      default:
        return new THREE.BoxGeometry();
    }
  };

  const createMaterial = (color: string, wireFrame: boolean) => {
    return new THREE.MeshBasicMaterial({
      color: color,
      aoMapIntensity: 0.2,
      shadowSide: THREE.FrontSide,
      transparent: true,
      fog: true,
      wireframe: wireFrame


    });
  };
  const createMesh = (geometry, material) => {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
  };

  const animate = (cube: THREE.Mesh, rotations: number, renderer: Renderer, scene: THREE.Scene, camera: THREE.Camera, gl: WebGLRenderingContext): void => {
    requestAnimationFrame(() => animate(cube, rotations, renderer, scene, camera, gl));
    cube.rotation.x += 0.0 + rotations;
    cube.rotation.y += 0.0 + rotations;
    cube.rotation.z += 0.0 + rotations;
    renderer.render(scene, camera);
    gl.endFrameEXP();
  };

  const _onGLContextCreate = async (gl: WebGLRenderingContext, shapeType: string, color: string | THREE.Color, rotations: number, wireFrame: boolean): Promise<void> => {
    const scene = createScene();
    const camera = createCamera(gl);
    const renderer = createRenderer(gl);
    const geometry = createGeometry(shapeType);
    const material = createMaterial(color, wireFrame);
    const cube = createMesh(geometry, material);

    scene.add(cube);
    camera.position.z = 3.5;

    animate(cube, rotations, renderer, scene, camera, gl);
  };

  return {
    createGeometry,
    _onGLContextCreate,
  };
};

