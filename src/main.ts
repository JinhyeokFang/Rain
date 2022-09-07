// codes for test
// IT WORKS!!!

import RainElementBuilder from "./builders/rain-element-builder";
import WebCanvas from "./implements/web-canvas";

const canvasElement: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('canvas');
const canvas = new WebCanvas(500, 500, canvasElement);
const rainElement = new RainElementBuilder()
    .setPosition({ x: 30, y: 30 })
    .setId(0)
    .setVelocity(0)
    .build();

canvas.addElement(rainElement);
