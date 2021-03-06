import { injectable, inject } from "@robotlegsjs/core";
import { ViewMediator } from "@robotlegsjs/phaser";
import { ScoreView } from "../views/ScoreViews";
import { GameModel } from "../models/GameModel";
import { MainEvent } from "../events/MainEvent";

@injectable()
export class ScoreViewMediator extends ViewMediator<ScoreView> {
  @inject(GameModel)
  public gameModel: GameModel;

  public initialize(): void {
    console.log("PlayerViewMediator: initialize");
    console.log("score: " + this.gameModel.robotlegsScore);
    this.view.setText(0);
    this.addContextListener(
      MainEvent.ADDED_ROBOTLEGS_IMAGE,
      this.onRobotlegsImageAdded,
      this
    );
  }

  public destroy(): void {
    console.log("PlayerViewMediator: destroy");
  }

  private onRobotlegsImageAdded(): void {
    this.view.setText(this.gameModel.robotlegsScore);
  }
}
