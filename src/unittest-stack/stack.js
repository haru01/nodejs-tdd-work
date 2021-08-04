class EmptyError extends Error {
  constructor(message) {
    super(message);
  }
}

class OverflowError extends Error {
  constructor(message) {
    super(message);
  }
}

class Stack {
  #capacity = 0;
  #nodes = []

  constructor(capacity=10) {
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

// eslint-disable-next-line no-undef
module.exports = {
  Stack,
  EmptyError,
  OverflowError
};
