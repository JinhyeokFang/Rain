import Element from '../element';

describe('Element has 2 dimensional coordinate', () => {
    it('element has getPosition()', () => {
        const element = new Element({ x: 0, y: 0 });
        expect(element.getPosition()).toBe({ x: 0, y: 0 });
    });
    it('element has setPosition()', () => {
        const element = new Element({ x: 0, y: 0 });
        element.setPosition({ x: 3, y: 3 });

        expect(element.getPosition()).toBe({ x: 3, y: 3 });
    })
    it('element has move()', () => {
        const element = new Element({ x: 0, y: 0 });
        element.move({ x: 2, y: 2 });

        expect(element.getPosition()).toBe({ x: 2, y: 2 });
    })
})