function PriorityQueue () {
    this.collection = [];
    this.printCollection = function() {
      console.log(this.collection);
    };
    // Only change code below this line
    this.enqueue = function(item){
        var isAdded = false;
        for (var i = 0; i < this.collection.length; i++) {
            var currentValue = this.collection[i];
            if(currentValue[1] > item[1]) {
                this.collection.splice(i, 0, item);
                isAdded = true;
                break;
            }
        }

        if(!isAdded){
            this.collection.push(item);
        }
    }
    this.dequeue = function(){
        var removeFirst = this.collection.shift();
        return removeFirst[0];
    }
    this.size = function(){
        return this.collection.length;
    }
    this.front = function(){
        return this.collection[0];
    }
    this.isEmpty = function(){
        return this.collection.length === 0;
    }

    // Only change code above this line
}
