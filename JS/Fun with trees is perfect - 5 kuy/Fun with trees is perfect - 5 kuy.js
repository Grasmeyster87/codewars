class TreeNode {

  constructor(left = null, right = null) {
    this.left = left;
    this.right = right;
  }

  static isPerfect(root) {
    // Якщо дерево порожнє - воно вважається ідеальним (глибина 0)
    if (!root) return true;

    // Допоміжна функція, яка повертає глибину дерева, якщо воно ідеальне,
    // або -1, якщо воно НЕ ідеальне.
    const getPerfectDepth = (node) => {
      // Базовий випадок: якщо вузла немає, це "ідеальне" піддерево висотою 0
      if (!node) return 0;

      const leftDepth = getPerfectDepth(node.left);
      const rightDepth = getPerfectDepth(node.right);

      // Якщо хоча б одне піддерево не ідеальне (повернуло -1)
      // АБО якщо глибини лівого і правого піддерев не рівні
      if (leftDepth === -1 || rightDepth === -1 || leftDepth !== rightDepth) {
        return -1;
      }

      // Якщо все добре, повертаємо глибину поточного вузла (+1 до дітей)
      return leftDepth + 1;
    };

    // Якщо функція повернула будь-що крім -1, дерево ідеальне
    return getPerfectDepth(root) !== -1;
  }
  
  static leaf() {
    return new TreeNode();
  }
  
  static join(left, right) {
    return new TreeNode().withChildren(left, right);
  }
  
  withLeft(left) {
    this.left = left;
    return this;
  }

  withRight(right) {
    this.right = right;
    return this;
  }

  withChildren(left, right) {
    this.left = left;
    this.right = right;
    return this;
  }

  withLeftLeaf() {
    return this.withLeft(TreeNode.leaf());
  }

  withRightLeaf() {
    return this.withRight(TreeNode.leaf());
  }

  withLeaves() {
    return this.withChildren(TreeNode.leaf(), TreeNode.leaf());
  }
  
}

module.exports = TreeNode;