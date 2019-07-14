import './styles/index.css';
import Teris from './controller';
import { BOARD_WIDTH, BOARD_HEIGHT } from './const';

const $canvas = document.getElementById('board');
new Teris($canvas, {
    board: {
        width: BOARD_WIDTH,
        height: BOARD_HEIGHT
    }
});