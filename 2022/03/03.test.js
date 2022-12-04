const {
    findMatchingTypes,
    sumMatchingValues,
    findBadge,
    makeGroups,
} = require("./03.js");

const fs = require("fs");
const path = require("path");

describe("Ruck Sack Reorganise Part One", () => {
    test("Function returns the priority of a single letter when two identical lowercase letters are passed", () => {
        const input = findMatchingTypes(["bb"]);
        const expected = 2;

        expect(sumMatchingValues(input)).toBe(expected);
    });
    test("Function returns the priority value of a single letter when two uppercase letters are passed", () => {
        const input = findMatchingTypes(["AA"]);
        const expected = 27;
        expect(sumMatchingValues(input)).toBe(expected);
    });
    test("Function returns priority value from a mixed case string", () => {
        const input = findMatchingTypes(["vJrwpWtwJgWrhcsFMMfFFhFp"]);
        console.log(input);
        console.log(String.fromCharCode(input));
        const expected = 16;
        expect(sumMatchingValues(input)).toBe(expected);
    });
    test("Function returns priority value sum from two mixed case strings", () => {
        const data = fs.readFileSync(
            path.resolve(__dirname, "testInput.txt"),
            "utf8"
        );
        const lines = data.split("\n");
        const input = findMatchingTypes([lines[0], lines[1]]);
        const expected = 16 + 38;
        expect(sumMatchingValues(input)).toBe(expected);
    });
    test("Function returns priority value sum from six mixed case strings", () => {
        const data = fs.readFileSync(
            path.resolve(__dirname, "testInput.txt"),
            "utf8"
        );
        const lines = findMatchingTypes(data.split("\n"));
        const expected = 157;
        expect(sumMatchingValues(lines)).toBe(expected);
    });
});

describe.only("Ruck Sack Reorganise Part Two", () => {
    describe("Make Groups", () => {
        test("Function returns an array of arrays with lengths of three", () => {
            const data = fs.readFileSync(
                path.resolve(__dirname, "testInput.txt"),
                "utf8"
            );
            const lines = findMatchingTypes(data.split("\n"));
            expect(makeGroups(lines)[0].length).toBe(3);
        });
        test("Function returns an array of arrays with lengths of three", () => {
            const data = fs.readFileSync(
                path.resolve(__dirname, "input.txt"),
                "utf8"
            );
            const lines = findMatchingTypes(data.split("\n"));
            expect(makeGroups(lines).length).toBe(100);
        });
    });
    describe("Find Badges", () => {
        test("Function returns an array of matched value charcode", () => {
            const input = [
                "vJrwpWtwJgWrhcsFMMfFFhFp",
                "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
                "PmmdzqPrVvPwwTWBwg",
            ];
            const expected = [114];
            expect(findBadge(input)).toEqual(expected);
        });
        test("Function returns character code of badges", () => {
            const input = [
                [
                    "vJrwpWtwJgWrhcsFMMfFFhFp",
                    "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
                    "PmmdzqPrVvPwwTWBwg",
                ],
            ];
            const expected = [114];
            const data = findBadge(input);

            expect(data).toEqual(expected);
        });
        test("Function returns an array of matched value charcode", () => {
            const data = fs.readFileSync(
                path.resolve(__dirname, "testInput.txt"),
                "utf8"
            );
            const lines = data.split("\n");
            const groups = makeGroups(lines);
            console.log(groups);
            const expected = [114, 90];
            const actual = findBadge(groups);
            expect(actual).toEqual(expected);
        });
        test("Function returns value of badges", () => {
            const data = fs.readFileSync(
                path.resolve(__dirname, "testInput.txt"),
                "utf8"
            );
            const lines = data.split("\n");
            const groups = makeGroups(lines);
            const badgeChars = findBadge(groups);
            const actual = sumMatchingValues(badgeChars);
            expect(actual).toBe(70);
        });
        test("Function returns value of badges", () => {
            const data = fs.readFileSync(
                path.resolve(__dirname, "input.txt"),
                "utf8"
            );
            const lines = data.split("\n");
            const groups = makeGroups(lines);
            const badgeChars = findBadge(groups);
            const actual = sumMatchingValues(badgeChars);
            console.log(actual);
        });
    });
});
