import ElementBuilder from "../bases/element-builder";

describe('an element builder has build methods', () => {
    it('an element builder has property setter', () => {
        const element = new ElementBuilder()
            .setId(3)
            .setPosition({ x: 2, y: 2 })
            .build();

        expect(element.id).toEqual(3);
        expect(element.getPosition()).toEqual({ x: 2, y: 2 });
    });
    it ('an element builder'+"'"+'s properties have default value', () => {
        const element = new ElementBuilder()
            .build();

        expect(element.id).toEqual(0);
        expect(element.getPosition()).toEqual({ x: 0, y: 0 });
    });
});


describe('an element builder has getters', () => {
    it('an element builder has property getter', () => {
        const elementBuilder = new ElementBuilder()
            .setId(3)
            .setPosition({ x: 2, y: 2 });

        expect(elementBuilder.getId()).toEqual(3);
        expect(elementBuilder.getPosition()).toEqual({ x: 2, y: 2 });
    });
});
