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
            document.getElementById("label-ch").innerHTML = '<img src="src/assets/crosshair.png" alt="crosshair">';
            document.getElementById("label-ch").style.opacity = 1;
        }
        if (this.scores["easy"] >= 20) {
            document.getElementById("cursor1").removeAttribute("disabled");
            document.getElementById("label-easy").innerHTML = '<img src="src/assets/easy.png" alt="green-ch">';
            document.getElementById("label-easy").style.opacity = 1;
        }
        if (this.scores["medium"] >= 15) {
            document.getElementById("cursor2").removeAttribute("disabled");
            document.getElementById("label-medium").innerHTML = '<img src="src/assets/medium.png" alt="orange-ch">';
            document.getElementById("label-medium").style.opacity = 1;
        }
        if (this.scores["hard"] >= 5) {
            document.getElementById("cursor3").removeAttribute("disabled");
            document.getElementById("label-hard").innerHTML = '<img src="src/assets/hard.png" alt="red-ch">';
            document.getElementById("label-hard").style.opacity = 1;
        }

        if (this.game.highscore >= 9000) {
            document.getElementById("gold1").style.visibility = "visible";
        }
        if (this.scores["easy"] >= 70) {
            document.getElementById("bronze").style.visibility = "visible";
        }
        if (this.scores["medium"] >= 25) {
            document.getElementById("silver").style.visibility = "visible";
        }
        if (this.scores["hard"] >= 10) {
            document.getElementById("gold2").style.visibility = "visible";
        }
        const cursor = document.querySelectorAll('input[name="cursor"]');
        let select;
        cursor.forEach ( ele => { 
            if (ele.checked) {
                select = ele.value;
            }
        });
        if (select === "none") {
            this.canvas.style.cursor = "auto";
        } else if (select === "crosshair") {
            this.canvas.style.cursor = 'url("src/assets/crosshair.png"), auto';
        } else if (select === "cursor1") {
            this.canvas.style.cursor = 'url("src/assets/easy.png"), auto';
        } else if (select === "cursor2") {
            this.canvas.style.cursor = 'url("src/assets/medium.png"), auto';
        } else if (select === "cursor3") {
            this.canvas.style.cursor = 'url("src/assets/hard.png"), auto';
        }
    };
};

export default GameView