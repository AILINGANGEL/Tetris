import Game from '../model/game';
import GameCanvas from '../view/canvas';

export default class Teris {
    constructor(canvas, config) {
        if (!canvas) throw new Error('canvas cannot be empty');
        let { width, height } = config.board;
        this.game = new Game({ width, height });
        this.gameCanvas = new GameCanvas(canvas);
        this.gameCanvas.loadGame(this.game);
    }
}