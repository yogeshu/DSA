// write function of stack in js

function Stack() {
  this._top = -1;
  this._values = [];
}

// push function
Stack.prototype.push = function (value) {
  this._top++;
  this._values[this._top] = value;
};
// pop
stack.prototype.pop = function () {
  if (this._top < 0) {
    return null;
  }
  var value = this._values[this._top];
  this._top--;
  return value;
};

// peek
stack.prototype.peek = function () {
  if (this._top < 0) {
    return null;
  }
  return this._values[this._top];
};

// size
stack.prototype.size = function () {
  return this._top + 1;
};

// empty
stack.prototype.empty = function () {
  return this._top < 0;
};
