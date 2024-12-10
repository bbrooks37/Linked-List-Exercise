const DoublyLinkedList = require("../doubly-linked-list");

describe("push", function() {
    let list;

    beforeEach(() => {
        list = new DoublyLinkedList();
    });

    test("push method adds a new node to the end of the list", () => {
        list.push(1);
        expect(list.head.val).toBe(1);
        expect(list.tail.val).toBe(1);
        expect(list.length).toBe(1);

        list.push(2);
        expect(list.head.val).toBe(1);
        expect(list.tail.val).toBe(2);
        expect(list.length).toBe(2);
    });

    test("push method updates the next and prev pointers correctly", () => {
        list.push(1);
        list.push(2);
        list.push(3);

        expect(list.head.val).toBe(1);
        expect(list.head.next.val).toBe(2);
        expect(list.head.next.next.val).toBe(3);
        expect(list.tail.val).toBe(3);
        expect(list.tail.prev.val).toBe(2);
        expect(list.tail.prev.prev.val).toBe(1);
    });

    // Add more test cases for other methods here...
});
