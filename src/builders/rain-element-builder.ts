import ElementBuilder from "../bases/element-builder";
import RainElement from "../elements/rain-element";

export default class RainElementBuilder extends ElementBuilder {
    private velocity = 0;
    private acceleration = 0;

    public getVelocity(): number {
        return this.velocity;
    }

    public getAcceleration(): number {
        return this.acceleration;
    }

    public setVelocity(velocity: number): this {
        this.velocity = velocity;
        return this;
    }

    public setAcceleration(acceleration: number): this {
        this.acceleration = acceleration;
        return this;
    }

    public build(): RainElement {
        return new RainElement(this);
    }
}
