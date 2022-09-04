import RectangleElement from '../rectangle-element'

describe('an rectangle element has its width and height', () => {
    it('an rectangle element has getWidth()', () => {
        const element = new RectangleElement(0, { x: 0, y: 0 }, 10, 20);

        expect(element.getWidth()).toBe(10);
    });
    it('an rectangle element has getHeight()', () => {
        const element = new RectangleElement(0, { x: 0, y: 0 }, 10, 20);

        expect(element.getHeight()).toBe(20);
    });
    it('an rectangle element has setWidth()', () => {
        const element = new RectangleElement(0, { x: 0, y: 0 }, 10, 20);
        element.setWidth(30);

        expect(element.getWidth()).toBe(30);
    });
    it('an rectangle element has setHeight()', () => {
        const element = new RectangleElement(0, { x: 0, y: 0 }, 10, 20);
        element.setHeight(30);

        expect(element.getHeight()).toBe(30);
    });
    it('the rectangle element'+"'"+'s width must be more than 0', () => {
        expect(() => {
            new RectangleElement(0, { x: 0, y: 0 }, -10, 20);
        }).toThrowError('the rectangle element'+"'"+'s width must be equal or more than 0');
        expect(() => {
            new RectangleElement(0, { x: 0, y: 0 }, 0, 20);
        }).toThrowError('the rectangle element'+"'"+'s width must be equal or more than 0');
        expect(() => {
            new RectangleElement(0, { x: 0, y: 0 }, 0, 0);
        }).toThrowError('the rectangle element'+"'"+'s width must be equal or more than 0');
        expect(() => {
            new RectangleElement(0, { x: 0, y: 0 }, 10, 20)
                .setWidth(-10);
        }).toThrowError('the rectangle element'+"'"+'s width must be equal or more than 0');
        expect(() => {
            new RectangleElement(0, { x: 0, y: 0 }, 10, 20)
                .setWidth(0);
        }).toThrowError('the rectangle element'+"'"+'s width must be equal or more than 0');
    });
    it('the rectangle element'+"'"+'s height must be more than 0', () => {
        expect(() => {
            new RectangleElement(0, { x: 0, y: 0 }, 10, -20);
        }).toThrowError('the rectangle element'+"'"+'s height must be equal or more than 0');
        expect(() => {
            new RectangleElement(0, { x: 0, y: 0 }, 10, 0);
        }).toThrowError('the rectangle element'+"'"+'s height must be equal or more than 0');
        expect(() => {
            new RectangleElement(0, { x: 0, y: 0 }, 0, 0);
        }).toThrowError('the rectangle element'+"'"+'s height must be equal or more than 0');
        expect(() => {
            new RectangleElement(0, { x: 0, y: 0 }, 10, 20)
                .setHeight(-20);
        }).toThrowError('the rectangle element'+"'"+'s height must be equal or more than 0');
        expect(() => {
            new RectangleElement(0, { x: 0, y: 0 }, 10, 20)
                .setHeight(0);
        }).toThrowError('the rectangle element'+"'"+'s height must be equal or more than 0');
    });
});
