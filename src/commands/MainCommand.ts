import { injectable, ICommand, Event } from '@robotlegsjs/core'

@injectable()
export class MainCommand implements ICommand {
  public execute (event: Event): void {
    console.log(event.type, event.data)
  }
}
