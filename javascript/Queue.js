class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(){
        this.first = null
        this.end = null
        this.size = 0
    }

    enqueue(value){
        const newNode = new Node(value)
        if(this.first === null){
            this.first = newNode
            this.end = newNode
            this.size++

            return this
        }

        const oldNode = this.first;
        this.first = newNode
        this.first.next = oldNode
        this.size++
        return this
    }

    dequeue(){
        if(!this.first) return null
        const node = this.first;
        this.first = this.first.next

        if(this.first === null){
            this.end = null
        }

        this.size--
        return node
    }
}


const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)

console.log(JSON.stringify(queue))

console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.dequeue())
console.log(JSON.stringify(queue))


console.log("---------------Question37 ( Implement Queue with Stack )-------------------");