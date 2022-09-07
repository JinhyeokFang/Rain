import Canvas from "../bases/canvas";
import renderer from "../interfaces/renderer";
import WebCanvasRenderer from "./web-canvas-renderer";

export default class WebCanvas extends Canvas {
    private webCanvasElement: HTMLCanvasElement;

    constructor(width: number, height: number, webCanvasElement: HTMLCanvasElement) {
        super(width, height);
        this.webCanvasElement = webCanvasElement;
    }

    protected getCanvasRenderer(): renderer {
        return new WebCanvasRenderer(this.webCanvasElement);
    }
}