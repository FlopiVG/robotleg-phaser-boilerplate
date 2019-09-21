import { SceneMediator } from "@robotlegsjs/phaser";
import { Main } from "../scenes/Main";
import { injectable, inject } from "@robotlegsjs/core";
import { GameModel } from "../models/GameModel";
import { MainEvent } from "../events/MainEvent";

@injectable()
export class MainMediator extends SceneMediator<Main> {
  @inject(GameModel)
  public gameModel: GameModel;

  public initialize(): void {
    console.log("MainMediator: initialize");
    console.log("robotlegsCount: " + this.gameModel.robotlegsScore);

    this.dispatch(
      new MainEvent(MainEvent.GAME_START, true, false, { data: this.gameModel })
    );

    this.scene.input.on("pointerdown", this.onPointerdown, this);
  }

  public destroy(): void {
    console.log("MainMediator: destroy");
  }

  private onPointerdown(pointer: Phaser.Geom.Point): void {
    this.scene.addRobotlesgImgae(pointer.x, pointer.y, "robotlegs");
    this.dispatch(new MainEvent(MainEvent.ADD_ROBOTLEGS_IMAGE));
  }
}
