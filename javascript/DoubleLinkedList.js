class Node{
    constructor(value){
        this.val = value;
        this.next = null;
        this.prev = null;
    }
}

function linkNodes(node1,node2){
    node1.next = node2;
    node2.prev = node1;
}    

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }

    insertB(nodePosition,nodeInsert){
        if(this.head===nodeInsert && this.tail === nodeInsert){
            return;
        }

        this.remove(nodeInsert)

        const npPrev = nodePosition.prev
        nodeInsert.next = nodePosition
        nodeInsert.prev = npPrev
        nodePosition.prev = nodeInsert

        if(nodePosition === this.head){
            this.head = nodeInsert
        }else{
            npPrev.next = nodeInsert
        }
    }

    // O(1)
    remove(node){
        if(this.head===node) this.head=node.next;
        if(this.tail===node) this.tail = node.prev;

        if(node.prev)node.prev.next = node.next;
        if(node.next)node.next.prev = node.prev;

        node.next = null;
        node.prev=null;

        return this
    }
}

//null - 1 - 2 - 3 - 4 - 5 - null

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const seven = new Node(7);

const linkedListDoubly = new DoublyLinkedList();

linkNodes(one,two);
linkNodes(two,three);
linkNodes(three,four);
linkNodes(four,five);
linkedListDoubly.head = one;
linkedListDoubly.tail = five;

// console.log(linkedListDoubly.remove(one))
console.log(linkedListDoubly.remove(five))
// console.log(linkedListDoubly.remove(three))

// linkedListDoubly.insertB(two,three);

linkedListDoubly.insertB(three,seven);
