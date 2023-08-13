class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class linkedList {
  constructor(head = null) {
    this.head = head;
  }
  getHead() {
    return this.head;
  }
  getTail() {
    if (!this.head) return null;
    let tail = this.head;
    while (tail.next != null) {
      tail = tail.next;
    }
    return tail;
  }
  size() {
    let counter = 0;
    let pointer = this.head;
    while (pointer.next) {
      counter++;
      pointer = pointer.next;
    }
    return counter;
  }
  append(value) {
    // empty Node
    if (!this.head) {
      this.head = new Node(value);
      return this;
    }
    let tail = this.getTail();
    tail.next = new Node(value);
    return tail;
  }

  prepend(value) {
    if (!this.head) {
      this.head = new Node(value);
      return this;
    }
    const prevHead = this.head;
    this.head = new Node(value, prevHead);
  }
  at(index) {
    if (!this.head) return null;
    let pointer = this.head;
    for (let i = 0; i <= index; i++) {
      pointer = pointer.next;
    }
    // In case the index searched doesn't exist
    return pointer ? pointer : null;
  }
  pop() {
    if (!this.head) return null;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let secondLastPointer = this.at(this.size() - 2);
    secondLastPointer.next = null;
  }
  contains(value) {
    if (!this.head) return null;
    let pointer = this.head;
    while (pointer.next) {
      if ((pointer.value = value)) return true;
      pointer = pointer.next;
    }
    // Check for tail
    return pointer.value === value ? true : false;
  }
  find(value) {
    if (!this.head) return null;
    let count = 0;
    let pointer = this.head;
    while (pointer.next) {
      if (pointer.value == value) return count;
      pointer = pointer.next;
      count++;
    }
    // Check for tail
    return pointer.value === value ? count : null;
  }
  toString() {
    if (!this.head) return null;
    let pointer = this.head;
    let str = '';
    while (pointer.next) {
      str = `${str} (${pointer.value}) ->`;
      pointer = pointer.next;
    }
    // Adding tail
    return `${str} (${pointer.value}) -> (null)`;
  }
  insertAt(value, index) {
    const node = new Node(value);
    if (!this.head) return node;
    // prepend if index < 0;
    if (index === 0) {
      this.prepend(value);
      return this.toString();
    }
    // append if index > size
    if (index > this.size() - 1) {
      this.append(value);
      return this.toString();
    }
    let prev = this.at(index - 1);
    node.next = prev.next;
    prev.next = node;
    return this.toString();
  }
  removeAt(index) {
    if (!this.head) return null;
    if (index < 1) {
      this.head = this.head.next;
    } else if (index <= this.size() - 1) {
      let prevNode = this.at(index - 1);
      let pointerToRemove = prevNode.next;
      prevNode.next = pointerToRemove.next;
    }
  }
}

const list = new linkedList();
list.prepend(2);
list.prepend(1);
list.append(3);
list.append(4);
list.append(5);
list.pop();

console.log(list.toString());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.size());
console.log(list.at(2));
console.log(list.contains(1));
console.log(list.find(4));
console.log(list.toString());
list.insertAt(999, 1);
console.log(list.toString());
list.removeAt(1);
console.log(list.toString());
