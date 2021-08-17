import Game from "./game"
import Thirty from "./thirty";

class GameView {
    constructor(canvas, ctx, radius, color, option) {
        this.game = new Game(canvas, ctx, radius, color);
        this.canvas = canvas;
        this.ctx = ctx;
        this.color = color;
        this.radius = radius;
        this.thirty = new Thirty(this.canvas, this.ctx, this.radius, this.color, "easy");
        // this.easy = new Thirty(canvas, ctx, radius, color, "easy");
        // this.medium = new Thirty(canvas, ctx, radius, color, "medium");
        // this.hard = new Thirty(canvas, ctx, radius, color, "hard");
    };

    start() {
        const begin = document.querySelector(".start");
        begin.addEventListener("click", this.startGame.bind(this));
    };

    createGame() {
        this.game.clicks = 0;
        this.game.points = 0
        this.game.start(60000);
    };

    createThirty(difficulty) {
        difficulty.targets = [];
        difficulty.points = 0;
        difficulty.start();
    };

    startGame() {
        const radio = document.querySelectorAll('input[name="game-mode"]');
        let option;
        radio.forEach ( ele => { 
            if (ele.checked) {
                option = ele.value;
            }
        });
        if (option === "default") {
            this.thirty.stop();
            this.createGame();
        } else {
            this.game.stop();
            this.thirty.stop();
            const newThirty = new Thirty(this.canvas, this.ctx, this.radius, this.color, option)
            this.thirty = newThirty
            this.createThirty(this.thirty);
        }
    };
};

export default GameView