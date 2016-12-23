function Queue(capacity) {
  this.capacity = capacity || Infinity;
  this.storage = {};
  this.head = 0;
  this.tail = 0;
}

Queue.prototype.enqueue = function(value) {
  if (this.count() < this.capacity) {
    this.tail += 1;
    this.storage[this.tail] = value;
    return this.count()
  }

  return 'Max capacity already reached.  Remove element before adding a new one.';
}

Queue.prototype.deque = function() {
  if (this.head === this.tail) {
    return 'Your que is currently empty'
  }

  var value = this.storage[this.head + 1];

  delete this.storage[this.head + 1]
  this.head += 1;

  return value;
}

Queue.prototype.peek = function() {
  return this.storage[this.head + 1];
}

Queue.prototype.count = function() {
  return this.tail - this.head;
}

Queue.prototype.contains = function(value) {
  for (var position in this.storage) {
    if (this.storage[position] === value ){
      return true
    }
  }

  return false;
}

var que = new Queue(3)
console.log(que);

que.enqueue('first');
console.log(que);
console.log(que.enqueue(2));
console.log(que.enqueue(3));
console.log(que.enqueue(4), 'Max Capacity Error');

console.log(que);
console.log(que.count());


console.log(que.peek());
console.log(que.contains('first'));
console.log(que.contains(2));
console.log(que.contains(4), 'should be false');

console.log(que);
console.log(que.deque());
console.log(que);
