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
