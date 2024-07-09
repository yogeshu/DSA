// Queues
// Queue is a FIFO data structure. In this lesson, we look at Queues and how can they be implemented in Javascript.

// Introduction
// A queue is a linear collection where items are inserted at the end and are removed from the front. Hence queue is a FIFO (first-in first-out) data structure. It supports three basic operations: Insert and Remove.

// Inserting into the queue is called Enqueue.
// Extracting from the queue is called Dequeue.
// Look at the top element in the queue (the one that will be removed on Dequeue). It is called Peek.

// Queue is often compared and studied along with Stack which is a LIFO data structure.

// function of Queue
function Queue() {
  this._head = 0; // head pointer
  this._values = []; // array to store the queue elements
}
// enqueue function
Queue.prototype.enqueue = function (value) {
  this._values.push(value); // add the new element at the end of the queue
};

// dequeue function
Queue.prototype.dequeue = function () {
  if (this._head >= this._values.length) {
    return null; // if the queue is empty, return null
  }
  var value = this._values[this._head]; // get the first element in the queue
  this._head++; // increment the head pointer to remove the first element
  return value; // return the removed element
};

// peek function
Queue.prototype.peek = function () {
  if (this._head >= this._values.length) {
    return null; // if the queue is empty, return null
  }
  return this._values[this._head]; // return the first element in the queue
};

// EXAMPLE
var queue = new Queue();
console.log("Enqueue 100");
queue.enqueue(100);

console.log("Enqueue 200");
queue.enqueue(200);

console.log("Dequeue: " + queue.dequeue());
console.log("Dequeue: " + queue.dequeue());
console.log("Dequeue: " + queue.dequeue());

// clean up function
Queue.prototype._cleanup = function () {
  if (this._head > 0) {
    this._values = this._values.slice(this._head); // remove the elements before the head pointer
    this._head = 0; // reset the head pointer
  }
};

// size function

Queue.prototype.size = function () {
  return this._values.length - this._head; // return the number of elements in the queue i.e the length of the array storing the queue elements minus the head pointer
};
//example
var queue = new Queue();
console.log("Enqueue 100");
queue.enqueue(100);

console.log("Enqueue 200");
queue.enqueue(200);

console.log("Size of the queue: " + queue.size()); // prints 2

// empty function

Queue.prototype.empty = function () {
  return this._head >= this._values.length; // if the head pointer is greater than or equal to the length of the array storing the queue elements, the queue is empty
};

// memeory management
// The queue is a linear data structure that can be implemented using an array. The array can be resized to accommodate more elements. However, if the array is resized, the elements have to be copied to the new array. This can be an expensive operation if the queue is large. To avoid this, we can use a circular array to implement the queue. In a circular array, the head and tail pointers wrap around the array when they reach the end. This way, we can reuse the space in the array without copying the elements.

// A queue is a first-in-first-out (FIFO) data structure.
// It supports Enqueue for insertion and Dequeue for the extraction of items.
// Peek operation returns the topmost item in the queue.
// Javascript array supports Enqueue (Array.push) and Dequeue (Array.shift).
// Implementing dequeue using Array.shift can be slow.
// Dequeue operation should do periodic cleanup to save memory.
