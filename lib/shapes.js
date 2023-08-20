//Parent class with common properties
class Shape {
    constructor(text, color, fill){
        this.text = text
        this.color = color
        this.fill = fill
    }
}

class Circle extends Shape {
    constructor(text, color, fill){
        super(text, color, fill)
    }
    render() {
    return `<circle cx="150" cy="100" r="80" fill='${this.fill}' />

<text x="150" y="125" font-size="60" text-anchor="middle" fill='${this.color}'>${this.text}</text>`
    }
}

class Square extends Shape {
    constructor(text, color, fill){
        super(text, color, fill)
    }
    render() {
        return `<rect width="100%" height="100%" fill='${this.fill}' />

<text x="150" y="125" font-size="60" text-anchor="middle" fill='${this.color}'>${this.text}</text>`
        }
}

class Triangle extends Shape {
    constructor(text, color, fill){
        super(text, color, fill)
    }
    render() {
        return `<polygon points="0, 200 150, 0 300, 200" fill='${this.fill}' />

<text x="150" y="125" font-size="60" text-anchor="middle" fill='${this.color}'>${this.text}</text>`
    }
}


module.exports = {Shape, Circle, Square, Triangle}