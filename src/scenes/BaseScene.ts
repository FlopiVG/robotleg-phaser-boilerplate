export abstract class BaseScene extends Phaser.Scene {
  constructor (scene: string) {
    super({ key: scene })
  }

  public preload (): void {
    console.log(this + ': preload')
  }

  public init (): void {
    console.log(this + ': init')
  }

  public create (): void {
    console.log(this + ': create')
  }

  public shutdown (): void {
    console.log(this + ': shutdown')
  }
}
