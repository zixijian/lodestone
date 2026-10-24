import * as THREE from 'three';

export enum SliceAxis {
  X = 'X',
  Y = 'Y',
  Z = 'Z'
}

export class SlicerController {
  private clippingPlane: THREE.Plane;
  private currentLayer: number = 0;
  private currentAxis: SliceAxis = SliceAxis.Y;

  constructor(renderer: THREE.WebGLRenderer) {
    this.clippingPlane = new THREE.Plane(new THREE.Vector3(0, -1, 0), 1000);
    renderer.clippingPlanes = [this.clippingPlane];
    renderer.localClippingEnabled = true;
  }

  public getClippingPlane(): THREE.Plane {
    return this.clippingPlane;
  }

  public setAxis(axis: SliceAxis): void {
    this.currentAxis = axis;
    switch (axis) {
      case SliceAxis.X:
        this.clippingPlane.normal.set(-1, 0, 0);
        break;
      case SliceAxis.Y:
        this.clippingPlane.normal.set(0, -1, 0);
        break;
      case SliceAxis.Z:
        this.clippingPlane.normal.set(0, 0, -1);
        break;
    }
    this.updateConstant();
  }

  public setLayer(layer: number): void {
    this.currentLayer = layer;
    this.updateConstant();
  }

  private updateConstant(): void {
    // Add 0.5 offset to keep the current block layer visible
    this.clippingPlane.constant = this.currentLayer + 0.5;
  }
}
