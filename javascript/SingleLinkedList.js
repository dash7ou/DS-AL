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
                return node.value
            }

            if(node.next === null){
                return -1;
            }

            node = node.next;
        }

        return -1
    }

    addAtHead(value){
        if(this.head){
            const currentHead = {...this.head};
            this.head = {
                value,
                next: currentHead
            }
        }else{
            this.head = {
                value,
                next: null
            }

            this.tail = this.head;
        }
    }

    addAtTail(value){
        if(this.tail){
            this.tail.next = {
                value,
                next: null
            }

            this.tail = this.tail.next;
        }else{
            this.head = {
                value,
                next: null
            }

            this.tail = this.head
        }
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
console.log(sll.get(5))
console.log(sll.head)
console.log(sll.tail)
