class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }

  peek() {
    return this.top.data;
  }

  isEmpty() {
    if (this.top === null) return true;
  }

  display() {
    return this;
  }

  remove(data) {
    if (!this.top) {
      return null;
    }

    if (this.top.value === data) {
      this.top = this.top.next;
      return;
    }

    let currNode = this.top;
    let previousNode = this.top;

    while (currNode !== null && currNode.data !== data) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }
    if (this.late) {
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

// functions / questions

const starTrek = new Stack();

starTrek.push("Kirk");
starTrek.push("Spock");
starTrek.push("McCoy");
starTrek.push("Scotty");

starTrek.remove("McCoy");

//console.log(starTrek);

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const stack = new Stack();

  s.split("").map((x) => {
    const nodey = new _Node(x);
    stack.push(nodey);
  });

  let currNode = stack.top;
  let previousNode = stack.top;
  let arr = [];

  while (currNode !== null && currNode.data !== "") {
    arr.push(currNode.data.data);
    previousNode = currNode;
    currNode = currNode.next;
  }

  return arr.join("") === s;
}

//console.log(is_palindrome("DAD"));
