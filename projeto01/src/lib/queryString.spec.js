const { queryString, parse } = require("./queryString");

describe("Object to query string", () => {
    it("should create a valid queryStrig  when an Object is provided", () => {
        const obj = {
            name: "Raffael",
            profession: "Developer",
        };

        expect(queryString(obj)).toBe(`name=Raffael&profession=Developer`);
    });

    it("should create a valid queryString even when an array is passed", () => {
        const obj = {
            name: "Raffael",
            abilities: ["JS", "TDD"],
        };

        expect(queryString(obj)).toBe(`name=Raffael&abilities=JS,TDD`);
    });

    it("should throw an error when an object is passed as value", () => {
        const obj = {
            name: "Raffael",
            abilities: {
                first: "JS",
                second: "TDD",
            },
        };

        expect(() => {
            queryString(obj);
        }).toThrowError();
    });
});

describe("Query string to object", () => {
    it("should convert a query string to object", () => {
        const query = "name=Raffael&profession=Developer";
        const expectedObj = {
            name: "Raffael",
            profession: "Developer",
        };

        expect(parse(query)).toEqual(expectedObj);
    });

    it("should convert a query string of a single key-value pair to object", () => {
        const query = "name=Raffael";
        const expectedObj = {
            name: "Raffael",
        };

        expect(parse(query)).toEqual(expectedObj);
    });

    it("should convert a query string to an object taking care of comma separated values", () => {
        const query = "name=Raffael&abilities=JS,TDD";
        const expectedObj = {
            name: "Raffael",
            abilities: ["JS", "TDD"],
        };

        expect(parse(query)).toEqual(expectedObj);
    });
});
