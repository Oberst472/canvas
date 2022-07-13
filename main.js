import './style.css'

const mainCanvas = document.querySelector('[data-name=js-m-c]')
const secondCanvas = document.querySelector('[data-name=js-s-c]')

const ctx = mainCanvas.getContext("2d")
mainCanvas.width = 600
mainCanvas.height = 600

class Star {
    constructor({ctx, color, offsetX, offsetY}) {
        this.ctx = ctx
        this.color = color
        this.offsetX = offsetX
        this.offsetY = offsetY
    }
    draw = () => {
        console.log(7);
        console.log(ctx);
        console.log(this.ctx);
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.moveTo(103 + this.offsetX, -5 + this.offsetY);
        this.ctx.lineTo(136 + this.offsetX, 65 + this.offsetY);
        this.ctx.lineTo(213 + this.offsetX, 73.3 + this.offsetY);
        this.ctx.lineTo(157 + this.offsetX, 126 + this.offsetY);
        this.ctx.lineTo(170 + this.offsetX, 200 + this.offsetY);
        this.ctx.lineTo(103 + this.offsetX, 165 + this.offsetY);
        this.ctx.lineTo(36.2 + this.offsetX, 200 + this.offsetY);
        this.ctx.lineTo(50 + this.offsetX, 126 + this.offsetY);
        this.ctx.lineTo(-4 + this.offsetX, 73 + this.offsetY);
        this.ctx.lineTo(70 + this.offsetX, 63 + this.offsetY);
        this.ctx.lineTo(103 + this.offsetX, -5 + this.offsetY);
        this.ctx.closePath();
        this.ctx.fill();
    }
}

const star1 = new Star({ctx, color: 'blue', offsetX: 0, offsetY: 4})
star1.draw()

const star2 = new Star({ctx, color: 'green', offsetX: 206, offsetY: 4})
star2.draw()
