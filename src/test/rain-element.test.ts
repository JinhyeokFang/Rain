import RainElementBuilder from "../builders/rain-element-builder";
import color from "../interfaces/color";
import coordinate from "../interfaces/coordinate";
import Renderer from "../interfaces/renderer";

describe('a rain element has its velocity and acceleration', () => {
    it('a rain element has move method', () => {
        const rainElement = new RainElementBuilder()
            .setVelocity(0)
            .setAcceleration(1)
            .build();
        
        rainElement.moveByVelocity(6);
        expect(rainElement.getVelocity()).toEqual(6);
        expect(rainElement.getPosition().y).toEqual(18);
    });
    it('a rain element has property setters', () => {
        const rainElement = new RainElementBuilder()
            .build();
        
        rainElement.setAcceleration(100);
        rainElement.setVelocity(100);
        expect(rainElement.getVelocity()).toEqual(100);
        expect(rainElement.getAcceleration()).toEqual(100);
    });
});

describe('a rain element has its color', () => {
    it('a rain element'+"'"+'s color is #36afff', () => {
        const rainElement = new RainElementBuilder()
            .build();
        
        expect(rainElement.color).toEqual({
            red: 54,
            green: 175,
            blue: 255,
            alpha: 100
        });
    })
});

describe('a rain element has render methods', () => {
    it('render method must call setColor and drawLine', () => {
        const mockRenderer = new MockRenderer();
        new RainElementBuilder()
            .build()
            .render(mockRenderer);
        
        expect(mockRenderer.setColorFn).toBeCalledWith({
            red: 54,
            green: 175,
            blue: 255,
            alpha: 100
        });
        expect(mockRenderer.drawLineFn).toBeCalledWith({ x: 0, y: 0 }, { x: 0, y: -5 });
    });
});

class MockRenderer implements Renderer {
    public readonly setColorFn = jest.fn();
    public readonly drawLineFn = jest.fn();

    setColor(color: color): void {
        this.setColorFn(color);
    }

    drawLine(from: coordinate, to: coordinate): void {
        this.drawLineFn(from, to);
    }

    setBackgroundColor(color: color): void { color = color }
    drawFilledRectangle(from: coordinate, to: coordinate): void { from = to; to = from }
    drawStrokeRectangle(from: coordinate, to: coordinate): void { from = to; to = from }
    setLineSize(size: number): void { size = size }
}
