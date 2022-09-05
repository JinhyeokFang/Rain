import RectangleElementBuilder from '../rectangle-element-builder'

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
