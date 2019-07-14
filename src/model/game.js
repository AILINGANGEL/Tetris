import { CELL_TYPE } from '../const';
export default class Game {
    constructor(config = {}) {
        let { width, height } = config;
        this.width = width;
        this.height = height;
        this.matrix = new Array(this.height).fill(0).map(item => new Array(this.width).fill(CELL_TYPE.empty));
    }
}