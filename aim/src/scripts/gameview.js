import Game from "./game"
import Timer from "./timer";

class GameView {
    constructor(canvas, ctx, radius, color) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.radius = radius;
        this.color = color;
        this.timer = new Timer(ctx);
    }

    start() {
        const begin = document.querySelector(".start");
        begin.addEventListener("click", this.createGame.bind(this));
    }

    createGame() {
        const game = new Game(this.canvas, this.ctx, this.radius, this.color);
        game.start();
        this.timer.reset();
        this.timer.start(5000);
    }
};

export default GameView