// Stacks
// Stack is a Last In, First Out data structure useful is solving many problems in computer science.

// Introduction
// A stack is a list like data structure which allows three basic operations:

// Insert into the stack. This is known as Push.
// Extract the most recently added. This is called Pop.
// Look at the most recently added element without removing (popping) it. This is called Peek.
// Using the above terminology, we can say that we push elements into the stack and we pop elements from the stack. Stack is known as a Last-In First-Out (LIFO) data structure.

// To support operations in the stack, we always keep track of the topmost element in the stack. Here's how tracking the top element in the stack helps us implement the above operations.

// 1.When we push an element, we update the top to start pointing to the newly added element.
// 2.When we pop an element, we update the top to point to the next most-recently-added element in the stack.
// 3.When we peek, we just return the data pointed by the top.
// 4.Here's a quick animation where we push and pop elements in the stack.

// block function of STACK

function Stack() {
  this._values = []; // the array to store the stack elements
  this._top = -1; // top is -1 when the stack is empty
}

// push function

Stack.prototype.push = function (value) {
  this._top++; // increment the top pointer to create space for the new element
  this._values[this._top] = value; // add the new element in the stack using the top pointer index i.e at the top of the stack
};

// pop function

Stack.prototype.pop = function () {
  if (this._top < 0) {
    return null; // if the stack is empty, return null
  }
  var value = this._values[this._top]; // get the top element in the stack
  this._top--; // decrement the top pointer to remove the top element from the stack
  return value; // return the removed element
};
// peek function

Stack.prototype.peek = function () {
  if (this._top < 0) {
    return null; // if the stack is empty, return null
  }
  return this._values[this._top]; // return the top element in the stack
};
// EXAMPLE
var stack = new Stack();

for (var i = 100; i <= 300; i += 100) {
  console.log("Pushing on stack: " + i);
  stack.push(i);
}
// stack is now [100, 200, 300]

console.log("Top of the stack using Peek: " + stack.peek()); // prints 300
console.log("Pop from stack. Popped element = " + stack.pop()); // prints 300
console.log("Pop from stack. Popped element = " + stack.pop()); // prints 200

// size function

Stack.prototype.size = function () {
  return this._top + 1; // return the number of elements in the stack i.e the top pointer + 1 or the length of the array storing the stack elements
  // return this._values.length; // this is also correct
};

// empty function

Stack.prototype.empty = function () {
  return this._top < 0; // if the top pointer is less than 0, the stack is empty

  // return this._values.length === 0; // this is also correct
};

//Summary
// Stack is a LIFO data structure.
// Stack has 3 basic operations: Push, Pop and Peek.
// Javascript Array is actually a stack and supports Push and Pop.
