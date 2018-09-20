export class ScoreView extends Phaser.GameObjects.Container {
  public text: Phaser.GameObjects.Text

  constructor (
    scene: Phaser.Scene,
    x?: number,
    y?: number,
    children?: Phaser.GameObjects.GameObject[]
  ) {
    super(scene, x, y, children)
    this.text = this.scene.add
      .text(700, 10, 'Score: 0')
      .setFontSize(20)
      .setFontFamily('Arial')
  }

  public setText (value: number): void {
    this.text.setText(`Score : ${value}`)
  }
}
