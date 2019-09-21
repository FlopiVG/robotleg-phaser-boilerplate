import { BaseScene } from "./BaseScene";
import { SceneKey } from "../constants/SceneKeys";

export class Boot extends BaseScene {
  constructor() {
    super(SceneKey.BOOT);
  }

  public create(): void {
    super.create();

    this.scene.start(SceneKey.PRELOAD);
  }
}
