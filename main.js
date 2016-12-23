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
