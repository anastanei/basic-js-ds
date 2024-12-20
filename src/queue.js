const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  #list = null;
  #head = null;
  #tail = null;
  getUnderlyingList() {
    return this.#list;
  }

  enqueue(value) {
    if (this.#head === null) {
      this.#list = new ListNode(value);
      this.#head = this.#list;
      this.#tail = this.#list;
    } else {
      this.#tail.next = new ListNode(value);
      this.#tail = this.#tail.next;
    }
  }

  dequeue() {
    const top = this.#head;
    this.#list = this.#head.next;
    this.#head = this.#head.next;
    return top.value;
  }
}

module.exports = {
  Queue
};
