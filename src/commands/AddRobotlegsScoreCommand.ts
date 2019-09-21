import {
  injectable,
  inject,
  ICommand,
  IEventDispatcher,
  Event
} from "@robotlegsjs/core";
import { GameModel } from "../models/GameModel";
import { MainEvent } from "../events/MainEvent";

@injectable()
export class AddRobotlegsScoreCommand implements ICommand {
  @inject(GameModel)
  private gameModel: GameModel;

  @inject(IEventDispatcher)
  private eventDispatcher: IEventDispatcher;

  public execute(event: Event): void {
    console.log(event.type, event.data);
    this.gameModel.robotlegsScore += 1;
    this.eventDispatcher.dispatchEvent(
      new MainEvent(MainEvent.ADDED_ROBOTLEGS_IMAGE)
    );
  }
}
