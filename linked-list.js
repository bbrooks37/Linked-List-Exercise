/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }

    this.length++;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) return null;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    if (newTail === current) {
      this.head = null;
      this.tail = null;
    } else {
      newTail.next = null;
      this.tail = newTail;
    }

    this.length--;
    return current.val;

  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) return null;

    let currentHead = this.head;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead.val;

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }

    let current = this.head;
    let count = 0;

    while (current !== null && count < idx) {
      current = current.next;
      count++;
    }

    return current ? current.val : null;

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }

    let current = this.head;
    let count = 0;

    while (current !== null && count < idx) {
      current = current.next;
      count++;
    }

    if (current) {
      current.val = val;
    }

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      return null;
    }

    if (idx === 0) {
      this.unshift(val);
      return;
    }

    if (idx === this.length) {
      this.push(val);
      return;
    }

    let newNode = new Node(val);
    let current = this.head;
    let count = 0;

    while (count < idx - 1) {
      current = current.next;
      count++;
    }

    newNode.next = current.next;
    current.next = newNode;
    this.length++;

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }

    if (idx === 0) {
      return this.shift();
    }

    let current = this.head;
    let count = 0;

    while (count < idx - 1) {
      current = current.next;
      count++;
    }

    let removedNode = current.next;
    current.next = removedNode.next;

    if (removedNode === this.tail) {
      this.tail = current;
    }

    this.length--;
    return removedNode.val;

  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let total = 0;
    let current = this.head;

    while (current) {
      total += current.val;
      current = current.next;
    }

    return total / this.length;
    
  }
}

module.exports = LinkedList;
