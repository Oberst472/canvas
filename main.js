import './style.css'
import items from './items'
const mainCanvas = document.querySelector('[data-name=js-m-c]')
const secondCanvas = document.querySelector('[data-name=js-s-c]')

const ctx = mainCanvas.getContext('2d')
mainCanvas.width = 600
mainCanvas.height = 600

class Star {
    constructor(ctx) {
        this.ctx = ctx
    }
    draw = ({offsetX, offsetY, color}) => {
        let rot = Math.PI / 2 * 3
        let x = offsetX
        let y = offsetY
        let step = Math.PI / 5
        const el = new Path2D()
        this.ctx.fillStyle = color
        this.ctx.beginPath()
        this.ctx.moveTo(offsetX, offsetY - 100)
        el.moveTo(offsetX, offsetY - 100)

        for (let i = 0; i < 5; i++) {
            x = offsetX + Math.cos(rot) * 100
            y = offsetY + Math.sin(rot) * 100
            this.ctx.lineTo(x, y)
            rot += step
            el.lineTo(x, y)

            x = offsetX + Math.cos(rot) * 40
            y = offsetY + Math.sin(rot) * 40
            this.ctx.lineTo(x, y)
            el.lineTo(x, y)
            rot += step
        }
        this.ctx.lineTo(offsetX, offsetY - 100)
        this.ctx.closePath()
        this.ctx.lineWidth = 5
        this.ctx.strokeStyle = color
        this.ctx.stroke()
        this.ctx.fill()
    }
}

items.forEach((item) => {
    new Star(ctx).draw(item)
})

mainCanvas.addEventListener('click', (e) => {
    const img_data = ctx.getImageData(e.offsetX, e.offsetY, 1, 1)
    secondCanvas.style.backgroundColor = `rgba(${img_data.data.join(',')})`
})
