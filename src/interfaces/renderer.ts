import Color from "./color";
import Coordinate from "./coordinate";

export default interface Renderer {
    setColor(color: Color): void;
    setBackgroundColor(color: Color): void;
    setLineSize(size: number): void;
    drawLine(from: Coordinate, to: Coordinate): void;
    drawStrokeRectangle(from: Coordinate, to: Coordinate): void;
    drawFilledRectangle(from: Coordinate, to: Coordinate): void;
}
