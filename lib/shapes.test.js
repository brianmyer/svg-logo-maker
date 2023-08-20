const Shape = require('../lib/shapes');

describe('Shape', () => {
    describe('Circle', () => {
        // Makes sure circle instantiates
        describe('Instantiate', () => {
            it('should be an instance of Circle class', () => {
              const circle = new Shape.Circle();
              expect(circle).toBeInstanceOf(Shape.Circle);
            });
        });
        // Makes sure text is entered correctly
        describe('Initialize text', () => {
            it('should set text correctly', () => {
                const logoText = 'BRY';
                const circle = new Shape.Circle(logoText);
                expect(circle.text).toBe(logoText);
            });
        });
        // Makes sure color is entered correctly
        describe('Initialize text color', () => {
            it('should set text color correctly', () => {
                const logoColor = 'brown';
                const circle = new Shape.Circle('', logoColor);
                expect(circle.color).toBe(logoColor);
            });
        });
        // Makes sure fill is entered correctly
        describe('Initialize fill color', () => {
            it('should set fill color correctly', () => {
                const logoFill = 'pink';
                const circle = new Shape.Circle('', '', logoFill);
                expect(circle.fill).toBe(logoFill);
            });
        });

    })
    describe('Square', () => {
        // Makes sure square instantiates
        describe('Instantiate', () => {
            it('should be an instance of Square class', () => {
              const square = new Shape.Square();
              expect(square).toBeInstanceOf(Shape.Square);
            });
        });
        // Makes sure text is entered correctly
        describe('Initialize text', () => {
            it('should set text correctly', () => {
                const logoText = 'BRY';
                const square = new Shape.Square(logoText);
                expect(square.text).toBe(logoText);
            });
        });
        // Makes sure color is entered correctly
        describe('Initialize text color', () => {
            it('should set text color correctly', () => {
                const logoColor = 'brown';
                const square = new Shape.Square('', logoColor);
                expect(square.color).toBe(logoColor);
            });
        });
        // Makes sure fill is entered correctly
        describe('Initialize fill color', () => {
            it('should set fill color correctly', () => {
                const logoFill = 'pink';
                const square = new Shape.Square('', '', logoFill);
                expect(square.fill).toBe(logoFill);
            });
        });
        
    })
    describe('Triangle', () => {
        // Makes sure triangle instantiates
        describe('Instantiate', () => {
            it('should be an instance of Triangle class', () => {
              const triangle = new Shape.Triangle();
              expect(triangle).toBeInstanceOf(Shape.Triangle);
            });
        });
        // Makes sure text is entered correctly
        describe('Initialize text', () => {
            it('should set text correctly', () => {
                const logoText = 'BRY';
                const triangle = new Shape.Triangle(logoText);
                expect(triangle.text).toBe(logoText);
            });
        });
        // Makes sure color is entered correctly
        describe('Initialize text color', () => {
            it('should set text color correctly', () => {
                const logoColor = 'brown';
                const triangle = new Shape.Triangle('', logoColor);
                expect(triangle.color).toBe(logoColor);
            });
        });
        // Makes sure fill is entered correctly
        describe('Initialize fill color', () => {
            it('should set fill color correctly', () => {
                const logoFill = 'pink';
                const triangle = new Shape.Triangle('', '', logoFill);
                expect(triangle.fill).toBe(logoFill);
            });
        });
        
    })
});