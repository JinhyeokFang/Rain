import Coordinate from './interfaces/coordinate'

export default class Element {
    private position: Coordinate;
    readonly id: number;

    constructor(id: number, position: Coordinate) {
        this.id = id;
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
