/*
 * @Descripttion: 
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2021-06-09 19:18:39
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2021-06-09 19:18:40
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @name: 
 * @test: test font
 * @msg: 
 * @param {*} preorder 前序遍历数组
 * @param {*} inorder  中序遍历数组
 * @param {*} preorder_left 前序遍历左边界、当前根节点
 * @param {*} preorder_right 前序遍历右边界、当前子树最深右节点
 * @param {*} inorder_left 中序遍历左边界，当前子树最深左节点
 * @param {*} inorder_right 中序遍历右边界、当前子树最深右节点
 * @return {*}
 */
var myBuildTree = function (preorder, inorder, preorder_left, preorder_right, inorder_left, inorder_right) {
    if (preorder_left > preorder_right) {
        return null;
    }
    // 取前序遍历中第一个节点为根节点
    let preorder_root = preorder_left;
    // 在中序遍历中定位根节点
    let inorder_root = inorder.indexOf(preorder[preorder_root]);

    let node = new TreeNode(preorder[preorder_root]);
    node.value = preorder[preorder_root];
    // 中序遍历特性，任意一个节点左边是他的左子树，右边是右子树
    //  当前根节点下标 - 当前子树最深左节点下标 = 左子树节点数量
    let size_left_subtree = inorder_root - inorder_left;
    // 先序遍历左子树
    node.left = myBuildTree(preorder, inorder, preorder_left + 1, preorder_left + size_left_subtree, inorder_left, inorder_root - 1);
    // 先序遍历右子树
    node.right = myBuildTree(preorder, inorder, preorder_left + size_left_subtree + 1, preorder_right, inorder_root + 1, inorder_right);
    return node;
}

var buildTree = function (preorder, inorder) {
    const n = preorder.length;
    return myBuildTree(preorder, inorder, 0, n - 1, 0, n - 1);
};