/*function createFunctions(n) {
  var callbacks = [];

  for (var i=0; i<n; i++) {
    callbacks.push(function() {
      return i;
    });
  }
  
  return callbacks;
}*/

function createFunctions(n) {
  var callbacks = [];

  for (var i = 0; i < n; i++) {
    // Create a new function scope with an IIFE
    (function(index) {
      callbacks.push(function() {
        return index;
      });
    })(i);
  }

  return callbacks;
}


module.exports = createFunctions;

