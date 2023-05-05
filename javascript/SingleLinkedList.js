class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}


class SingleLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    get(index){
        let node = this.head;
        for(let i = 0; i <= index; i++){
            if(this.head === null){
                return -1
            }

            if(i === index){
                return node
            }

            if(node.next === null){
                return -1;
            }

            node = node.next;
        }

        return -1
    }

    addAtHead(value){
        const node = new Node(value)
        if(this.head){
            node.next = this.head
            this.head = node;
        }else{
            this.head = node;
            this.tail = node;
        }

        this.size++;
        return this;
    }

    addAtTail(value){
        const node = new Node(value);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
        return this;
    }

    addAtIndex(index,value){
        if(index < 0 || index > this.size){
            return -1
        }

        const node = new Node(value);
        if(index === 0){
            this.addAtHead(value)
        }else if(index === this.size -1){
            this.addAtTail(value)
        }else{
            let nodeAtIndex = this.get(index-1);
            const oldNodeNext = nodeAtIndex.next;
            nodeAtIndex.next = node;
            node.next = oldNodeNext
            this.size++
            return this
        }
    }

    deleteAtIndex(index){
        if(index < 0 || index > this.size){
            return -1
        }

        if(index === 0){
            this.head = this.head.next
            this.size--;
            if(this.size===0){
                this.tail = null;
            }
        }else if(index === this.size-1){
            let newTail = this.get(index-1);
            this.tail = newTail
            newTail.next = null
            this.size--;
        }else{
            let nodeAtIndex = this.get(index-1);
            nodeAtIndex.next = nodeAtIndex.next.next;
            this.size--;
        }
        return this;
    }
}

const sll = new SingleLinkedList()
sll.addAtHead(30)
console.log(sll.tail)

sll.addAtHead(20)
console.log(sll.tail)

sll.addAtHead(10)
console.log(sll.tail)

console.log(sll.get(2))
console.log(sll.get(1))
console.log(sll.get(0))
console.log(sll.get(-1))
console.log(sll.get(10))
sll.addAtTail(5)
console.log(sll.head)
console.log(sll.tail)
console.log(sll.get(3))
console.log(JSON.stringify(sll.addAtIndex(1,9)))

console.log(JSON.stringify(sll.deleteAtIndex(1)))
console.log(JSON.stringify(sll.deleteAtIndex(0)))
console.log(JSON.stringify(sll.deleteAtIndex(2)))


console.log("---------------Question25 (delete duplicates)-------------------");

// T = O(n), S = O(1)
function removeDuplicatedNumberFromSingleLinkedList(linkedList){
    let current = linkedList.head;
    for(let i =0; i < linkedList.size; i++){
        while(current.value === current?.next?.value){
            current.next = current.next.next
            if(i === linkedList.size-2){
                linkedList.tail = current
            }
            linkedList.size--;
        }
        current=current.next
    }

    return linkedList;
}

const sllD = new SingleLinkedList();
sllD.addAtHead(6)
sllD.addAtHead(5)
sllD.addAtHead(5)
sllD.addAtHead(4)
sllD.addAtHead(4)
sllD.addAtHead(4)
sllD.addAtHead(3)
sllD.addAtHead(2)
sllD.addAtHead(2)
sllD.addAtHead(1)
sllD.addAtHead(1)

const clearSLL = removeDuplicatedNumberFromSingleLinkedList(sllD)
console.log(JSON.stringify(clearSLL))

console.log("---------------Question25 ( Reverse SLL )-------------------");
// T = O(n), S=O(1)
function reverseSingleLinkedList(sll){
    let current = sll.head
    let itemBefore = null
    for(let i=0; i < sll.size; i++){
        if(i === 0){
            sll.tail = current
        }
        const itemNextOld = current.next
        const oldCurrent = current
        
        current.next = itemBefore
        
        current = itemNextOld
        itemBefore = oldCurrent
    }

    sll.head = itemBefore
    return sll
}

const reversedSLL = reverseSingleLinkedList(clearSLL);
console.log(JSON.stringify(reversedSLL))

console.log("---------------Question25 ( Cycle Detection )-------------------");
// using Floyds and Tortoise Algo T = O(n), S = O(1) if u use normal way S = O(n) because u will need to use hash table.
function checkLoop(head) {
    if(!head) return null;
    if(!head.next) return null;

    let hare = head;
    let tortoise = head
    while(hare && hare.next){
        hare = hare.next.next;
        tortoise = tortoise.next;

        if(hare === tortoise) break;
    }

    if(hare !== tortoise) return null;
    // where cycle begain
    let pointer = head
    while(pointer!== tortoise){
        pointer = pointer.next
        tortoise = tortoise.next
    }

    return tortoise
}

const one = new Node(1)
const two = new Node(2)
const three = new Node(3)
const four = new Node(4)
const five = new Node(5)
const six = new Node(6)

one.next = two
two.next = three
three.next = four
four.next = five
five.next = six
six.next = two

let head = one

console.log(checkLoop(head))