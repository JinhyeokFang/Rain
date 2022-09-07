/**
 * TODO:
 * canvas class
 * width and height
 * lists of elements
 * update() and lastUpdateTime
 * render()
 * move()
 * getCanvasRenderer() -> private
 * canvas class must be abstract class
 * 
 * web canvas class
 * canvasHTMLElement
 */

import WebCanvas from "../implements/web-canvas";
import Moveable from "../interfaces/moveable";
import Renderable from "../interfaces/renderable";
import Renderer from "../interfaces/renderer";
 
describe('a canvas has width and height', () => {
    it('a canvas has immutable width and height', () => {
        const canvas = new WebCanvas(400, 600, new HTMLCanvasElement());

        expect(canvas.width).toEqual(400);
        expect(canvas.height).toEqual(600);
    });
});

describe('a canvas is rendering and moving elements', () => {
    it('a canvas renders after add a element', () => {
        const mockHTMLCanvasElement = new MockRenderableElement();
        const canvas = new WebCanvas(400, 600, mockHTMLCanvasElement);
        canvas.addElement(mockHTMLCanvasElement);

        expect(mockHTMLCanvasElement.mockRenderFn).toBeCalled();
    });
    it('a canvas move elements after add a element', () => {
        const mockHTMLCanvasElement = new MockMovableElement();
        const canvas = new WebCanvas(400, 600, mockHTMLCanvasElement);
        canvas.addElement(mockHTMLCanvasElement);

        expect(mockHTMLCanvasElement.mockMoveFn).toBeCalled();
    });
});

class MockRenderableElement extends Element implements Renderable {
    public mockRenderFn = jest.fn();

    render(renderer: Renderer): void {
        this.mockRenderFn(renderer);
    }
}

class MockMovableElement extends Element implements Moveable {
    public mockMoveFn = jest.fn();

    moveByVelocity(seconds: number): void {
        this.mockMoveFn(seconds);
    }
}
 