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
 