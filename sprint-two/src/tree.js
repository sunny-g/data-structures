var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var newTree = makeTree(value);
  newTree.parent = this;
  this.children.push(newTree);
};

treeMethods.contains = function(target){
  var found = false;
  var walkTree = function(tree) {
    if (tree.value === target) {
      found = true;
    } else {
      _.each(tree.children, function(branch) {
        walkTree(branch);
      });
    }
  };

  walkTree(this);
  return found;

  // return this.value === target? true :
  // this.children.some(function(child){
  //   return child.contains(target);
  // });
};

// treeMethods.countLeaves = function() {
//   return this.children.reduce(function(sum, child){
//     return sum + child.countLeaves();
//   }, this.children.length? 0: 1);
// };

// treeMethods.countAnything = function(testFn){
//   return this.children.reduce(function(sum, child){
//     return sum + child.countAnything(testFn);
//   }, testFn(this));
// };

treeMethods.removeFromParent = function() {
  this.parent.children = _.without(this.parent.children, this);
  this.parent = null;
  return this;
};

treeMethods.traverse = function(callback) {
  callback(this.value);
  _.each(this.children, function(child) {
    child.traverse(callback);
  });

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
