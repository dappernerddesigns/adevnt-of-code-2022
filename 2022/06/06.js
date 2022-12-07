const fs = require("fs");
const path = require("path");

const getPuzzleLines = ({ numeric = false } = {}) => {
    const txt = fs.readFileSync(
        path.resolve((__dirname, "./input.txt")),
        "utf-8"
    );
    return txt;
};
const input = getPuzzleLines();

const createRange = (input) => {
    const output = [];
    let rangeIncrease = 14;
    for (let i = 0; i < input.length; i++) {
        if (input.substring(i, rangeIncrease).length === 14) {
            output.push(input.substring(i, rangeIncrease));
        }
        rangeIncrease++;
    }
    return output;
};

const findUniqueString = (input) => {
    let rangeFound = 0;
    const uniqueStrings = input.map((range) => {
        const isUnique = new Set(range);
        return isUnique;
    });

    for (let i = 0; i < uniqueStrings.length; i++) {
        if (uniqueStrings[i].size === 14) {
            return (rangeFound = i);
        }
    }
    return rangeFound;
};

const findMarker = (rangeFound) => {
    const arrayFound = rangeFound;
    const baseArray = 14;
    return baseArray + arrayFound;
};

const range = createRange(input);
const uniqueString = findUniqueString(range);
const marker = findMarker(uniqueString);
console.log(marker);

module.exports = { createRange, findUniqueString, findMarker };
