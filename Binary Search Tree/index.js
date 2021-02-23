// In-order:- Traverse the left visit the root node and then traverse the right
// Pre-order:- Visit the root node traverse the left and then traverse the right
//Post-order:- Traverse the left and then traverse teh right and then visit the root node

function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function (value) {
  if (value <= this.value) {
    if (!this.left) this.left = new BST(value);
    else this.left.insert(value);
  } else if (value > this.value) {
    if (!this.right) this.right = new BST(value);
    else this.right.insert(value);
  }
};

BST.prototype.contains = function (value) {
  if (value === this.value) return true;
  else if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
  } else if (value > this.value) {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};

BST.prototype.depthFirstTraversal = function (itteratorFunc, order) {
  if (order === "pre-order") itteratorFunc(this.value);
  if (this.left) this.left.depthFirsrTraversal(itteratorFunc, order);
  if (order === "in-order") itteratorFunc(this.value);
  if (this.right) this.right.depthFirsrTraversal(itteratorFunc, order);
  if (order === "post-order") itteratorFunc(this.value);
};

BST.prototype.breathFirstTraversal = function (itteratorFunc) {
  const queue = [this];
  while (queue.length) {
    let treeNode = queue.shift();
    itteratorFunc(treeNode);
    if (treeNode.left) queue.push(treeNode.left);
    if (treeNode.right) queue.push(treeNode.right);
  }
};

BST.prototype.getMinVal = function () {
  if (this.left) return this.left.getMinVal();
  else return this.value;
};

BST.prototype.getMaxVal = function () {
  if (this.right) return this.right.getMaxVal();
  else return this.value;
};
const bst = new BST(50);
bst.insert(30);
bst.insert(10);
bst.insert(70);

console.log("MIN:" + bst.getMinVal());
console.log("MAX:" + bst.getMaxVal());

// bst.breathFirstTraversal(log);

// function log(node) {
//   console.log(node.value);
// }

//Big O notation of the above program has O(log n)  (Logarithmic time complexity)
