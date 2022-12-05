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

const dataFormatter = (input) => {
    const output = [];

    for (let i = 0; i < input.length; i++) {
        input[i].forEach((string) => {
            const pairs = string.split(",");
            const elfOneBegins = Number(pairs[0].split("-")[0]);
            const elfOneFinish = Number(pairs[0].split("-")[1]);
            const elfTwoBegins = Number(pairs[1].split("-")[0]);
            const elfTwoFinish = Number(pairs[1].split("-")[1]);
            console.log(elfOneBegins, elfOneFinish, elfTwoBegins, elfTwoFinish);
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
            };
            output.push(pairInfo);
        });
    }
    return output;
};

const overlapCount = (input) => {
    let count = 0;
    input.forEach((elfPair) => {
        elfPair.anyOverlap ? count++ : null;
    });
    return count;
};

const data = getPuzzleLines();
const formatted = dataFormatter(data);

const count = overlapCount(formatted);
console.log(count);
module.exports = { dataFormatter, overlapCount };
