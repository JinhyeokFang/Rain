import RectangleElementBuilder from '../rectangle-element-builder'

describe('an element builder has build methods', () => {
    it('an element builder has property setter', () => {
        const element = new RectangleElementBuilder()
            .setId(3)
            .setPosition({ x: 2, y: 2 })
            .setWidth(30)
            .setHeight(20)
            .build();

        expect(element.id).toEqual(3);
        expect(element.getPosition()).toEqual({ x: 2, y: 2 });
        expect(element.getWidth()).toEqual(30);
        expect(element.getHeight()).toEqual(20);
    });
    it ('an element builder'+"'"+'s properties have default value', () => {
        const element = new RectangleElementBuilder()
            .build();

        expect(element.id).toEqual(0);
        expect(element.getPosition()).toEqual({ x: 0, y: 0 });
        expect(element.getWidth()).toEqual(1);
        expect(element.getHeight()).toEqual(1);
    });
});

describe('width and height must be more than 0', () => {
    it('the rectangle element'+"'"+'s width must be more than 0', () => {
        expect(() => {
            new RectangleElementBuilder()
                .setWidth(-20);
        }).toThrowError('the rectangle element'+"'"+'s width must be equal or more than 0');
        expect(() => {
            new RectangleElementBuilder()
                .setWidth(0);
        }).toThrowError('the rectangle element'+"'"+'s width must be equal or more than 0');
    });
    it('the rectangle element'+"'"+'s height must be more than 0', () => {
        expect(() => {
            new RectangleElementBuilder()
                .setHeight(-20);
        }).toThrowError('the rectangle element'+"'"+'s height must be equal or more than 0');
        expect(() => {
            new RectangleElementBuilder()
                .setHeight(0);
        }).toThrowError('the rectangle element'+"'"+'s height must be equal or more than 0');
    });
})