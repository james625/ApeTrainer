import Target from "./target";

class Game {
    constructor(canvas, ctx, radius, color) {
        this.X = 1000;
        this.Y = 500;
        this.canvas = canvas;
        this.ctx = ctx;
        this.radius = radius;
        this.color = color;
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
    }

    handleClick(e) {
        const box = this.canvas.getBoundingClientRect();
        const cursorX = e.clientX - box.left;
        const cursorY = e.clientY - box.top;
        if (this.target.clickedTarget(cursorX, cursorY)) {
            // debugger
            this.target = new Target(this.randomPosition(), this.radius, this.color);
            this.render();
        }
    };

    start() {
        this.render();
    };
};

export default Game