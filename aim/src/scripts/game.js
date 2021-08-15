import Target from "./target";
import Timer from "./timer";

class Game {
    constructor(canvas, ctx, radius, color) {
        this.X = 1000;
        this.Y = 500;
        this.canvas = canvas;
        this.ctx = ctx;
        this.radius = radius;
        this.color = color;
        this.timer = new Timer(ctx);
        this.clicks = 0;
        this.points = 0;
        this.target = new Target(this.randomPosition(), radius, color);
        this.handleClick = this.handleClick.bind(this);
        canvas.addEventListener('click', this.handleClick);
    };
    
    randomPosition() {
        const x = Math.random() * this.X;
        const y = Math.random() * this.Y;
        return [x, y];
    };

    render() {
        this.ctx.clearRect(0, 0, this.X, this.Y);
        this.target.draw(this.ctx);
        const points = document.querySelector(".points");
        const accuracy = document.querySelector(".accuracy");
        const score = document.querySelector(".score");
        points.innerText = `Points: ${this.points}`
        const acc = Math.floor((this.points / this.clicks) * 100)
        accuracy.innerText = `Accuracy: ${acc}%`
        score.innerText = `Score: ${acc * this.points}`
    }

    handleClick(e) {
        const box = this.canvas.getBoundingClientRect();
        const cursorX = e.clientX - box.left;
        const cursorY = e.clientY - box.top;
        this.clicks++;
        if (this.target.clickedTarget(cursorX, cursorY)) {
            this.points ++;
            this.target = new Target(this.randomPosition(), this.radius, this.color);
            this.render();
        }
    };

    start() {
        this.render();
        this.timer.reset();
        this.timer.start(5000);
    };
};

export default Game