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
        this.scores = {
            "easy": 0,
            "medium": 0,
            "hard": 0
        }
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
            if (this.thirty.points > this.scores[this.thirty.difficulty]) {
                this.scores[this.thirty.difficulty] = this.thirty.points;
                document.querySelector(`.${this.thirty.difficulty}`).innerText = `Best ${this.thirty.difficulty}: ${this.scores[this.thirty.difficulty]}`;
            }
            this.thirty.stop();
            this.createGame();
        } else {
            this.game.stop();
            if (this.thirty.points > this.scores[this.thirty.difficulty]) {
                this.scores[this.thirty.difficulty] = this.thirty.points;
                document.querySelector(`.${this.thirty.difficulty}`).innerText = `Best ${this.thirty.difficulty}: ${this.scores[this.thirty.difficulty]}`;
            }
            this.thirty.stop();
            const newThirty = new Thirty(this.canvas, this.ctx, this.radius, this.color, option)
            this.thirty = newThirty
            this.createThirty(this.thirty);
        }

        if (this.game.highscore >= 1000) {
            document.getElementById("crosshair").removeAttribute("disabled");
        }
        if (this.scores["easy"] >= 20) {
            document.getElementById("cursor1").removeAttribute("disabled");
        }
        if (this.scores["medium"] >= 15) {
            document.getElementById("cursor2").removeAttribute("disabled");
        }
        if (this.scores["hard"] >= 5) {
            document.getElementById("cursor3").removeAttribute("disabled");
        }
    };
};

export default GameView