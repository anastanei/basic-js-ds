const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  #root = null;

  root() {
    return this.#root;
  }

  add(data) {
    const newNode = new Node(data);

    if (this.#root === null) {
      this.#root = newNode;
      return;
    }
    let prevNode = null;
    let currentNode = this.#root;

    while (currentNode !== null) {
      prevNode = currentNode;
      currentNode =
        data > currentNode.data ? currentNode.right : currentNode.left;
    }

    if (data > prevNode.data) {
      prevNode.right = newNode;
    } else {
      prevNode.left = newNode;
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    let currentNode = this.#root;
    while (currentNode.data !== data) {
      currentNode =
        data > currentNode.data ? currentNode.right : currentNode.left;
      if (currentNode === null) {
        return null;
      }
    }
    return currentNode;
  }

  remove(data) {
    let prevNode = null;
    let currentNode = this.#root;
    let isRight = null;

    while (currentNode !== null && currentNode.data !== data) {
      prevNode = currentNode;
      isRight = data > currentNode.data;
      currentNode = isRight ? currentNode.right : currentNode.left;

      if (currentNode === null) {
        return;
      }
    }
    if (currentNode.left === null || currentNode.right === null) {
      const nextNode = currentNode.left || currentNode.right;

      if (isRight) {
        prevNode.right = nextNode;
      } else {
        prevNode.left = nextNode;
      }
      return;
    }

    let minNode = currentNode.right;
    while (minNode.left !== null) {
      minNode = minNode.left;
    }

    this.remove(minNode.data);
    currentNode.data = minNode.data;
  }

  min() {
    let currentHead = this.#root;
    while (currentHead.left !== null) {
      currentHead = currentHead.left;
    }
    return currentHead.data;
  }

  max() {
    let currentHead = this.#root;
    while (currentHead.right !== null) {
      currentHead = currentHead.right;
    }
    return currentHead.data;
  }
}

module.exports = {
  BinarySearchTree
};
