const {
    dataFormatter,
    overlapCount,
    rangeMaker,
    anyOverlapCount,
} = require("./04.js");

const fs = require("fs");
const path = require("path");

describe("Data Formatter", () => {
    test.skip("Function returns an array of object", () => {
        const input = [["2-4,6-8"]];
        const expected = [
            {
                elfOneStart: 2,
                elfOneEnd: 4,
                elfTwoStart: 6,
                elfTwoEnd: 8,
                areaTwoInOne: false,
                areaOneInTwo: false,
            },
        ];
        expect(dataFormatter(input)).toEqual(expected);
    });

    test.skip("Function shows a correct overlap", () => {
        const input = [["2-8,3-7"]];
        const expected = [
            {
                elfOneStart: 2,
                elfOneEnd: 8,
                elfTwoStart: 3,
                elfTwoEnd: 7,
                areaTwoInOne: true,
                areaOneInTwo: false,
            },
        ];
        expect(dataFormatter(input)).toEqual(expected);
    });
    test.skip("Function shows a correct overlap with several pairs", () => {
        const input = [["2-8,3-7"], ["6-6,4-6"], ["2-6,4-8"]];
        const expected = [
            {
                elfOneStart: 2,
                elfOneEnd: 8,
                elfTwoStart: 3,
                elfTwoEnd: 7,
                areaTwoInOne: true,
                areaOneInTwo: false,
            },
            {
                elfOneStart: 6,
                elfOneEnd: 6,
                elfTwoStart: 4,
                elfTwoEnd: 6,
                areaTwoInOne: false,
                areaOneInTwo: true,
            },
            {
                elfOneStart: 2,
                elfOneEnd: 6,
                elfTwoStart: 4,
                elfTwoEnd: 8,
                areaTwoInOne: false,
                areaOneInTwo: false,
            },
        ];
        expect(dataFormatter(input)).toEqual(expected);
    });
    test("Function shows arrays of overlaps", () => {
        const input = [["2-4,6-8"]];
        const expected = [
            {
                elfOneStart: 2,
                elfOneEnd: 4,
                elfTwoStart: 6,
                elfTwoEnd: 8,
                areaTwoInOne: false,
                areaOneInTwo: false,
                ranges: [
                    [2, 3, 4, ".", ".", ".", "."],
                    [".", ".", ".", ".", 6, 7, 8],
                ],
            },
        ];

        expect(dataFormatter(input)).toEqual(expected);
    });
});

describe("Overlap Count", () => {
    test("Function returns 0 if no areas overlap", () => {
        const input = [["2-4,6-8"]];
        const formatted = dataFormatter(input);

        expect(overlapCount(formatted)).toBe(0);
    });
    test("Function returns 1 for a pair that overlap", () => {
        const input = [["2-8,3-7"]];
        const formatted = dataFormatter(input);

        expect(overlapCount(formatted)).toBe(1);
    });
    test("Function accounts for larger numbers", () => {
        const input = [["12-22,18-20"]];
        const formatted = dataFormatter(input);

        expect(overlapCount(formatted)).toBe(1);
    });
    test("Function counts overlap in test input", () => {
        const data = fs.readFileSync(
            path.resolve(__dirname, "testInput.txt"),
            "utf8"
        );
        const dataArray = data.split("\n");
        const output = dataArray.map((element) => {
            return [element];
        });
        const formatted = dataFormatter(output);

        const count = overlapCount(formatted);

        expect(count).toBe(2);
    });
    test("Function counts overlap in larger ranges", () => {
        const data = fs.readFileSync(
            path.resolve(__dirname, "secondTest.txt"),
            "utf8"
        );
        const dataArray = data.split("\n");
        const output = dataArray.map((element) => {
            return [element];
        });
        const formatted = dataFormatter(output);

        const actual = overlapCount(formatted);
        expect(actual).toBe(2);
    });
});

describe("Range Maker", () => {
    test("Function creates a nested array of two arrays of the same length", () => {
        const input = [3, 5, 2, 7];
        const expected = [
            [".", 3, 4, 5, ".", "."],
            [2, 3, 4, 5, 6, 7],
        ];

        expect(rangeMaker(input)).toEqual(expected);
    });
});
describe("Any overlap count", () => {
    test("Function counts any overlap in range", () => {
        const data = fs.readFileSync(
            path.resolve(__dirname, "testInput.txt"),
            "utf8"
        );
        const dataArray = data.split("\n");
        const output = dataArray.map((element) => {
            return [element];
        });
        const formatted = dataFormatter(output);

        expect(anyOverlapCount(formatted)).toBe(4);
    });
});
