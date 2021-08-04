class EmptyError extends Error {}

class OverflowError extends Error {}

class Stack {
  #capacity = 0;

  #nodes = [];

  constructor(capacity = 10) {
    this.#capacity = capacity;
  }

  capacity() {
    return this.#capacity;
  }

  size() {
    return this.#nodes.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  isFull() {
    return this.capacity() === this.size();
  }

  push(node) {
    if (this.isFull()) {
      throw new OverflowError('スタックが満杯でpushできません');
    }
    this.#nodes.push(node);
  }

  pop() {
    if (this.isEmpty()) {
      throw new EmptyError('スタックが空でpopできません');
    }
    return this.#nodes.pop();
  }

  toString() {
    return `<Stack:[${this.#nodes}]>`;
  }
}

module.exports = {
  Stack,
  EmptyError,
  OverflowError,
};
