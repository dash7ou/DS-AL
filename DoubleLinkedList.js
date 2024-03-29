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

    insert(node, position) {
        if(!this.head){
            this.head = node
            this.tail = node
            return
        }

        let counter = 0;
        let current = this.head;
        while(current){
            if(counter == position){
                if(current === this.head){
                    node.next = current
                    current.prev = node
                    this.head = node
                    return this
                }

                if(current === this.tail){
                    node.prev = current
                    current.next = node
                    this.tail = node
                    return this
                }
                
                const prevCurrent = current.prev
                const nextCurrent = current.next
                current.prev.next=node
                current.next = nextCurrent
                current.prev = node
                node.next = current
                node.prev = prevCurrent

                return this
            }

            if(current.next){
                current = current.next
                counter++;
            }else{
                break
            }


        }

        node.prev = current
        current.next = node
        this.tail = node

        return this
    }

    // O(1)
    insertB(nodePosition,nodeInsert){
        if(this.head===nodeInsert && this.tail === nodeInsert){
            return;
        }
        this.remove(nodeInsert);
        nodeInsert.prev = nodePosition.prev;
        nodeInsert.next = nodePosition;

        if(nodePosition === this.head){
            this.head = nodeInsert;
        }else{
            nodePosition.prev.next =nodeInsert;
        }
        nodePosition.prev=nodeInsert;
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

    removeByValue(value){
        let current = this.head;
        let oldCurrent = null;
        while(current){
            if(current.val === value){
                if(current === this.head){
                    this.head = current.next
                }else{
                    current.prev.next = current.next
                }

                if(current === this.tail){
                    this.tail = this.tail.prev
                }else{
                    current.next.prev = current.prev
                }

                oldCurrent = current
                // current = current.next

            }
            current = current.next
            if(oldCurrent){
                oldCurrent.prev = null
                oldCurrent.next = null
                oldCurrent = null
            }
        }
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
// console.log(linkedListDoubly.remove(five))
// console.log(linkedListDoubly.remove(three))

// linkedListDoubly.insertB(two,three);

// linkedListDoubly.insertB(three,seven);
// linkedListDoubly.removeByValue(7)


const linkedListDoubly2 = new DoublyLinkedList();
linkedListDoubly2.insert(new Node(3),10)
linkedListDoubly2.insert(new Node(2),0)
linkedListDoubly2.insert(new Node(1),0)
linkedListDoubly2.insert(new Node(7),1)
linkedListDoubly2.insert(new Node(8),4)
console.log(linkedListDoubly2)
linkedListDoubly2.insert(new Node(10),10)

console.log(linkedListDoubly2)
// console.log(linkedListDoubly2.head.next)