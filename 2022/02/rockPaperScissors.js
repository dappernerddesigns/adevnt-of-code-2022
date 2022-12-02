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

const choices = [
    {
        hand: "rock",
        winsAgainst: "scissors",
        losesAgainst: "paper",
        points: 1,
    },
    {
        hand: "paper",
        winsAgainst: "rock",
        losesAgainst: "scissors",
        points: 2,
    },
    {
        hand: "scissors",
        winsAgainst: "paper",
        losesAgainst: "rock",
        points: 3,
    },
];

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

const riggedRockPaperScissors = (input) => {
    let myScore = 0;

    input.forEach((round) => {
        let elfHand = round[0];
        let myHand = round[1];

        if (elfHand === "A") elfHand = choices[0];
        if (elfHand === "B") elfHand = choices[1];
        if (elfHand === "C") elfHand = choices[2];

        if (myHand === "X") {
            myHand = choices.filter((play) => {
                return play.hand === elfHand.winsAgainst;
            })[0];
        }

        if (myHand === "Y") {
            myHand = choices.filter((play) => {
                return play.hand === elfHand.hand;
            })[0];
            myScore += 3;
        }
        if (myHand === "Z") {
            myHand = choices.filter((play) => {
                return play.hand === elfHand.losesAgainst;
            })[0];
            myScore += 6;
        }

        myScore += myHand.points;
    });
    return myScore;
};

const preppedData = inputPrep(data);
const answerOne = rockPaperScissors(preppedData);
const answerTwo = riggedRockPaperScissors(preppedData);

module.exports = { rockPaperScissors, inputPrep, riggedRockPaperScissors };
