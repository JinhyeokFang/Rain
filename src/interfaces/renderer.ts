import Color from "./color";
import Coordinate from "./coordinate";

export default interface Renderer {
    currentPosition: Coordinate;
    setColor(red: number, green: number, blue: number): void;
    setBackgroundColor(color: Color): void;
    setLineSize(color: Color): void;
    drawLine(from: Coordinate, to: Coordinate): void;
    drawStrokeRectangle(from: Coordinate, to: Coordinate): void;
    drawFilledRectangle(from: Coordinate, to: Coordinate): void;
}
