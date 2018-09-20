import { BaseScene } from './BaseScene'
import { SceneKey } from '../constants/SceneKeys'

export class Preload extends BaseScene {
  constructor () {
    super(SceneKey.PRELOAD)
  }

  public preload (): void {
    this.load.image('koreez', 'assets/koreez.jpg')
    this.load.image('robotlegs', 'assets/robotlegs.png')
  }

  public create (): void {
    super.create()

    this.scene.start(SceneKey.MAIN)
  }
}
