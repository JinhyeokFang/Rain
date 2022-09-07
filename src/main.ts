// codes for test
// IT WORKS!!!

import RainElementBuilder from "./builders/rain-element-builder";
import WebCanvas from "./implements/web-canvas";

const canvasElement: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('canvas');
const canvas = new WebCanvas(window.innerWidth, window.innerHeight, canvasElement);

function createRain() {
    const rainElement = new RainElementBuilder()
        .setPosition({ x: Math.random() * window.innerWidth, y: -50 })
        .setId(0)
        .setAcceleration(-10000)
        .build();

    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight;

    canvas.addElement(rainElement);
}

setInterval(createRain, 25);

canvas.setUpdateInterval(10);
