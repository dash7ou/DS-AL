console.log("--------------- Question38 ( BST ) -------------------");
console.log("--------------- Question39 ( Traverse BST ) -------------------");
class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}


class BinarySearchTree {
    constructor(){
        this.root = null
    }

    insert(value){
        const node = new Node(value)
        if(this.root === null){
            this.root = node
            return this
        }

        let current = this.root
        while(true){
            if(value >= current.value){
                if(!current.right){
                    current.right = node
                    return this
                }
                current = current.right
            }else{
                if(!current.left){
                    current.left = node
                    return this
                }

                current = current.left
            }
        }   
    }

    find(value){
        if(!this.root) return null
        
        let current = this.root
        // if(current.value === value) return current

        while(true){
            if(value === current.value){
                return current
            }
            else if(value > current.value){
                if(!current.right){
                    return null
                }
                current = current.right
            }else{
                if(!current.left){
                    return null
                }

                current = current.left
            }
        }
    }

    // Successor style: replace it with smallest value in right subtree
    remove(value, current=this.root, parent=null){
        if(!this.root) return null
        while(current){
            if(value < current.value){
                parent=current
                current=current.left
            }else if(value > current.value){
                parent = current
                current = current.right
            }else{
                // found it
                // node to be deleted has two child
                if(current.left && current.right){
                    current.value = this.getMin(current.right).value
                    this.remove(current.value, current.right, current)
                }else if(parent === null){
                    // here check if root has only left / right / nothing
                    if(current.left){
                        current.value=current.left.value
                        current.left  = current.left.left
                        current.right = current.left.right
                    }else if(current.right){
                        current.value = current.right.value
                        current.right = current.right.right
                        current.left = current.right.left
                    }else{
                        this.root = null
                    }
                }
                // edit to the parent if it left or right that node we want to remove
                else if(current === parent.left){
                    parent.left = current.left || current.right
                }else if(current === parent.right){
                    parent.right = current.left || current.right
                }

                break;
            }
        }

        return this;
    }

    getMin(node){
        while(node.left){
            node = node.left
        }

        return node
    }

    breadFirst(){
        let queue = [];
        let result = [];

        queue.push(this.root)
        while(queue.length > 0){
            const current = queue.shift()
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }

            result.push(current.value)
        }

        return result
    }
    // left, current, right
    dsfInOrder(){
        if(!this.root) return []
        const arr = []
        let current = this.root

        function traverse(node){
            if(node.left) traverse(node.left)
            arr.push(node.value)
            if(node.right) traverse(node.right)
        }
        traverse(current)
        return arr
    }

    // current, left, right
    dsfPreOrder(){
        if(!this.root) return []
        const arr = []
        let current = this.root

        function traverse(node){
            arr.push(node.value)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }
        traverse(current)
        return arr
    }
    // left, right, current
    dsfPostOrder(){
        if(!this.root) return []
        const arr = []
        let current = this.root

        function traverse(node){
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            arr.push(node.value)
        }
        traverse(current)
        return arr
    }
}



//                      20
//                    /    \
//                    6     35
//                   / \    /  \ 
//                  3   8  27   55
//                 / \     / \   \
//                 1   3  25  29  60

let bst = new BinarySearchTree();
bst.insert(20);
bst.insert(6);
bst.insert(35);
bst.insert(3);
bst.insert(8);
bst.insert(27);
bst.insert(55);
bst.insert(1);
bst.insert(3);
bst.insert(25);
bst.insert(29);
bst.insert(60);
console.log(JSON.stringify(bst))

console.log(bst.find(10))
console.log(bst.find(20))
console.log(bst.find(55))
console.log(bst.find(1))

console.log(JSON.stringify(bst.remove(60)))
// console.log(JSON.stringify(bst.remove(29)))
// console.log(JSON.stringify(bst.remove(27)))
// console.log(JSON.stringify(bst.remove(20)))

console.log(bst.breadFirst())
console.log(bst.dsfInOrder())
console.log(bst.dsfPreOrder())
console.log(bst.dsfPostOrder())


console.log("--------------- Question40 ( Level Order traversal ) -------------------");
class LevelOrderTree{
    constructor(){
        this.root = null
    }

    insert(arr){
        let i = 0;
        if(arr.length === 0) return 0
        if(!this.root){
            this.root = new Node(arr[0])
            i++
            if(arr.length === i) return this
        }

        const queue = [this.root]
        while(queue.length){
            const current = queue.shift()
            if(current.left === null && current.right === null){
                if(arr[i]){
                    current.left = new Node(arr[i])
                }
                i++
                if(arr[i]){
                    current.right = new Node(arr[i])
                }
                i++
                if(i === arr.length) return this
                if(current.left) queue.push(current.left)
                if(current.right) queue.push(current.right)
            }
        }

        return this
    }

