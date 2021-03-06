## Background
The goal of this game is to click on the circle on the screen before it 
disappears. It is similar to whack-a-mole, but it can also serve as a way 
to practice hand-eye coordination on the screen with the cursor. There are 
different settings to help ramp up the difficulty.

## Live Site - [ApeTrainer](https://james625.github.io/ApeTrainer/)
![alt text](https://github.com/james625/ApeTrainer/blob/main/src/assets/sample.PNG "Sample")

## Functionality & MVPs
In this aim trainer, users will be able to:

* Pick between different game modes
* Keep track of previous scores
* Adjust different settings (time, size, etc)
* Receive feedback on that round
* Unlock different designs to objects and cursor

In addition, this project will include:

* Instructions to how to start
* Production README
* Possible leaderboard

## Wireframes
![wireframe](./wireframe.png)

## Technologies
This project will be created using canvas and vanilla JavaScript.

## Code
One particular part of the project that I thought was distinctive was when I created new game modes that were not timed like the default. Since they had the same functionality where 30 orbs would spawn, I was able to make it a single class and only adjust how often they spawn. I was able to do this using an input value coupled with an object that matched the difficulty to a certain time interval.

```js
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
```

## Implementation Timeline
* Friday afternoon & Weekend\
    Set up canvas and implement a basic version where circles appear on the
    screen and can be clicked on. A timer and a basic scoring system will
    be added. Research three.js.
* Monday\
    Create buttons for different game modes and implement the logic behind 
    each button.
* Tuesday\
    Use CSS to brush up the interface and make sure everything is functional.
* Wednesday\
    Try to add bonus features and brainstorm additional bonus features. 
    Potentially use three.js.
* Thursday morning\
    Prepare for presentation.

## Bonus Features
* Have leaderboard that updates
* Create visual depth
* Move the objects to make the game harder
