import Moveable from "../interfaces/moveable";
import Renderable from "../interfaces/renderable";
import Renderer from "../interfaces/renderer";
import Element from "./element";

export default abstract class Canvas {
    public readonly width: number;
    public readonly height: number;
    private elements: Element[] = [];
    private lastUpdatedTime: Date = new Date();
    // READIT: the code below has dependency to client-side javascript
    private updateInterval: number | null = null;

    constructor(width: number, height: number) {
        if (width <= 0)
            throw new Error('the canvas'+"'"+'s width must be equal or more than 0');
        if (height <= 0)
            throw new Error('the canvas'+"'"+'s height must be equal or more than 0');
        this.width = width;
        this.height = height;
    }

    public setUpdateInterval(timeout: number): void {
        const t = this;
        this.updateInterval = setInterval(function() {
            t.update();
        }, timeout);
    }

    public stopUpdateInterval(): void {
        if (this.updateInterval != null)
            clearInterval(this.updateInterval);
        this.updateInterval = null;
    }

    protected render(): void {
        const renderer = this.getCanvasRenderer();
        renderer.clear(this.width, this.height);

        for (const element of this.elements) {
            if (this.isRenderable(element))
                element.render(renderer);
        }
    }

    public update(): void {
        const currentUpdateTime = new Date();
        this.render();
        this.move((this.lastUpdatedTime.getTime() - currentUpdateTime.getTime()) / 1000);
        this.lastUpdatedTime = currentUpdateTime;
    }

    protected abstract getCanvasRenderer(): Renderer;

    private isRenderable(object: any): object is Renderable {
        return "render" in object;
    }

    protected move(seconds: number): void {
        for (const element of this.elements) {
            if (this.isMoveable(element))
                element.moveByVelocity(seconds);
        }
    }

    private isMoveable(object: any): object is Moveable {
        return "moveByVelocity" in object;
    }

    public addElement(element: Element) {
        this.elements.push(element);
        this.update();
    }
}