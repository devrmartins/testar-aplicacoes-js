const queryString = require("./queryString")

describe("Object to query string", () => {
    it("should create a valid queryStrig  when an Object is provided", () => {
        const obj = {
            name: "Raffael",
            profession: "Developer"
        }

        expect(queryString(obj))
        .toBe(`name=Raffael&profession=Developer`)
    })
})