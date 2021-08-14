class Target {
    constructor(pos, radius, color) {
        this.x = pos[0];
        this.y = pos[1];
        this.radius = radius;
        this.color = color;
    };

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true);
        const gradient = ctx.createRadialGradient(
            this.x + 5, this.y + 5, this.radius / 100, this.x + 10, this.y + 10, 100
        );
        gradient.addColorStop(1, this.color);
        gradient.addColorStop(0, "#d3d3d3");
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.lineWidth = .2;
        ctx.stroke();
        
    };

    clickedTarget(x, y) {
        return Math.sqrt( (x - this.x)**2 + (y - this.y)**2 ) < this.radius
    };

};

export default Target;