import { SceneMediator } from '@robotlegsjs/phaser'
import { Boot } from '../scenes/Boot'
import { injectable } from '@robotlegsjs/core'

@injectable()
export class BootMediator extends SceneMediator<Boot> {
  public initialize (): void {
    console.log('BootMediator: initialize')
  }

  public destroy (): void {
    console.log('BootMediator: destroy')
  }
}
