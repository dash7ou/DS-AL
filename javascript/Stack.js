class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    addAtTheBegining(value){
        const newNode = new Node(value)
        if(this.first === null){
            this.first = newNode
            this.last = newNode
            this.size++
            return
        }
        // if(this.first == this.end){
        //     console.log("here")
        //     this.first = newNode
        //     newNode.next = this.last
        //     this.size++;
        //     return
        // }
        const oldFirst = this.first
        this.first = newNode
        newNode.next = oldFirst
        this.size++;
    }

    removeFromTheBeginning(){
        if(!this.first) return null
        const old = this.first
        this.first = this.first.next
        this.size--;
        if(this.size === 0){
            this.last = null
        }
        return old
    }
}

const stack = new Stack()
stack.addAtTheBegining(10)
stack.addAtTheBegining(20)
stack.addAtTheBegining(30)
console.log(stack)

console.log(stack.removeFromTheBeginning())
console.log(stack.removeFromTheBeginning())
console.log(stack.removeFromTheBeginning())
console.log(stack)
