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

class QueueWithTwoStacks {
    inStack = []
    outStack = []

    constructor(){}

    push(value){
        this.inStack.push(value)
    }

    pop(){
        if(this.outStack.length === 0){
            while(this.inStack.length > 0){
                this.outStack.push(this.inStack.pop())
            }
        }

        return this.outStack.pop() || null
    }

    peek(){
        if(this.outStack.length === 0){
            while(this.inStack.length > 0){
                this.outStack.push(this.inStack.pop())
            }
        }

        return this.outStack[this.outStack.length-1] || null;
    }

    empty(){
        let inStackLength = this.inStack.length;
        let outStackLength = this.outStack.length;
        // if both are 0, then return true
        return !inStackLength && !outStackLength;
    }
}


const qs = new QueueWithTwoStacks()
console.log(qs.pop())
qs.push(10)
console.log(qs.pop())
console.log(qs)

qs.push(10)
qs.push(20)
qs.push(30)

console.log(qs.pop())
qs.push(40)
console.log(qs.pop())
console.log(qs)
console.log(qs.pop())
console.log(qs.pop())
console.log(qs)

console.log(qs.peek())
qs.push(10)
qs.push(20)
qs.push(30)
console.log(qs.peek())
console.log(qs.empty())




