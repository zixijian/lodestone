import * as THREE from 'three';

export enum ViewMode {
  ORBIT = 'ORBIT',
  FREE_FLY = 'FREE_FLY',
  SLICER = 'SLICER'
}

export class ViewController {
  private camera: THREE.PerspectiveCamera;
  private mode: ViewMode = ViewMode.ORBIT;

  constructor(camera: THREE.PerspectiveCamera) {
    this.camera = camera;
  }

  public setMode(mode: ViewMode): void {
    this.mode = mode;
  }

  public getMode(): ViewMode {
    return this.mode;
  }

  public frameBoundingBox(min: THREE.Vector3, max: THREE.Vector3, controlsTarget?: THREE.Vector3): void {
    const center = new THREE.Vector3().addVectors(min, max).multiplyScalar(0.5);
    const size = new THREE.Vector3().subVectors(max, min);
    const maxDim = Math.max(size.x, size.y, size.z, 1);

    const fov = (this.camera.fov * Math.PI) / 180;
    const cameraDistance = Math.abs(maxDim / (2 * Math.tan(fov / 2))) * 1.5;

    this.camera.position.set(center.x + cameraDistance, center.y + cameraDistance * 0.8, center.z + cameraDistance);
    this.camera.lookAt(center);

    if (controlsTarget) {
      controlsTarget.copy(center);
    }
  }
}
