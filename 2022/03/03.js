// a-z = 1-26 => 97 - 122
//A-Z 27-52 => 65 - 90
const fs = require("fs");
const path = require("path");

const data = fs.readFileSync(path.resolve(__dirname, "testInput.txt"), "utf8");
const dataArray = data.split("\n");

const findMatchingTypes = (input) => {
    const match = [];

    input.forEach((ruckSack) => {
        const half = ruckSack.length / 2;

        const compartmentOne = ruckSack.substr(0, half);
        const compartmentTwo = ruckSack.substr(half);

        for (let i = 0; i < compartmentOne.length; i++) {
            for (let j = 0; j < compartmentTwo.length; j++) {
                if (compartmentOne[i] === compartmentTwo[j]) {
                    return match.push(
                        compartmentOne.charCodeAt(compartmentOne[i])
                    );
                }
            }
        }
    });

    return match;
};

const makeGroups = (input) => {
    const res = [];
    while (input.length > 0) {
        const chunk = input.splice(0, 3);
        res.push(chunk);
    }
    return res;
};

const findBadge = (input) => {
    const badges = [];
    input.forEach((group) => {
        const letters = group[0].split("");

        for (let i = 0; i < letters.length; i++) {
            if (
                group[1].includes(letters[i]) &&
                group[2].includes(letters[i])
            ) {
                badges.push(letters[i]);
                break;
            }
        }
    });

    const charCodes = badges.map((letters) => {
        return letters.charCodeAt(0);
    });
    console.log(charCodes);
    return charCodes;
};

const sumMatchingValues = (input) => {
    let total = 0;

    input.forEach((char) => {
        if (char >= 97 && char <= 122) {
            const value = char - 96;
            total += value;
        }
        if (char >= 65 && char <= 90) {
            const value = char - 38;
            total += value;
        }
    });
    return total;
};

const groups = makeGroups(dataArray);
const badges = findBadge(groups);
const values = sumMatchingValues(badges);
console.log(values);
module.exports = {
    findMatchingTypes,
    sumMatchingValues,
    findBadge,
    makeGroups,
};
