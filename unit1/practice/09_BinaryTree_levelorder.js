// Definition for a binary tree node.
// class TreeNode {
//   constructor(val = 0, left = null, right = null) {
//   this.val = val;
//   this.left = left;
//   this.right = right;
//   }
// }
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const levelOrderTraversal = (root) => {
    if(!root){return []}
    let result = []
    let queue = [[root, 0]]

    while(queue.length >0){ // 1r queue = [[노드,0]]
        let info = queue.shift()
        let sub = info[0]
        let level = info[1]

        

        if(level === result.length){
            result.push([]) // result [[]]
        }
        result[level].push(sub.val) // level = 0 일때 해당 루트의 val 담기? result [[3]]

        if(sub.left){queue.push([sub.left, level+1])};
        if(sub.right){queue.push([sub.right, level+1])};
    }
    return result
}
class TreeNode {
	constructor(val, left, right) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}


/*
        3
       / \
      9  20
        /  \
       15   7
*/
const root1 = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
const result1 = levelOrderTraversal(root1);
console.log(result1); // [[3], [9, 20], [15, 7]];
