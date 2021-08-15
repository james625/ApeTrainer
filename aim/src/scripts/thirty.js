import Target from "./target";

class Thirty extends Game {
    constructor (canvas, ctx, radius, color, difficulty) {
        this.X = 1000;
        this.Y = 500;
        super(canvas, ctx, radius, color);
        this.difficulty = difficulty;
        this.targets = [];
        this.points = 0;
    };

    makeThirty() {
        for (let i = 0; i < 30; i++) {
            this.targets.push(new Target(this.randomPosition(), this.radius, this.color));
        }
    };

    render() {
        this.ctx.clearRect(0, 0, this.X, this.Y);
        this.targets[0].draw(this.ctx);
        const score = document.querySelector(".score");
        score.innerText = `Final Score: ${this.points}`
    }

    play() {
        const modes = {
            "easy": 1000,
            "medium": 500,
            "hard": 250
        };
        setInterval(() => {
            this.ctx.clearRect(0, 0, this.X, this.Y);
            this.targets.splice(0, 1);
        }, modes[this.difficulty]);
        this.render();
    }

    handleClick(e) {
        const box = this.canvas.getBoundingClientRect();
        const cursorX = e.clientX - box.left;
        const cursorY = e.clientY - box.top;
        if (this.targets[0].clickedTarget(cursorX, cursorY)) {
            this.points++;
        }
    }
}

export default Thirty;