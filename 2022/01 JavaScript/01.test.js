const { calorieCounter, inputPrep, sumTopThree } = require("./01");
describe("Input prep", () => {
    test("Function separates strings into arrays on a space", () => {
        input = ["10", "2", "", "4", "2"];
        expected = [
            [10, 2],
            [4, 2],
        ];
        expect(inputPrep(input)).toEqual(expected);
    });
});

describe("Calorie Counter", () => {
    test("Function returns a number", () => {
        expect(typeof calorieCounter([[10]])).toBe("number");
    });
    test("Function sums up array of numbers", () => {
        input = [[10, 12, 2]];
        expect(calorieCounter(input)).toBe(24);
    });
    test("Function returns highest sum of array of array of numbers", () => {
        input = [
            [10, 2],
            [2, 3],
        ];
        expect(calorieCounter(input)).toBe(12);
    });
});

describe("Sum Top Three", () => {
    test("Function sums input when passed three items", () => {
        const input = [[1000, 2000, 3000], [4000], [5000, 6000]];
        const expected = 21000;

        expect(sumTopThree(input)).toBe(expected);
    });
    test("Function sums top three when passed a larger input", () => {
        const input = [
            [1000, 2000, 3000],
            [4000],
            [5000, 6000],
            [7000, 8000, 9000],
            [10000],
        ];
        const expected = 45000;

        expect(sumTopThree(input)).toBe(expected);
    });
});
