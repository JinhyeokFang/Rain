import ElementBuilder from "./element-builder";
import RectangleElement from "./rectangle-element";

export default class RectangleElementBuilder extends ElementBuilder {
    private width = 1;
    private height = 1;

    public setWidth(width: number): this {
        if (width <= 0)
            throw new Error('the rectangle element'+"'"+'s width must be equal or more than 0');
        this.width = width;
        return this;
    }

    public setHeight(height: number): this {
        if (height <= 0)
            throw new Error('the rectangle element'+"'"+'s height must be equal or more than 0');
        this.height = height;
        return this;
    }

    public getWidth(): number {
        return this.width;
    }

    public getHeight(): number {
        return this.height;
    }

    public build(): RectangleElement {
        return new RectangleElement(this);
    }
}