    // T = O(n), S=O(n)
    traverse(){
        if(this.root === null) return null

        const queue = []
        const arr = []
        queue.push(this.root)
        while(queue.length){
            const arrLevel = []
            let i = 1
            const count = queue.length
            while(i <= count){
                const current = queue.shift()
                arrLevel.push(current.value)
                if(current.left) queue.push(current?.left)
                if(current.right) queue.push(current?.right)
                i++;
            }
            arr.push(arrLevel)
        }

        return arr;
    }
}

const tree = new LevelOrderTree()
console.log(JSON.stringify(tree.insert([7,11,1,null,7,2,8,null,null,null,3,null,null,5,null])));
console.log(tree.traverse())

console.log("--------------- Question41 ( Left/Right View of binary tree ) -------------------");
// T = O(n), S = O(n)
function rightView(tree){
    if(tree === null) return []

    const queue = []
    const arr = []
    queue.push(tree)

    while(queue.length){
        let i = 0;
        const count = queue.length
        let current;
        while(i < count){
            current = queue.shift()
            if(current.left) queue.push(current?.left)
            if(current.right) queue.push(current?.right)
            i++;
        }
        arr.push(current.value)
    }

    return arr
}


function leftView(tree){
    if(tree === null) return []

    const queue = []
    const arr = []
    queue.push(tree)

    while(queue.length){
        let i = 0;
        const count = queue.length
        let firstCurrent;
        while(i < count){
            const current = queue.shift()
            if(i === 0) firstCurrent = current
            if(current.left) queue.push(current?.left)
            if(current.right) queue.push(current?.right)
            i++;
        }
        arr.push(firstCurrent.value)
    }

    return arr
}

const viewTree = new LevelOrderTree();
viewTree.insert([7,11,1,null,7,2,8,null,null,null,3,null,null,5,null]);
console.log(rightView(tree.root));
console.log(leftView(tree.root));


console.log("--------------- Question42 ( Invert Binary Tree ) -------------------");

// iterative solution T= O(n), S = O(n)
function invertIterative(tree){
    if(tree === null) return

    const queue = [tree];
    while(queue.length){
        const current = queue.shift();
        let temp = current.right;
        current.right = current.left;
        current.left = temp;
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }

    return tree;
}


const tTree = new LevelOrderTree();
tTree.insert([1,2,3,4,null,null,5,6,null,7]);
console.log(JSON.stringify(tTree.traverse()))
console.log(JSON.stringify(invertIterative(tTree.root)));
console.log(JSON.stringify(tTree.traverse()))


// reversive solution T=O(n), S=O(height)
function invertRecersive(tree){
    if(tree === null) return

    const temp = tree.right;
    tree.right = tree.left;
    tree.left = temp;

    invertRecersive(tree.left)
    invertRecersive(tree.right)
    return tree
}
const tRTree = new LevelOrderTree();
tRTree.insert([1,2,3,4,null,null,5,6,null,7]);
console.log(JSON.stringify(tRTree.traverse()))
console.log(JSON.stringify(invertRecersive(tRTree.root)));
console.log(JSON.stringify(tRTree.traverse()));


console.log("--------------- Question43 ( Diameter of binary tree ) -------------------");
/**
 * diameter at node = hight(left) + hight(right) + 1 + 1
 * height at node = max(LH, RH) + 1
 * T = O(n), S = O(n)
 */


class BinaryTree{
    constructor(){
        this.root = null;
    }
    insert(array){
        if(array.length===0) return;
        let i=0;
        //if root is null
        if(!this.root){
            if(array[0]===null)return;
            else{
                let node = new Node(array[0]);
                this.root = node;
                i++;
                if(i===array.length) return this;
            }
        }
        //insert elements
        const queue = [this.root];
        while(queue.length){
            let current = queue.shift();
            //left
            if(!current.left){
                if(array[i]!==null){
                    let node = new Node(array[i]);
                    current.left = node;
                }
                i++;
                if(i===array.length) return this;
            }
            if(current.left) queue.push(current.left);
            //right
            if(!current.right){
                if(array[i]!==null){
                    let node = new Node(array[i]);
                    current.right = node;
                }
                i++;
                if(i===array.length) return this;
            }
            if(current.right) queue.push(current.right);
        }
    }
}


