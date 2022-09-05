import RectangleElementBuilder from "../rectangle-element-builder";

describe('an rectangle element has its width and height', () => {
    it('an rectangle element has getWidth()', () => {
        const element = new RectangleElementBuilder()
            .setWidth(10)
            .setHeight(20)
            .build();

        expect(element.getWidth()).toBe(10);
    });
    it('an rectangle element has getHeight()', () => {
        const element = new RectangleElementBuilder()
            .setWidth(10)
            .setHeight(20)
            .build();

        expect(element.getHeight()).toBe(20);
    });
    it('an rectangle element has setWidth()', () => {
        const element = new RectangleElementBuilder()
            .setWidth(10)
            .setHeight(20)
            .build();
        element.setWidth(30);

        expect(element.getWidth()).toBe(30);
    });
    it('an rectangle element has setHeight()', () => {
        const element = new RectangleElementBuilder()
            .setWidth(10)
            .setHeight(20)
            .build();
        element.setHeight(30);

        expect(element.getHeight()).toBe(30);
    });
});

describe('width and height must be more than 0', () => {
    it('the rectangle element'+"'"+'s width must be more than 0', () => {
        expect(() => {
            new RectangleElementBuilder()
                .setWidth(20)
                .build()
                .setWidth(-20);
        }).toThrowError('the rectangle element'+"'"+'s width must be equal or more than 0');
        expect(() => {
            new RectangleElementBuilder()
                .setWidth(20)
                .build()
                .setWidth(0);
        }).toThrowError('the rectangle element'+"'"+'s width must be equal or more than 0');
    });
    it('the rectangle element'+"'"+'s height must be more than 0', () => {
        expect(() => {
            new RectangleElementBuilder()
                .setHeight(20)
                .build()
                .setHeight(-20);
        }).toThrowError('the rectangle element'+"'"+'s height must be equal or more than 0');
        expect(() => {
            new RectangleElementBuilder()
                .setHeight(20)
                .build()
                .setHeight(0);
        }).toThrowError('the rectangle element'+"'"+'s height must be equal or more than 0');
    });
})
