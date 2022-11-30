const { location, Submarine } = require("./02.js");

describe("Submarine location", () => {
    test("Submarine class logs direction", () => {
        const sub = new Submarine();

        expect(sub.forwardLocation).toBe(0);
        expect(sub.depth).toBe(0);
    });
    test("Submarine class updates forward location", () => {
        const sub = new Submarine();

        expect(sub.forward(5)).toBe(5);
    });
    test("Submarine class updates depth", () => {
        const sub = new Submarine();
        sub.up(2);
        sub.down(4);
        expect(sub.depth).toBe(2);
    });
    test("Submarine final location is calculated", () => {
        const sub = new Submarine();
        sub.forward(2);
        sub.up(2);
        expect(sub.finalLocation()).toBe(-4);
    });
});

describe("Location", () => {
    test("An input array of instructions updates submarine class", () => {
        const input = "forward 2\nup 2";
        expect(location(input)).toBe(-4);
    });
    test("An input array of instructions updates submarine class", () => {
        const input = "forward 5\ndown 5\nforward 8\nup 3\ndown 8\nforward 2";
        expect(location(input)).toBe(150);
    });
});
