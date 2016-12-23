// create a stack with push, pop and length/size
// strucutre while using strings.

function Stack(data) {
 this.storage = '';
}

Stack.prototype.push = function(val){
  if (typeof val === 'string'){
      if (this.storage === '') {
        this.storage = val;
        return val;
      }

      this.storage = this.storage.concat(`||${val}`);
      return val;
  }
  else {
    return 'Please insert a string'
  }
}

Stack.prototype.pop = function() {
  var data = this.storage.split('||');
  var length = data.length;

  this.storage = '';
  for (i = 0; i < length - 1; i++) {
    this.storage = this.storage.concat(data[i]);
  }
  return data[length - 1];
}

Stack.prototype.size = function() {
  if (this.storage === '') {
    return 0;
  }

  var data = this.storage.split('||');
  return data.length;
}



var myStack = new Stack;

// should use mocha and chai, but just trying to move quickly...

console.log(myStack.size())
console.log(myStack);
console.log(myStack.push('testing'), 'add testing');
console.log(myStack.push('testing2'), 'add testing');
console.log(myStack, 'mystack');
console.log(myStack.size(), 'should be 2')
console.log(myStack.pop(), 'popped off');
console.log(myStack.size(), 'should be 1');
console.log(myStack)


// Stack using an object

function Stack2(capacity) {
  this.capacity = capacity || Infinity;
  this.storage = {};
  this.count = 0;
}

Stack2.prototype.push = function(value) {
  if (this.count < this.capacity) {
    this.storage[this.count] = value;
    this.count += 1;
    return this.count;
  }
  return 'Capacity at max, please remove an item before adding a new one.'
}

Stack2.prototype.pop = function() {
  this.count -= 1;
  var value = this.storage[this.count];
  delete this.storage[this.count];
  if (this.count < 0) {
    this.count = 0;
  };
  return value;
}

Stack2.prototype.peek = function() {
  return this.storage[this.count -1];
}

Stack.prototype.count = function() {
  return this.count;
}

var myStack2 = new Stack2(3);
console.log(myStack2.push('a'), 'should be 1');
console.log(myStack2.push('b'), 'should be 2');
console.log(myStack2.push('c'), 'should be 3');
console.log(myStack2.push('d'), '--should be Max capacity reached message');
console.log(myStack2.pop(), 'should be c');
