Array.prototype.myReduce = function(cb, initialValue) {
  var result = initialValue;
  for(var i=0; i<this.length;i++) {
    result = cb(result, this[i], i, this);
  }
  return result;
}

let a = [1,2,3,4]
