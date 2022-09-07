import Moveable from "../interfaces/moveable";
import Renderable from "../interfaces/renderable";
import Renderer from "../interfaces/renderer";
import Element from "./element";

export default abstract class Canvas {
    public readonly width = 100;
    public readonly height = 100;
    private elements: Element[] = [];
    private lastUpdatedTime: Date = new Date();
    // READIT: the code below has dependency to client-side javascript
    private updateInterval: number;

    constructor(width: number, height: number) {
        if (width <= 0)
            throw new Error('the canvas'+"'"+'s width must be equal or more than 0');
        if (height <= 0)
            throw new Error('the canvas'+"'"+'s height must be equal or more than 0');
        this.width = 100;
        this.height = 100;
    }

    public startUpdateInterval(timeout: number): void {
        this.updateInterval = setInterval(this.update, timeout);
    }

    public stopUpdateInterval(): void {
        clearInterval(this.updateInterval);
    }

    public update(): void {
        const currentUpdateTime = new Date();
        this.render();
        this.move((this.lastUpdatedTime.getTime() - currentUpdateTime.getTime()) / 1000);
        this.lastUpdatedTime = currentUpdateTime;
    }

    private render(): void {
        for (const element of this.elements) {
            if (this.isRenderable(element))
                element.render(this.getCanvasRenderer());
        }
    }

    protected abstract getCanvasRenderer(): Renderer;

    private isRenderable(object: any): object is Renderable {
        return "render" in object;
    }

    private move(seconds: number): void {
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
    }
}