import Element from "../bases/element";
import RainElementBuilder from "../builders/rain-element-builder";
import Moveable from "../interfaces/moveable";
import Renderable from "../interfaces/renderable";

export default class RainElement extends Element implements Renderable, Moveable {
    private velocity = 0;
    private acceleration = 0;

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
        
    }

    public render(renderer: Renderer): void {

    }
}
