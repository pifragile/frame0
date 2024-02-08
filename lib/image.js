//import { Canvas } from "canvas";
import p5 from "node-p5";

// export function createImg() {
//     var canvas = new Canvas(200, 200, "png");
//     var g = canvas.getContext("2d");
//     g.fillStyle = "black";
//     g.fillRect(0, 0, 100, 100);
//     return canvas.toBuffer();
// }
function drawTextOnCanvasAsync(text) {
    return new Promise((resolve) => {
        const sketch = (p) => {
            p.setup = () => {
                p.createCanvas(400, 200);
                p.background(255);
            };

            p.draw = () => {
                p.fill(0);
                p.textSize(30);
                p.textAlign(p.CENTER, p.CENTER);
                p.text(text, p.width / 2, p.height / 2);

                const base64PNG = p.canvas.toDataURL().split(",")[1];
                resolve(base64PNG);

                p.noLoop();
            };
        };

        p5.createSketch(sketch);
    });
}

export async function createImg2() {
    return Buffer.from(await drawTextOnCanvasAsync("gugus"), "base64");
}