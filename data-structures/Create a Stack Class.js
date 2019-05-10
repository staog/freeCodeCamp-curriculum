function Stack() { 
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Only change code below this line
    this.push = function(item) {
        collection.push(item);
    };
    this.pop = function() {
        return collection.pop();
    }
    this.peek = function() {
        return collection[0];
    }
    this.isEmpty = function() {
        return collection.length === 0;
    }
    this.clear = function() {
        return collection.length = 0;
    }
    // Only change code above this line
}
