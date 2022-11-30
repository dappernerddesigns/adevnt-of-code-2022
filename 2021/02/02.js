const fs = require("fs");
const fsPromise = require("fs").promises;
const path = require("path");

class Submarine {
    constructor() {
        this.forwardLocation = 0;
        this.depth = 0;
    }
    forward(input) {
        return (this.forwardLocation += input);
    }
    up(input) {
        return (this.depth -= input);
    }
    down(input) {
        return (this.depth += input);
    }
    finalLocation() {
        return this.forwardLocation * this.depth;
    }
}

const location = (input) => {
    const tempArray = input.split("\n");

    const directions = [];
    for (let i = 0; i < tempArray.length; i++) {
        const split = tempArray[i].split(" ");

        directions.push([split[0], Number(split[1])]);
    }

    const sub = new Submarine();
    for (let i = 0; i < directions.length; i++) {
        const direction = directions[i][0];
        const value = directions[i][1];

        if (direction === "forward") {
            sub.forward(value);
        }
        if (direction === "up") {
            sub.up(value);
        }
        if (direction === "down") {
            sub.down(value);
        }
    }
    return sub.finalLocation();
};

fsPromise
    .readFile(path.resolve((__dirname += "/input.txt")))
    .then((result) => {
        const string = "" + result;
        console.log(location(string));
    })
    .catch(function (error) {
        console.log(error);
    });

module.exports = { location, Submarine };
