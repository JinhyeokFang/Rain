import Element from "../bases/element";
import RainElementBuilder from "../builders/rain-element-builder";
import Color from "../interfaces/color";
import Coordinate from "../interfaces/coordinate";
import Moveable from "../interfaces/moveable";
import Renderable from "../interfaces/renderable";
import Renderer from "../interfaces/renderer";

export default class RainElement extends Element implements Renderable, Moveable {
    private velocity = 0;
    private acceleration = 0;
    public readonly color: Color = {
        red: 54,
        green: 175,
        blue: 255,
        alpha: 100
    };

    constructor(rainElementBuilder: RainElementBuilder) {
        super(rainElementBuilder);
        this.velocity = rainElementBuilder.getVelocity();
        this.acceleration = rainElementBuilder.getAcceleration();
    }

    public getVelocity(): number {
        return this.velocity;
    }

    public getAcceleration(): number {
        return this.acceleration;
    }

    public setVelocity(velocity: number): void {
        this.velocity = velocity;
    }

    public setAcceleration(acceleration: number): void {
        this.acceleration = acceleration;
    }

    public moveByVelocity(seconds: number): void {
        const newPosition: Coordinate = this.getPosition();
        newPosition.y = this.velocity * seconds + 0.5 * (Math.pow(seconds, 2)) * this.acceleration; 
        this.velocity += this.acceleration * seconds;
        this.setPosition(newPosition);
    }

    public render(renderer: Renderer): void {
        const startLinePosition = this.getPosition();
        const endLinePosition = { x: this.getPosition().x, y: this.getPosition().y };
        endLinePosition.y -= 100;
        renderer.setLineSize(5);
        renderer.setColor(this.color);
        renderer.drawLine(startLinePosition, endLinePosition);
    }
}
