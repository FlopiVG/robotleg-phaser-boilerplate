import { injectable } from '@robotlegsjs/core'

@injectable()
export class GameModel {
  public robotlegsScore: number

  constructor () {
    this.clear()
  }

  public clear (): void {
    this.robotlegsScore = 0
  }
}
