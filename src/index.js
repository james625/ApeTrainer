import GameView from "./scripts/gameview";

document.addEventListener("DOMContentLoaded", (event) => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const newGame = new GameView(canvas, ctx, 25, "red");
    newGame.start();

});