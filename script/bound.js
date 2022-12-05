/** @type {HTMLCanvasElement} */

class bound {
    constructor(xPosition, yPosition, width, height, fillColor, strokeColor) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.width = width;
        this.height = height;
        this.fillColor = fillColor;
        this.strokeColor = strokeColor;
    }

    draw = () => {
        ctx.beginPath();
        ctx.lineWidth = .5
        ctx.fillStyle = this.fillColor;
        ctx.strokeStyle = this.strokeColor;
        ctx.fillRect(this.xPosition, this.yPosition, this.width, this.height);
        ctx.strokeRect(this.xPosition, this.yPosition, this.width, this.height);
    }

    update = () => {
        this.draw();
    }
}