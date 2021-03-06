describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.depthFirstLog).to.be.a("function");
  });

  it('should insert values at the correct location in the tree', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(1);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    binarySearchTree.insert(8);
    binarySearchTree.depthFirstLog(func);
    // console.log(array);
    expect(array).to.eql([5,2,1,3,7,6,8]);
  });

  it('EXTRA: should execute a callback on every value in a tree using "breadthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(1);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    binarySearchTree.insert(8);
    binarySearchTree.insert(0);
    binarySearchTree.insert(9);
    binarySearchTree.breadthFirstLog(func);
    // console.log(array);
    expect(array).to.eql([5,2,7,1,3,6,8,0,9]);
  });

  it('EXTRA: should rotate tree', function() {
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(2);
    binarySearchTree.insert(4);
    binarySearchTree = binarySearchTree._rotate('right');
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([3,2,5,4,7]);
  });

  it('MEGAEXTRA: should rebalance tree', function() {
    var bst = makeBinarySearchTree(50);
    bst = bst.insert(17, true);
    bst = bst.insert(76, true);
    bst = bst.insert(9, true);
    bst = bst.insert(23, true);
    bst = bst.insert(54, true);
    bst = bst.insert(14, true);
    bst = bst.insert(19, true);
    bst = bst.insert(72, true);
    bst = bst.insert(12, true);
    bst = bst.insert(67, true);
    console.log(bst);
  });

});
