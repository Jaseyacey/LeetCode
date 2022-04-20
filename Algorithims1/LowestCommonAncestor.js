var lowestCommonAncestor = function(root, p, q) {
    // Base case
    if (root === null) {
        return null;
    }
    // If p and q are on the same side of the tree
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    // If p and q are on the same side of the tree
    if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    // If p and q are on different sides of the tree
    return root;
};