import {
  injectable,
  IConfig,
  inject,
  IContext,
  IEventCommandMap
} from '@robotlegsjs/core'
import { MainEvent } from '../events/MainEvent'
import { MainCommand } from '../commands/MainCommand'
import { AddRobotlegsScoreCommand } from '../commands/AddRobotlegsScoreCommand'
import { GameModel } from '../models/GameModel'

@injectable()
export class GameConfig implements IConfig {
  @inject(IContext)
  public context: IContext

  @inject(IEventCommandMap)
  public commandMap: IEventCommandMap

  public configure (): void {
    this.mapCommands()
    // this.mapManager()
    this.mapModels()
  }

  private mapCommands (): void {
    this.commandMap.map(MainEvent.GAME_START).toCommand(MainCommand)
    this.commandMap
      .map(MainEvent.ADD_ROBOTLEGS_IMAGE)
      .toCommand(AddRobotlegsScoreCommand)
  }

  // private mapManager(): void {}

  private mapModels (): void {
    this.context.injector
      .bind(GameModel)
      .to(GameModel)
      .inSingletonScope()
  }
}
