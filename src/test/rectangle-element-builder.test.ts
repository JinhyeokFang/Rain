import RectangleElementBuilder from '../element-builder'

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
        const element = new ElementBuilder()
            .build();

        expect(element.id).toEqual(0);
        expect(element.getPosition()).toEqual({ x: 0, y: 0 });
        expect(element.getWidth()).toEqual(1);
        expect(element.getHeight()).toEqual(1);
    });
});
