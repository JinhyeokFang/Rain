import Element from "../bases/element";
import RectangleElementBuilder from "../builders/rectangle-element-builder";

export default class RectangleElement extends Element {
    private width: number;
    private height: number;

    constructor(rectangleElementBuilder: RectangleElementBuilder) {
        super(rectangleElementBuilder);
        this.width = rectangleElementBuilder.getWidth();
        this.height = rectangleElementBuilder.getHeight();
    }

    public getWidth() {
        return this.width;
    }

    public getHeight() {
        return this.height;
    }

    public setWidth(width: number) {
        if (width <= 0)
            throw new Error('the rectangle element'+"'"+'s width must be equal or more than 0');
        this.width = width;
    }

    public setHeight(height: number) {
        if (height <= 0)
            throw new Error('the rectangle element'+"'"+'s height must be equal or more than 0');
        this.height = height;
    }
}