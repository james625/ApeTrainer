class Timer {
    constructor(ctx) {
        this.minutes = 0;
        this.seconds = 0;
        this.maxTime = 0;
        this.ctx = ctx;
    };

    start(ms) {
        this.maxTime = ms;
        this.minutes = Math.floor(ms / 60000);
        ms = ms - (this.minutes * 60000);
        this.seconds = Math.floor(ms / 1000);
        this.render();
        const clock = setInterval(changeTime.bind(this), 1000);
        function changeTime() {
            if (this.maxTime <= 0) {
                clearInterval(clock);
            }
            this.maxTime -= 1000;
            if (this.seconds === 0) {
                this.seconds = 59;
                this.minutes -= 1;
            } else {
                this.seconds -= 1;
            }
            this.render();
            if (this.maxTime <= 0) {
                clearInterval(clock);
            }
        };
    };

    render() {
        const clock = document.querySelector(".timer");
        if (this.seconds > 9) {
            clock.innerText = `Time Remaining: ${this.minutes}:${this.seconds}`;
        } else {
            clock.innerText = `Time Remaining: ${this.minutes}:0${this.seconds}`;
        }
    };

    reset() {
        this.minutes = 0;
        this.seconds = 0;
        this.maxTime = 0;
    };
};

export default Timer;