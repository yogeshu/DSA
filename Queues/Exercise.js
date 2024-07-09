// function queue

function Queue() {
  this._head = 0;
  this._data = [];
}

// push/ enqueue
Queue.prototype.enqueue = function (value) {
  this._data.push(value);
};
// dequeue without memory cleanup

Queue.prototype.dequeue = function () {
  if (this._head < 0 || this._head >= this._data.length) {
    return null;
  }
  var values = this._values[this._head];
  this._head++;
  return values;
};

// peek

Queue.prototype.peek = function () {
  if (this._head < 0 || this._head >= this._data.length) {
    return null;
  }
  return this._data[this._head];
};

// size

Queue.prototype.size = function () {
  return this._values.length - this._head;
};

// empty
Queue.prototype.empty = function () {
  return this._head >= this._data.length;
};
