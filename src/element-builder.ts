import Element from "./element";
import Coordinate from "./interfaces/coordinate";

export default class ElementBuilder {
    private id = 0;
    private position: Coordinate = { x: 0, y: 0 };

    public setId(id: number): ElementBuilder {
        this.id = id;
        return this;
    }

    public setPosition(position: Coordinate): ElementBuilder {
        this.position = position;
        return this;
    }

    public build(): Element {
        return new Element(this);
    }
}
