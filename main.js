import './style.css'
import items from './items'
const app = document.querySelector('#app')

class Canvas {
    constructor(app, width, height) {
        this.rootEl = app
        this.width = width
        this.height = height
    }
    create = () => {
        this.el = document.createElement('canvas')
        this.el.width = this.width
        this.el.height = this.height
        this.rootEl.appendChild(this.el)
        this.ctx = this.el.getContext('2d')
    }
}
class Star extends Canvas{
    constructor(ctx) {
        super()
        this.ctx = ctx
    }
    draw = ({offsetX, offsetY, color}) => {
        let r = Math.PI / 2 * 3
        const obj = {x: offsetX, y: offsetY}
        this.ctx.fillStyle = color
        this.ctx.beginPath()
        this.ctx.moveTo(offsetX, offsetY - 100)

        for (let i = 0; i < 5; i++) {
            [100, 40].forEach(item => {
                obj.x = offsetX + Math.cos(r) * item
                obj.y = offsetY + Math.sin(r) * item
                this.ctx.lineTo(obj.x, obj.y)
                r += Math.PI / 5
            })
        }
        this.ctx.fill()
    }
}

const MainCanvas = new Canvas(app, 600, 600)
const SecondCanvas = new Canvas(app, 600, 50)
MainCanvas.create()
SecondCanvas.create()


items.forEach(item => new Star(MainCanvas.ctx).draw(item))

MainCanvas.el.addEventListener('click', (e) => {
    const img_data = MainCanvas.ctx.getImageData(e.offsetX, e.offsetY, 1, 1)
    SecondCanvas.el.style.backgroundColor = `rgba(${img_data.data.join(',')})`
})
