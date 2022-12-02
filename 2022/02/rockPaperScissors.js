const fs = require("fs");
const path = require("path");

const data = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");

const inputPrep = (input) => {
    const rounds = input.split("\n");
    const hands = [];
    for (let i = 0; i < rounds.length; i++) {
        hands.push(rounds[i].split(" "));
    }
    return hands;
};

const winnerCalculator = () => {};
const rockPaperScissors = (input) => {
    let myScore = 0;

    input.forEach((round) => {
        const elfPlays = round[0];
        const myHand = round[1];

        if (myHand === "X") myScore += 1;
        if (myHand === "Y") myScore += 2;
        if (myHand === "Z") myScore += 3;

        if (
            (elfPlays === "A" && myHand === "X") ||
            (elfPlays === "B" && myHand === "Y") ||
            (elfPlays === "C" && myHand === "Z")
        )
            myScore += 3;

        if (
            (elfPlays === "A" && myHand === "Y") ||
            (elfPlays === "B" && myHand === "Z") ||
            (elfPlays === "C" && myHand === "X")
        )
            myScore += 6;
    });
    return myScore;
};
const preppedData = inputPrep(data);
console.log(rockPaperScissors(preppedData));
module.exports = { rockPaperScissors, inputPrep };
