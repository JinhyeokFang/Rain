import ElementBuilder from "../bases/element-builder";

describe('an element has 2 dimensional coordinate', () => {
    it('an element has getPosition()', () => {
        const element = new ElementBuilder()
            .build();
        expect(element.getPosition()).toEqual({ x: 0, y: 0 });
    });
    it('an element has setPosition()', () => {
        const element = new ElementBuilder()
            .build();
        element.setPosition({ x: 3, y: 3 });

        expect(element.getPosition()).toEqual({ x: 3, y: 3 });
    });
    it('move an element by 2', () => {
        const element = new ElementBuilder()
            .build();
        element.move({ x: 2, y: 2 });

        expect(element.getPosition()).toEqual({ x: 2, y: 2 });
    });
    it('move an element by -2', () => {
        const element = new ElementBuilder()
            .build();
        element.move({ x: -2, y: -2 });

        expect(element.getPosition()).toEqual({ x: -2, y: -2 });
    });
});

describe('an element has own id', () => {
    it('an element has id property', () => {
        const element = new ElementBuilder()
            .setId(3)
            .build();

        expect(element.id).toEqual(3);
    });
});
