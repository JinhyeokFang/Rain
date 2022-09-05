import Element from "./element";
import Coordinate from "../interfaces/coordinate";

export default class ElementBuilder {
    private id = 0;
    private position: Coordinate = { x: 0, y: 0 };

    public setId(id: number): this {
        this.id = id;
        return this;
    }

    public setPosition(position: Coordinate): this {
        this.position = position;
        return this;
    }

    public getId(): number {
        return this.id;
    }

    public getPosition(): Coordinate {
        return this.position;
    }

    public build(): Element {
        return new Element(this);
    }
}
