import Game from "./game"

class GameView {
    constructor(canvas, ctx, radius, color) {
        this.game = new Game(canvas, ctx, radius, color);
    }

    start() {
        const begin = document.querySelector(".start");
        begin.addEventListener("click", this.createGame.bind(this));
    }

    createGame() {
        this.game.clicks = 0;
        this.game.points = 0
        this.game.start(60000);
    }
};

export default GameView