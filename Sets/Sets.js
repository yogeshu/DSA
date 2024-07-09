// Sets
// This lesson will look at how to work with Sets in JavaScript. We will see how we can create Sets, access elements of a Set, and various other functionalities on Sets.

// Introduction
// A set is an unordered collection of related members in which no member occurs more than once.  A set that doesnt contain any element is often called null set.

//e.g {1,2,3,4,5} is a set
//e.g {1,2,2,3,4,5} is not a set
//e.g {} is a null set

//The most common set operations are given below:

// Union - This is wherein a new set is constructed by combining the members of one set with the members of another set.

// Intersection - This is wherein a new set is constructed by adding all the members of one set that also exist in a second set.

// Difference - This is wherein a new set is constructed by adding all the members of one set except those that also exist in a second set.

// In js
function Set() {
  this.set = {};
  this.size = 0;
}

// add function

Set.prototype.add = function (value) {
  if (!this.set[value]) {
    this.set[value] = true;
    this.size++;
  }
};
// add using set
Set.prototype.add = function (data) {
  if (!this.set.hasOwnProperty(data)) {
    this.set[data] = "true";
    this.size++;
  }
};
// remove set function

Set.prototype.remove = function (value) {
  if (this.set[value]) {
    delete this.set[value];
    this.size--;
  }
};
// remove function using set
Set.prototype.remove = function (data) {
  if (this.set.hasOwnProperty(data)) {
    delete this.set[data];
    this.size--;
  }
};
// has function or memeber function

Set.prototype.has = function (value) {
  return this.set[value] ? true : false;
};
// has function using set

Set.prototype.has = function (data) {
  return this.set.hasOwnProperty(data);
  //   return this.set[data] ? true : false;
};

// size function
Set.prototype.size = function () {
  return this.size;
};
// size function using set

// union function

Set.prototype.union = function (secondset) {
  var unionset = new Set(); // construct a new set called unionset
  for (var key in this.set) {
    // loop over the members of the first set
    if (this.set.hasOwnProperty(key)) {
      // check if property is a member of the first set exist in the first set
      unionset.add(key); // replicate the member in the unionset set
    }
  }
  for (var key in secondset.set) {
    // loop over the members of the second set so we can add similar members to the unionset set
    if (!unionset.set.hasOwnProperty(key)) {
      unionset.add(key);
    }
  }
  return unionset;
};

// intersection function based on union set

// The intersection of two sets returns a set containing all elements that exist in both sets
Set.prototype.intersect = function (secondset) {
  var inter = new Set();
  for (var key in this.set) {
    if (secondset.set.hasOwnProperty(key)) {
      inter.add(key);
    }
  }
  return inter;
};

Set.prototype.difference = function (secondset) {
  var diff = new Set();
  for (var key in this.set) {
    if (!secondset.set.hasOwnProperty(key)) {
      diff.add(key);
    }
  }
  return diff;
};
// EXAMPLE
// Summary
// A set is a data structure which has the following key properties:
// Elements are unordered.
// No Duplicates are present.
// The add and remove functions are used to add and remove items from the set.
// The union of two sets returns a set containing all elements in either this or the other set.
// The intersection of two sets returns a set containing all elements in both this and the other set.
