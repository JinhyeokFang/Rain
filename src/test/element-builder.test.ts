import Element from '../element';
import ElementBuilder from '../element-builder'

describe('an element builder has build methods', () => {
    it('an element builder has property setter', () => {
        const element: Element = new ElementBuilder()
            .setId(3)
            .setPosition({ x: 2, y: 2 })
            .build();

        expect(element.id).toEqual(3);
        expect(element.getPosition()).toEqual({ x: 2, y: 2 });
    });
    it ('an element builder'+"'"+'s properties have default value', () => {
        const element: Element = new ElementBuilder()
            .build();

        expect(element.id).toEqual(0);
        expect(element.getPosition()).toEqual({ x: 0, y: 0 });
    });
});
