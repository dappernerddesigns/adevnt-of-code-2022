const fs = require("fs");
const path = require("path");

const getPuzzleLines = ({ numeric = false } = {}) => {
    const txt = fs.readFileSync(
        path.resolve((__dirname, "input.txt")),
        "utf-8"
    );
    const lines = txt.split("\n");
    return numeric ? lines.map((n) => +n) : lines;
};

const inputPrep = (input) => {
    const stringPrep = input.map((element) => {
        return element.length === 0 ? (element += "$") : element + "@";
    });
    const megaString = stringPrep.join("");
    const elves = megaString.split("$");
    const elvesInventory = [];
    for (let i = 0; i < elves.length; i++) {
        const items = elves[i].split("@");
        const bag = [];
        items.forEach((food) =>
            food.length === 0 ? null : bag.push(Number(food))
        );
        elvesInventory.push(bag);
    }
    return elvesInventory;
};

const calorieCounter = (input) => {
    let total = 0;
    if (input.length === 1) {
        input[0].forEach((element) => (total += element));
    }

    let totalsArray = [];
    for (let i = 0; i < input.length; i++) {
        let total = 0;
        input[i].forEach((num) => (total += num));
        totalsArray.push(total);
    }

    for (let i = 0; i < totalsArray.length; i++) {
        if (totalsArray[i] > total) {
            total = totalsArray[i];
        }
    }
    return total;
};

//* Puzzle One
const numInput = getPuzzleLines();
const finalInput = inputPrep(numInput);
// console.log(calorieCounter(finalInput));

//* Puzzle Two
const sumTopThree = (input) => {
    let totalsArray = [];
    for (let i = 0; i < input.length; i++) {
        let total = 0;
        input[i].forEach((num) => (total += num));
        totalsArray.push(total);
    }
    const sorted = totalsArray.sort((a, b) => b - a);
    const finalArray = [sorted[0], sorted[1], sorted[2]];

    let total = 0;
    finalArray.forEach((num) => (total += num));
    return total;
};

console.log(sumTopThree(finalInput));
module.exports = { calorieCounter, inputPrep, sumTopThree };
