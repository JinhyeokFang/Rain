import Coordinate from './interfaces/coordinate'

export default class Element {
    private position: Coordinate;

    constructor(position: Coordinate) {
        this.position = position;
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
