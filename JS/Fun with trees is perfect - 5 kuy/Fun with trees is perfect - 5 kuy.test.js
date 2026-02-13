const { assert } = require('chai');
const TreeNode = require('./Fun with trees is perfect - 5 kuy');

// Емуляція об'єкта Test для локального запуску (як на Codewars)
const Test = {
    assertEquals: (actual, expected) => {
        assert.strictEqual(actual, expected);
    }
};

describe('TreeNodeTest', function () {
    /**
     * null
     */
    it('null tree should be perfect', function () {
        var root = null;
        Test.assertEquals(TreeNode.isPerfect(root), true);
    });

    /**
     * Single leaf
     * 0
     */
    it('single leaf should be perfect', function () {
        var root = TreeNode.leaf();
        Test.assertEquals(TreeNode.isPerfect(root), true);
    });

    /**
     * 0
     * / \
     * 0   0
     */
    it('full one level tree (root + 2 leaves)', function () {
        var root = TreeNode.leaf().withLeaves();
        Test.assertEquals(TreeNode.isPerfect(root), true);
    });

    /**
     * 0
     * /
     * 0
     */
    it('one child tree (unbalanced) should NOT be perfect', function () {
        var root = TreeNode.leaf().withLeftLeaf();
        Test.assertEquals(TreeNode.isPerfect(root), false);
    });
    
    /**
     * 0
     * /   \
     * 0     0
     * / \   / \
     * 0   0 0   0
     */
    it('perfect tree with depth 2', function () {
        var left = TreeNode.leaf().withLeaves();
        var right = TreeNode.leaf().withLeaves();
        var root = TreeNode.join(left, right);
        Test.assertEquals(TreeNode.isPerfect(root), true);
    });

    /**
     * 0
     * /   \
     * 0     0
     * / \   / 
     * 0   0 0   
     */
    it('tree with correct structure but different depth leaves', function () {
        var left = TreeNode.leaf().withLeaves(); // depth 1
        var right = TreeNode.leaf().withLeftLeaf(); // depth 1 but missing right child
        var root = TreeNode.join(left, right);
        Test.assertEquals(TreeNode.isPerfect(root), false);
    });
    
    /**
     * 0
     * /   \
     * 0     0
     * / \ 
     * 0   0   
     */
    it('tree with different sub-tree heights', function () {
        var left = TreeNode.leaf(); // depth 0
        var right = TreeNode.leaf().withLeaves(); // depth 1
        var root = TreeNode.join(left, right);
        Test.assertEquals(TreeNode.isPerfect(root), false);
    });
});