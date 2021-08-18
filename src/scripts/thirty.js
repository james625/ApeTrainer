import Target from "./target";
import Game from "./game";

class Thirty extends Game {
    constructor (canvas, ctx, radius, color, difficulty) {
        super(canvas, ctx, radius, color);
        this.difficulty = difficulty;
        this.targets = [];
        this.points = 0;
        this.interval;
        this.handleClick = this.handleClick.bind(this);
        this.canvas = canvas;
    };

    makeThirty() {
        for (let i = 0; i < 30; i++) {
            this.targets.push(new Target(this.randomPosition(), this.radius, this.color));
        }
    };

    render() {
        this.ctx.clearRect(0, 0, this.X, this.Y);
        if (this.targets.length === 0) {
            clearInterval(this.interval);
            this.canvas.classList.add("game-over");
        }
        if (this.targets.length > 0) {
            this.targets[0].draw(this.ctx);
        }
        const score = document.querySelector(".score");
        score.innerText = `Final Score: ${this.points}`;
    }

    blinkCircle() {
        const modes = {
            "easy": 1000,
            "medium": 750,
            "hard": 500
        };
        this.render();
        this.interval = setInterval(() => {
            this.ctx.clearRect(0, 0, this.X, this.Y);
            this.targets.splice(0, 1);
            this.render();
        }, modes[this.difficulty]);
    };

    handleClick(e) {
        const box = this.canvas.getBoundingClientRect();
        const cursorX = e.clientX - box.left;
        const cursorY = e.clientY - box.top;
        if (this.targets[0].clickedTarget(cursorX, cursorY)) {
            this.points++;
        }
    }

    start() {
        this.canvas.addEventListener("click", this.handleClick);
        clearInterval(this.interval);
        this.canvas.classList.remove("game-over");
        this.makeThirty();
        this.blinkCircle();
    }

    stop() {
        this.canvas.removeEventListener("click", this.handleClick);
        clearInterval(this.interval);
        this.canvas.classList.remove("game-over");
        this.ctx.clearRect(0, 0, this.X, this.Y);
        document.querySelector(".score").innerText = "";
    }
}

export default Thirty;