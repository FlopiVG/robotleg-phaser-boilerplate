import { IConfig, injectable, inject } from "@robotlegsjs/core";
import { ISceneMediatorMap, IViewMediatorMap } from "@robotlegsjs/phaser";
import { Boot } from "../scenes/Boot";
import { BootMediator } from "../mediators/BootMediator";
import { Preload } from "../scenes/Preload";
import { PreloadMediator } from "../mediators/PreloadMediator";
import { MainMediator } from "../mediators/MainMediator";
import { Main } from "../scenes/Main";
import { ScoreView } from "../views/ScoreViews";
import { ScoreViewMediator } from "../mediators/ScoreViewMediator";

@injectable()
export class SceneMediatorConfig implements IConfig {
  @inject(ISceneMediatorMap)
  public sceneMediatorMap: ISceneMediatorMap;

  @inject(IViewMediatorMap)
  public viewMediatorMap: IViewMediatorMap;

  public configure(): void {
    this.mapSceneMediators();
    this.mapViewMediators();
  }

  private mapSceneMediators(): void {
    this.sceneMediatorMap.map(Boot).toMediator(BootMediator);
    this.sceneMediatorMap.map(Preload).toMediator(PreloadMediator);
    this.sceneMediatorMap.map(Main).toMediator(MainMediator);
  }

  private mapViewMediators(): void {
    this.viewMediatorMap.map(ScoreView).toMediator(ScoreViewMediator);
  }
}
