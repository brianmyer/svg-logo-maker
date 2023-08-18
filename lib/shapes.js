//Parent class with common properties
class Shape {
    constructor(text, color, fill){
        // if statements for character length and color input
        this.text = text
        this.color = color
        this.fill = fill
    }
    setText() {
        return this.text
    }
}
// let example = new Shape('hello')
// console.log(example)
// console.log(example.setText())
// console.log(example.text)

class Circle extends Shape {
    constructor(text, color, fill){
        super(text, color, fill)
    }
    render() {
    return `<circle cx="150" cy="100" r="80" fill=${this.fill} />

<text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.color}>${this.text}</text>`
    }
}

// let example2 = new Circle('Hello world', 'white', 'blue')
// console.log(example2)
// console.log(example2.render())

class Square extends Shape {
    constructor(text, color, fill){
        super(text, color, fill)
    }
    render() {
        return `<rect width="100%" height="100%" fill=${this.fill} />

<text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.color}>${this.text}</text>`
        }
}

// let example3 = new Square('Goodbye world', 'black', 'green')
// console.log(example3)
// console.log(example3.render())

class Triangle extends Shape {
    constructor(text, color, fill){
        super(text, color, fill)
    }
    render() {
        return `<polygon points="0, 200 150, 0 300, 200" fill=${this.fill} />

<text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.color}>${this.text}</text>`
    }
}

let example4 = new Triangle('Hello', 'yellow', 'purple')
console.log(example4)
console.log(example4.render())