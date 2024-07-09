// Dictionary is a data structure that consists of key-value pairs. It's a data structure where a key is associated with a value. Hence, they are also called associative arrays. Dictionaries provide lookups on their keys.

//We are not going to handle duplicates in our dictionary. Most implementations of associative arrays don't support duplicates as it is mostly thought of as a 1:1 relationship between a key and a value instead of a 1:N relationship. However, if you are in a situation where you need to associate duplicate values to a key, it's not that difficult to implement either.

// Key Types
// For simplicity, we are going only to accept strings or integers as keys. Why not other types of keys? We can do it, but we have to then define a standard way to compare and equate objects. For now, we'll keep it simple as Javascript already provides a way to compare integers and strings.

// We are also going to consider an integer and its string representation as the same key e.g. 45 and "45" will refer to the same key.

// Why don't we use Javascript Object?
// You are right. JavaScript object is already an associative array.
//  Why don't we use it? We will use it internally but with our implementation,
//   we can provide cleaner methods around our Dictionary
//  e.g. we can provide a length method. We can also provide methods to enumerate keys and values.

// Dictionary
function Dictionary() {
  this._data = {};
  this._length = 0;
}

// add function

Dictionary.prototype.add = function (key, value) {
  var keyType = typeof key;

  if (keyType !== "string" && keyType !== "number") {
    throw new Error("Invalid key type. Only string or number is allowed.");
  }
  if (this._data.hasOwnProperty(key)) {
    throw new Error("Key already exists");
  }
  this._data[key] = value;
  this._length++;
};

// look up in Dictionary
Dictionary.prototype.find = function (key) {
  if (key === null) {
    return undefined;
  }

  var keyType = typeof key;
  if (keyType !== "string" && keyType !== "number") {
    return undefined;
  }

  if (this._data.hasOwnProperty(key)) {
    return this._data[key];
  }

  return undefined;
};

//  remove / delete function

Dictionary.prototype.remove = function (key) {
  if (this._data.hasOwnProperty(key)) {
    delete this._data[key];
    this._length--;
  }
};

// e.g
var dict = new Dictionary();
dict.add("alice", 123);
dict.add("eve", 456);
dict.add("bob", 789);

console.log("dict.find('alice') = " + dict.find("alice")); // t
console.log("dict.find('foo') = " + dict.find("foo")); // undefined
// if there is no such key, it will return undefined

// size / length function

Dictionary.prototype.size = function () {
  // Implement this function
  return this._length;
};

///Summary
// Dictionary is a collection of key/value pairs.

// It's also called an associative array as every key is associated with a value.

// Some dictionary implementations support multiple values associated with a single key.

// Some dictionary implementations allow overwriting the value associated with the key. Others don't allow this in which case you would have to first delete the key and insert it again with the new value.
