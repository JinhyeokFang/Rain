// codes for test
// IT WORKS!!!

import RainElementBuilder from "./builders/rain-element-builder";
import WebCanvas from "./implements/web-canvas";

const canvasElement: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('canvas');
const canvas = new WebCanvas(500, 500, canvasElement);

function createRain() {
    const rainElement = new RainElementBuilder()
    .setPosition({ x: Math.random() * 500, y: -50 })
    .setId(0)
    .setAcceleration(-10000)
    .build();

    canvas.addElement(rainElement);
}

setInterval(createRain, 50);

canvas.setUpdateInterval(10);
