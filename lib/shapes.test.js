const { Circle, Triangle, Square } = require('./shapes')

describe("Circle Tests", () => {
    test('will the render function return the svg string', () => {
        const shape = new Circle('a', 'b', 'c')
        expect(shape.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="c" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="b">a</text>

</svg>`)
    })
})

describe("Square Tests", () => {
    test('will the render function return the svg string', () => {
        const shape = new Square('a', 'b', 'c')
        expect(shape.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <rect x="90" y="40" width="120" height="120" fill="c" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="b">a</text>

</svg>`)
    })
})

describe("Triangle Tests", () => {
    test('will the render function return the svg string', () => {
        const shape = new Triangle('a', 'b', 'c')
        expect(shape.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <polygon points="150, 18 244, 182 56, 182" fill="c" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="b">a</text>

</svg>`)
    })
})