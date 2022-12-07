const { createRange, findUniqueString, findMarker } = require("./06");

describe("createRange", () => {
    test("Function breaks down string into four character chunks", () => {
        const input = "abcdefg";
        const expected = ["abcd", "bcde", "cdef", "defg"];
        expect(createRange(input)).toEqual(expected);
    });
});

describe("findUniqueString", () => {
    test("Function returns the index of the range if string is has unique characters", () => {
        const input = "mjqjpqm";
        const ranges = createRange(input);
        const actual = findUniqueString(ranges);

        expect(actual).toBe(3);
    });
    test("Function stops at the first unique string", () => {
        const input = "mjqjpqmgbljsphdztnvjfqwrcgsmlb";
        const ranges = createRange(input);
        const actual = findUniqueString(ranges);
        console.log(ranges);
        expect(actual).toBe(3);
    });
});

describe("findMarker", () => {
    test("Function returns the index of the input where the first marker is found", () => {
        const input = "mjqjpqmgbljsphdztnvjfqwrcgsmlb";
        const ranges = createRange(input);
        const uniqueString = findUniqueString(ranges);
        const actual = findMarker(uniqueString);

        expect(actual).toBe(7);
    });
    test("Function returns the index of the input where the first marker is found", () => {
        const input = "bvwbjplbgvbhsrlpgdmjqwftvncz";
        const ranges = createRange(input);
        const uniqueString = findUniqueString(ranges);
        const actual = findMarker(uniqueString);

        expect(actual).toBe(5);
    });
    test("Function returns the index of the input where the first marker is found", () => {
        const input = "nppdvjthqldpwncqszvftbrmjlhg";
        const ranges = createRange(input);
        const uniqueString = findUniqueString(ranges);
        const actual = findMarker(uniqueString);

        expect(actual).toBe(6);
    });
    test("Function returns the index of the input where the first marker is found", () => {
        const input = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg";
        const ranges = createRange(input);
        const uniqueString = findUniqueString(ranges);
        const actual = findMarker(uniqueString);

        expect(actual).toBe(10);
    });
    test("Function returns the index of the input where the first marker is found", () => {
        const input = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw";
        const ranges = createRange(input);
        const uniqueString = findUniqueString(ranges);
        const actual = findMarker(uniqueString);

        expect(actual).toBe(11);
    });
});
