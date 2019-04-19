var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let name = firstAndLast;

  this.getFirstName = function() {
    return name.split(" ")[0];
  }

  this.getLastName = function() {
    return name.split(" ")[1];
  }

  this.getFullName = function() {
    return name;
  }

  this.setFirstName = function(first) {
    name = first + " " + name.split(" ")[1];
  }

  this.setLastName = function(last) {
    name =  name.split(" ")[0] + " " + last;
  }

  this.setFullName = function(firstAndLast) {
    name =  firstAndLast;
  }
};

var bob = new Person('Bob Ross');
bob.getFullName();
