export default class GameCanvas {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        console.log('canvas', this.width, this.height);
        this.backColor = 'grey';

    }

    loadGame(game) {
        this.game = game;
        let { matrix } = this.game;
        this.cellWidth = this.width / matrix[0].length;
        this.cellHeight = this.height / matrix.length;
        this.renderBackground();
    }

    renderBackground() {
        console.log('render bg');
        let { matrix } = this.game;
        matrix.forEach((row, rowIndex) => {
            row.forEach((col, colIndex) => {
                this.context.fillStyle = this.backColor;
                this.context.fillRect(colIndex * this.cellWidth, rowIndex * this.cellHeight, this.cellWidth, this.cellHeight);

                this.context.strokeStyle = 'red';
                this.context.strokeRect(colIndex * this.cellWidth, rowIndex * this.cellHeight, this.cellWidth, this.cellHeight);
            });
        });
    }
}