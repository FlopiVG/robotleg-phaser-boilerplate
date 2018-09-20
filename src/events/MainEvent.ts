import { Event } from '@robotlegsjs/core'

export class MainEvent extends Event {
  public static readonly GAME_START = 'game_start'
  public static readonly ADD_ROBOTLEGS_IMAGE: string = 'add_robotlegs_image'
  public static readonly ADDED_ROBOTLEGS_IMAGE: string =
    'added_robotlegs_images'
}
