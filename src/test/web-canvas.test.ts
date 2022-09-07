import WebCanvas from "../implements/web-canvas";
 
describe('a canvas has width and height', () => {
    it('a canvas has immutable width and height', () => {
        const canvas = new WebCanvas(400, 600, new HTMLCanvasElement());

        expect(canvas.width).toEqual(400);
        expect(canvas.height).toEqual(600);
    });
});
 