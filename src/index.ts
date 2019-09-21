/// <reference path="../node_modules/@robotlegsjs/phaser/definitions/phaser.d.ts" />
import "reflect-metadata";

import { Game } from "./Game";

(window as any).initGame = (function() {
  let game: Game = new Game();
  (window as any).game = game;
})();

export default window;
