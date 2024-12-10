const mergeSortedLists = require("../merge-sorted-lists");
const LinkedList = require("../linked-list");

describe("mergeSortedLists", function() {
  // Add your test cases for mergeSortedLists function here...
    test("merges two empty lists", function() {
        const list1 = new LinkedList();
        const list2 = new LinkedList();
        const mergedList = mergeSortedLists(list1, list2);
        expect(mergedList.head).toBeNull();
        expect(mergedList.length).toBe(0);
    });

    test("merges one empty list with a non-empty list", function() {
        const list1 = new LinkedList();
        const list2 = new LinkedList();
        list2.push(1);  // Use push instead of append
        list2.push(3);  // Use push instead of append
        list2.push(5);  // Use push instead of append
        const mergedList = mergeSortedLists(list1, list2);
        expect(mergedList.head.val).toBe(1);
        expect(mergedList.length).toBe(3);
    });

    test("merges two non-empty lists", function() {
        const list1 = new LinkedList();
        list1.push(1);  // Use push instead of append
        list1.push(4);  // Use push instead of append
        list1.push(6);  // Use push instead of append
        const list2 = new LinkedList();
        list2.push(2);  // Use push instead of append
        list2.push(3);  // Use push instead of append
        list2.push(5);  // Use push instead of append
        const mergedList = mergeSortedLists(list1, list2);
        expect(mergedList.head.val).toBe(1);
        expect(mergedList.head.next.val).toBe(2);
        expect(mergedList.head.next.next.val).toBe(3);
        expect(mergedList.length).toBe(6);
    });

    test("merges lists with duplicate values", function() {
        const list1 = new LinkedList();
        list1.push(1);  // Use push instead of append
        list1.push(3);  // Use push instead of append
        list1.push(5);  // Use push instead of append
        const list2 = new LinkedList();
        list2.push(1);  // Use push instead of append
        list2.push(3);  // Use push instead of append
        list2.push(5);  // Use push instead of append
        const mergedList = mergeSortedLists(list1, list2);
        expect(mergedList.head.val).toBe(1);
        expect(mergedList.head.next.val).toBe(1);
        expect(mergedList.head.next.next.val).toBe(3);
        expect(mergedList.length).toBe(6);
    });
});
