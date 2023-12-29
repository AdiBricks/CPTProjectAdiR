import GameEnv from './GameEnv.js';
import Background from './Background.js';

export class BackgroundHills extends Background {
    constructor(canvas, image, speedRatio) {
        super(canvas, image, speedRatio);
    }

    // speed is used to background parallax behavior
    update() {
        this.speed = GameEnv.backgroundHillsSpeed;
        super.update();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        super.draw();
    }

}

export default BackgroundHills;