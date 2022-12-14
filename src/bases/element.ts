import Coordinate from '../interfaces/coordinate';
import ElementBuilder from './element-builder';

export default class Element {
    private position: Coordinate;
    readonly id: number;

    constructor(elementBuilder: ElementBuilder) {
        this.id = elementBuilder.getId();
        this.position = elementBuilder.getPosition();
    }

    public getPosition(): Coordinate {
        return this.position;
    }

    public setPosition(position: Coordinate): void {
        this.position = position;
    }

    public move(distance: Coordinate): void {
        this.position.x += distance.x;
        this.position.y += distance.y;
    }
}
