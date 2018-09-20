import { IContext, Context, MVCSBundle } from '@robotlegsjs/core'
import { ContextSceneManager, PhaserBundle } from '@robotlegsjs/phaser'
import { SceneMediatorConfig } from './config/SceneMediatorConfig'
import { GameConfig } from './config/GameConfig'
import { SceneKey } from './constants/SceneKeys'
import { Boot } from './scenes/Boot'
import { Preload } from './scenes/Preload'
import { Main } from './scenes/Main'

export class Game extends Phaser.Game {
  private _context: IContext

  constructor () {
    super({
      type: Phaser.CANVAS,
      width: 800,
      height: 600,
      backgroundColor: '#010101',
      parent: 'phaser-example'
    })

    this._context = new Context()

    this._context
      .install(MVCSBundle, PhaserBundle)
      .configure(new ContextSceneManager(this.scene))
      .configure(SceneMediatorConfig)
      .configure(GameConfig)
      .initialize()

    this.scene.add(SceneKey.BOOT, new Boot())
    this.scene.add(SceneKey.PRELOAD, new Preload())
    this.scene.add(SceneKey.MAIN, new Main())

    this.scene.start(SceneKey.BOOT)
  }
}
