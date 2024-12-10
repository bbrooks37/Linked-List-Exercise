const LinkedList = require('./linked-list.js');

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function mergeSortedLists(list1, list2) {
  let dummy = new Node(0);
  let tail = dummy;

  let a = list1.head;
  let b = list2.head;

  while (a !== null && b !== null) {
    if (a.val < b.val) {
      tail.next = a;
      a = a.next;
    } else {
      tail.next = b;
      b = b.next;
    }
    tail = tail.next;
  }

  if (a !== null) tail.next = a;
  if (b !== null) tail.next = b;

  let mergedList = new LinkedList();
  mergedList.head = dummy.next;
  // Update length and tail
  let current = mergedList.head;
  while (current) {
    mergedList.length++;
    if (!current.next) {
      mergedList.tail = current;
    }
    current = current.next;
  }

  return mergedList; // Return the merged list
}

module.exports = mergeSortedLists;
