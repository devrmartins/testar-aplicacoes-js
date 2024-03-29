import { sum } from "./calculator";

it("should sum 2 and 2 and the result must be 4", () => {
    return expect(sum(2,2)).toBe(4);
})

it("should sum 2 and 2 even if one of them is a string the result must be 4", () => {
    return expect(sum("2",2)).toBe(4);
})

it("should throw an error if what is provided to the method not be a number", () => {
    return expect(() => {
        sum('',2);
    }).toThrowError()
})