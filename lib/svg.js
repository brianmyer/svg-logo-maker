let shapes = require('./shapes')

class SVG extends shapes.Shape {
    constructor(text, color, fill, shape) {
        super(text, color, fill)
        this.shape = shape
    }
    createShape() {
        let logoShape;
        if (this.shape === 'circle') {
            logoShape = new shapes.Circle(this.text, this.color, this.fill)
        } else if (this.shape === 'square') {
            logoShape = new shapes.Square(this.text, this.color, this.fill)
        } else {
            logoShape = new shapes.Triangle(this.text, this.color, this.fill)
        }
        return logoShape.render()
    }
    renderHTML() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
     ${this.createShape()}
   
   </svg>`
    }
}

// let example = new SVG('SVG', 'red', 'purple', 'square')
// console.log(example.renderHTML())

module.exports = SVG