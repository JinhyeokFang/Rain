import color from "../interfaces/color";
import coordinate from "../interfaces/coordinate";
import Renderer from "../interfaces/renderer";

export default class WebCanvasRenderer implements Renderer {
    private canvasContext: CanvasRenderingContext2D;

    constructor(canvasElement: HTMLCanvasElement) {
        const context = canvasElement.getContext('2d');
        if (context === null)
            throw new Error('the element you give is not a canvas element');
        this.canvasContext = context;
    }

    setColor(color: color): void {
        this.canvasContext.strokeStyle = `rgba(${color.red},${color.green},${color.blue},${color.alpha})`;
    }

    setBackgroundColor(color: color): void {
        this.canvasContext.fillStyle = `rgba(${color.red},${color.green},${color.blue},${color.alpha})`;
    }

    setLineSize(size: number): void {
        this.canvasContext.lineWidth = size;
    }

    drawLine(from: coordinate, to: coordinate): void {
        this.canvasContext.beginPath();
        this.canvasContext.moveTo(from.x, from.y);
        this.canvasContext.lineTo(to.x, to.y);
        this.canvasContext.closePath();
        this.canvasContext.stroke();
    }

    drawFilledRectangle(from: coordinate, to: coordinate): void {
        this.canvasContext.fillRect(from.x, from.y, Math.abs(from.x - to.x), Math.abs(from.y - from.y));
    }

    drawStrokeRectangle(from: coordinate, to: coordinate): void {
        this.canvasContext.strokeRect(from.x, from.y, Math.abs(from.x - to.x), Math.abs(from.y - from.y));
    }
}