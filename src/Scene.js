import React, {Component} from 'react';
import * as THREE from 'three';

class Scene extends Component {

  state = {}

  container = React.createRef();

  componentWillMount = () => {}

  animate = () => {
    requestAnimationFrame(this.animate);
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this
      .renderer
      .render(this.scene, this.camera)
  }

  componentDidMount = () => {
    this.setupScene();
    this.animate();
  }

  setupScene = () => {
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;
    // this.width = window.innerWidth; this.height = window.innerHeight;

    let VIEW_ANGLE = 45,
      ASPECT = this.width / this.height,
      NEAR = 0.1,
      FAR = 10000

    let renderer = new THREE.WebGLRenderer();

    let camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
    /*  */
    let geometry = new THREE.BoxGeometry(1, 1, 1);
    let material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    let cube = new THREE.Mesh(geometry, material);
    /*  */

    let scene = new THREE.Scene();
    scene.add(camera);
    scene.add(cube);
    camera.position.z = 20;

    renderer.setSize(this.width, this.height);

    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.cube = cube;

    this
      .container
      .appendChild(this.renderer.domElement);

  }

  componentWillUnmount = () => {}

  render() {
    const width = '100%';
    const height = '100%';
    return (
      <div
        ref={(container) => {
        this.container = container
      }}
        style={{
        width: width,
        height: height,
        position: 'absolute',
        overflow: 'hidden'
      }}></div>
    )
  }

}

export default Scene;