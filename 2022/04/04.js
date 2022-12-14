const fs = require("fs");
const path = require("path");

const getPuzzleLines = ({ numeric = false } = {}) => {
    const txt = fs.readFileSync(
        path.resolve((__dirname, "./input.txt")),
        "utf-8"
    );
    const lines = txt.split("\n");
    const output = lines.map((element) => {
        return [element];
    });
    return output;
};
const rangeMaker = (input) => {
    let maxNum = input[0];
    let minNum = input[0];
    input.forEach((num) => {
        if (num > maxNum) maxNum = num;
        if (num < minNum) minNum = num;
    });

    const arrayOne = [];
    const arrayTwo = [];
    for (let i = minNum; i <= maxNum; i++) {
        if (i < input[0]) arrayOne.push(".");
        if (i <= input[1] && i >= input[0]) arrayOne.push(i);
        if (i > input[1]) arrayOne.push(".");
    }
    for (let i = minNum; i <= maxNum; i++) {
        if (i < input[2]) arrayTwo.push(".");
        if (i <= input[3] && i >= input[2]) arrayTwo.push(i);
        if (i > input[3]) arrayTwo.push(".");
    }
    return [arrayOne, arrayTwo];
};
const dataFormatter = (input) => {
    const output = [];

    for (let i = 0; i < input.length; i++) {
        input[i].forEach((string) => {
            const pairs = string.split(",");
            const elfOneBegins = Number(pairs[0].split("-")[0]);
            const elfOneFinish = Number(pairs[0].split("-")[1]);
            const elfTwoBegins = Number(pairs[1].split("-")[0]);
            const elfTwoFinish = Number(pairs[1].split("-")[1]);

            const pairInfo = {
                elfOneStart: elfOneBegins,
                elfOneEnd: elfOneFinish,
                elfTwoStart: elfTwoBegins,
                elfTwoEnd: elfTwoFinish,
                areaOneInTwo:
                    elfOneBegins >= elfTwoBegins && elfOneFinish <= elfTwoFinish
                        ? true
                        : false,
                areaTwoInOne:
                    elfTwoBegins >= elfOneBegins && elfTwoFinish <= elfOneFinish
                        ? true
                        : false,
                ranges: rangeMaker([
                    elfOneBegins,
                    elfOneFinish,
                    elfTwoBegins,
                    elfTwoFinish,
                ]),
            };
            output.push(pairInfo);
        });
    }
    return output;
};

const overlapCount = (input) => {
    let count = 0;
    input.forEach((elfPair) => {
        elfPair.areaOneInTwo ? count++ : null;
        elfPair.areaTwoInOne ? count++ : null;
    });
    return count;
};

const anyOverlapCount = (input) => {
    let count = 0;
    input.forEach((pair) => {
        const elfOneRange = pair.ranges[0];
        const elfTwoRange = pair.ranges[1];

        for (let i = 0; i < elfOneRange.length; i++) {
            if (elfOneRange[i] !== ".") {
                if (elfOneRange[i] === elfTwoRange[i]) {
                    count++;
                    break;
                }
            }
        }
    });
    return count;
};

const data = getPuzzleLines();
const formatted = dataFormatter(data);
const count = anyOverlapCount(formatted);
console.log(count);
// const count = overlapCount(formatted);

module.exports = { dataFormatter, overlapCount, rangeMaker, anyOverlapCount };
