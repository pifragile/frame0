import { Canvas } from "canvas";

export function createImg(){
    var canvas = new Canvas(200, 200, "png");
    var g = canvas.getContext("2d");
    g.fillStyle = "black";
    g.fillRect(0, 0, 100, 100);
    return canvas.toBuffer();
}