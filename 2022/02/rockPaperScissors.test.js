const { rockPaperScissors, inputPrep } = require("./rockPaperScissors");

describe("Input modifier", () => {
    test("Function returns an array of pairs", () => {
        input = `A Y
B X
C Z`;
        const actual = inputPrep(input);
        const expected = [
            ["A", "Y"],
            ["B", "X"],
            ["C", "Z"],
        ];
        expect(actual).toEqual(expected);
    });
});

describe("Boulder, Parchment, Shears", () => {
    test("Function returns 1 with a rock and a loosing hand", () => {
        const input = "B X";
        const preparedInput = inputPrep(input);
        const expected = 1;
        const actual = rockPaperScissors(preparedInput);
        expect(actual).toBe(expected);
    });
    test("Function returns 2 with paper and a loosing hand", () => {
        const input = "C Y";
        const preparedInput = inputPrep(input);
        const expected = 2;
        const actual = rockPaperScissors(preparedInput);
        expect(actual).toBe(expected);
    });
    test("Function returns 3 with scissors and a loosing hand", () => {
        const input = "A Z";
        const preparedInput = inputPrep(input);
        const expected = 3;
        const actual = rockPaperScissors(preparedInput);
        expect(actual).toBe(expected);
    });
    test("Function returns 4 with paper and a draw", () => {
        const input = "B Y";
        const preparedInput = inputPrep(input);
        const expected = 5;
        const actual = rockPaperScissors(preparedInput);
        expect(actual).toBe(expected);
    });
    test("Function returns 7 with rock and a win", () => {
        const input = "C X";
        const preparedInput = inputPrep(input);
        const expected = 7;
        const actual = rockPaperScissors(preparedInput);
        expect(actual).toBe(expected);
    });
    test("Function returns 15 over three rounds", () => {
        const input = `A Y
B X
C Z`;
        const preparedInput = inputPrep(input);
        const expected = 15;
        const actual = rockPaperScissors(preparedInput);
        expect(actual).toBe(expected);
    });
});
