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
