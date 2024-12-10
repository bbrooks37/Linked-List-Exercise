const CircularArray = require("../circular-array");

describe("CircularArray", function() {
    let circularArray;

    beforeEach(() => {
        circularArray = new CircularArray();
    });

    describe("addItem", function() {
        it("should add an item to the array", function() {
            circularArray.addItem(1);
            expect(circularArray.array).toEqual([1]);
        });
    });

    describe("getByIndex", function() {
        it("should return the item at the given index", function() {
            circularArray.addItem(1);
            circularArray.addItem(2);
            expect(circularArray.getByIndex(0)).toBe(1);
            expect(circularArray.getByIndex(1)).toBe(2);
        });

        it("should return null if the index is out of bounds", function() {
            expect(circularArray.getByIndex(0)).toBeNull();
        });
    });

    describe("rotate", function() {
        it("should rotate the array by the given number of steps", function() {
            circularArray.addItem(1);
            circularArray.addItem(2);
            circularArray.addItem(3);
            circularArray.rotate(1);
            expect(circularArray.getByIndex(0)).toBe(2);
            expect(circularArray.getByIndex(1)).toBe(3);
            expect(circularArray.getByIndex(2)).toBe(1);
        });

        it("should handle negative steps", function() {
            circularArray.addItem(1);
            circularArray.addItem(2);
            circularArray.addItem(3);
            circularArray.rotate(-1);
            expect(circularArray.getByIndex(0)).toBe(3);
            expect(circularArray.getByIndex(1)).toBe(1);
            expect(circularArray.getByIndex(2)).toBe(2);
        });
    });

    describe("printArray", function() {
        it("should print the array in the correct order", function() {
            console.log = jest.fn();
            circularArray.addItem(1);
            circularArray.addItem(2);
            circularArray.addItem(3);
            circularArray.printArray();
            expect(console.log).toHaveBeenCalledWith(1);
            expect(console.log).toHaveBeenCalledWith(2);
            expect(console.log).toHaveBeenCalledWith(3);
        });
    });
});
