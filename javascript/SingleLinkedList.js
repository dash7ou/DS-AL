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
