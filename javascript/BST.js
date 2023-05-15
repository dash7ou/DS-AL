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
}



//                     20
//                    /   \
//                    6    35
//                   / \   /  \ 
//                   3  8  27  55
//                  / \    / \   \
//                  1  3   25 29  60

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
console.log(JSON.stringify(bst.remove(29)))
console.log(JSON.stringify(bst.remove(27)))
console.log(JSON.stringify(bst.remove(20)))