function diamterBinaryTree(root){
    if(!root) return -1;
    let maxDiam = 0

    const dfs = function(node){
        if(!node) return -1;
        const leftHeight = dfs(node.left);
        const rightHeight = dfs(node.right);
        let diamter = leftHeight+rightHeight+1+1;
        maxDiam = Math.max(maxDiam,diamter);
        return Math.max(leftHeight,rightHeight)+1;
    }

    dfs(root)
    return maxDiam;
}

const dtree = new BinaryTree();
dtree.insert([1,3,2,7,4,null,null,8,null,null,5,9,null,null,6]);
console.log(diamterBinaryTree(dtree.root));

console.log("--------------- Question44 ( Convert Sorted Array to Binary Search Tree ) -------------------");
// T = O(n), S = O(n)
function buildBSTfromSortedArray(arr, left=0,right =arr.length-1){
    // root is middle point
    if(left>right) return null;

    const middle = Math.round((left + right) / 2);
    const node = new Node(arr[middle])
    
    node.left = buildBSTfromSortedArray(arr, left, middle-1)
    node.right = buildBSTfromSortedArray(arr, middle+1, right);

    return node
}


console.log(buildBSTfromSortedArray([1,2,3,4,5]));


console.log("--------------- Question45 ( Validate BST ) -------------------");
// T = O(n), S = O(max deep)
function checkIfValidBST(root){
    function helper(node, min, max){
        if(node===null) return true;

        if(node.value <= min || node.value >= max) return false;
        const isLeftBST  = helper(node.left, min, node.value)
        const isRighBST = helper(node.right, node.value, max)

        return isLeftBST && isRighBST;
    }
    return helper(root,-Infinity,Infinity);
}




const vbstree = new BinaryTree();
vbstree.insert([10,5,20,3,7,15,30,null,4,null,null,null,17,null,null,null,null,null,18]);
console.log(checkIfValidBST(vbstree.root))
console.log("--------------------------------------------------")


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
class Node {
    constructor(value, priority){
        this.value = value
        this.priority = priority
    }
}

class CustomPriorityQueue {
    constructor() {
        this.data = [];
    }

    enqueue(value, priority) {
        const newNode = new Node( value, priority );
        this.data.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.data.length - 1;
        const element = this.data[idx];
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.data[parentIdx];
            if (element.priority >= parent.priority) break;
            this.data[idx] = parent;
            idx = parentIdx;
        }
        this.data[idx] = element;
    }

    dequeue() {
        const min = this.data[0];
        const last = this.data.pop();
        if (this.data.length > 0) {
            this.data[0] = last;
            this.bubbleDown();
        }
        return min;
    }

    bubbleDown() {
        let idx = 0;
        const length = this.data.length;
        const element = this.data[0];

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let smallestIdx = idx;

            if (leftChildIdx < length) {
                leftChild = this.data[leftChildIdx];
                if (leftChild.priority < this.data[smallestIdx].priority) {
                    smallestIdx = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.data[rightChildIdx];
                if (rightChild.priority < this.data[smallestIdx].priority) {
                    smallestIdx = rightChildIdx;
                }
            }

            if (smallestIdx === idx) break;

            this.data[idx] = this.data[smallestIdx];
            this.data[smallestIdx] = element;
            idx = smallestIdx;
        }
    }
}


var kthSmallest = function(root, k) {
    const pq = new CustomPriorityQueue();

    function dfs(node){
        if(!node) return;
        pq.enqueue(node.val, node.val)
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    console.log(pq)
    for(let i = 0; i < k-1; i++){
        console.log("here", pq)
        pq.dequeue()
    }
    console.log("here", pq)

    return pq.dequeue().value
};


const root = {
    val: 5,
    right: {
        val: 6
    },
    left: {
        val: 3,
        left: {
            val: 2,
            left: {
                val: 1
            }
        },
        right: {
            val: 4
        }
    }
}

console.log(kthSmallest(root, 3))


console.log("--------------------------------------------------")

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    words = words.sort();
    const obj = {};

    for (const word of words) {
      if (!obj[word]) {
        obj[word] = 1;
      }else{
        obj[word] = obj[word]+1;
      }
    }

  
    const sortedArr = [];
    for (const key in obj) {
      sortedArr.push([key, obj[key]]);
    }
  
    sortedArr.sort((a, b) => {
      return b[1] - a[1];
    });
  
    while (sortedArr.length !== k) {
      sortedArr.pop();
    }
  
    const solution = [];
    for (let i = 0; i < sortedArr.length; i++) {
      solution.push(sortedArr[i][0]);
    }
  
    return solution;
};


console.log(topKFrequent(["i","love","leetcode","i","love","coding"], 2))