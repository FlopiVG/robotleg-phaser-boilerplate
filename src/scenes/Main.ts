import { ScoreView } from '../views/ScoreViews'
import { SceneKey } from '../constants/SceneKeys'
import { BaseScene } from './BaseScene'

export class Main extends BaseScene {
  private scoreView: ScoreView

  constructor () {
    super(SceneKey.MAIN)
  }

  public create (): void {
    super.create()

    this.scoreView = new ScoreView(this)
    this.add.existing(this.scoreView)
    this.add.image(20, 30, 'koreez')
  }

  public addRobotlesgImgae (x: number, y: number, textureKey: string): void {
    const image: Phaser.GameObjects.Image = this.add.image(x, y, textureKey)
    image.setAngle(Math.floor(Math.random() * (360 + 1)))
  }
}
