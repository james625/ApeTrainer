import Game from "./scripts/game";


document.addEventListener("DOMContentLoaded", (event) => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // ctx.fillStyle = "#ADD8E6";
    // ctx.fillRect(0, 0, 1000, 500);
    const game = new Game(canvas, ctx, 25, "red");
    // canvas.addEventListener("mousemove", (event) => {
    //     canvas.style.backgroundPositionX = event.offsetX * 1.8 + "px";
    //     canvas.style.backgroundPositionY = event.offsetY + 80 + "px";
    // });

    // canvas.addEventListener("mouseenter", () => {
    //     setTimeout( () =>{
    //         canvas.style.transition = 0;
    //         canvas.removeEventListener("mouseenter");
    //     }, 250)
    // })

});