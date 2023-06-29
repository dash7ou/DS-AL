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


console.log("---------------( Circular Queue )-------------------");

class MyCircularQueue {
    constructor(k) {
        this.storage = new Array(k);
        this.length = k
        this.head = null
        this.tail = null;
    }

    enQueue(value){
        if(this.isFull()) return false
        if(this.isEmpty()){
            this.head = 0;
            this.tail = 0;
            this.storage[this.tail] = value
            return true     
        }
        
        if(this.tail === this.length - 1) this.tail = -1
        this.tail++;
        this.storage[this.tail] = value
        return true   
    }

    deQueue() {
        if(this.isEmpty()) return false
        this.storage[this.head] = null
        this.head++
        if(this.head === this.length){
            if(!this.isEmpty()){
                this.head = 0
            }else{
                this.head = null
                this.tail = null
            }
        }

        return true
    }

    Front(){
        return !this.storage[this.head] && this.storage[this.head] !== 0 ? -1 : this.storage[this.head]
    }

    Rear() {
        return !this.storage[this.tail] && this.storage[this.tail] !== 0 ? -1 : this.storage[this.tail]
    }

    isEmpty() {
        let i = 0;
        let isEmp = true
        while(i < this.length){
            if(this.storage[i] || this.storage[i] === 0){
                isEmp = false
                break;
            }
            i++
        }
        
        return isEmp;
    }

    isFull() {
        let i = 0;
        let isF = true
        while(i < this.length){
            if(!this.storage[i] && this.storage[i] !== 0){
                isF = false
                break
            }
            i++
        }
        return isF;
    }
}

// Your MyCircularQueue object will be instantiated and called as such:
var obj = new MyCircularQueue(3)
// var param_1 = obj.enQueue(10)
obj.enQueue(20)
obj.enQueue(30)
obj.enQueue(40)
console.log(obj.enQueue(40))
console.log(obj.deQueue())
console.log(obj.deQueue())
obj.enQueue(5)
obj.enQueue(3)
console.log(obj.enQueue(3))
// console.log(obj.deQueue())
// console.log(obj.deQueue())
console.log(obj.storage)
console.log(obj.Front())
console.log(obj.Rear())
// var param_5 = 
// var param_6 = 

console.log(obj.isEmpty(), obj.isFull())
console.log("---------------------")
var obj2 = new MyCircularQueue(8)
obj2.enQueue(3)
obj2.enQueue(9)
obj2.enQueue(5)
obj2.enQueue(0)
console.log(obj2.storage)
obj2.deQueue()
console.log(obj2.storage)
obj2.deQueue()
console.log(obj2.storage)
obj.isEmpty()
obj.isEmpty()
console.log(obj2.Rear())
console.log(obj2.Rear())
obj2.deQueue()


console.log("---------------( Number of Islands )-------------------");

var numIslands = function(grid) {
    if (grid.length === 0 && grid[0].length === 0) return 0

    const rowLength = grid.length;
    const colLength = grid[0].length;
    let isLands = 0;
    // const visited = new Array(rowLength).fill().map(r => new Array(colLength).fill(false))

    function dfs(r, c){
        const queue = []
        queue.push([r, c])
        grid[r][c] = true

        while(queue.length){
            let [r, c] = queue.pop()
            const directions = [[1,0], [-1,0], [0,1], [0,-1]]
            for(let d of directions){
                let [dr, dc] = d;
                const rD = r + dr;
                const cD = c + dc;
                if(rD >= 0 && rD >=0 && rD < rowLength && cD < colLength && grid[rD][cD] === "1"){
                    queue.push([rD, cD])
                    grid[rD][cD] = true
                }
            }
        }
    }

    for(let r=0; r<rowLength; r++){
        for(let c=0; c<colLength; c++){
            if(grid[r][c] === '1'){
                dfs(r, c)
                isLands++;
            }
        }
    }

    return isLands
};

const input = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]


console.log(numIslands(input))


console.log(numIslands(
    [
        ["1","1","1"],
        ["0","1","0"],
        ["1","1","1"]
    ]
))