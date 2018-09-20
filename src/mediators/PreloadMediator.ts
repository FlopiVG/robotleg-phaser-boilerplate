import { injectable } from '@robotlegsjs/core'
import { Preload } from '../scenes/Preload'
import { SceneMediator } from '@robotlegsjs/phaser'

@injectable()
export class PreloadMediator extends SceneMediator<Preload> {
  public initialize (): void {
    console.log('PreloadMediator: initialize')
  }

  public destroy (): void {
    console.log('PreloadMediator: destroy')
  }
}
