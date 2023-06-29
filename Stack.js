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
// console.log(stack)

console.log(stack.removeFromTheBeginning())
console.log(stack.removeFromTheBeginning())
console.log(stack.removeFromTheBeginning())
// console.log(stack)


console.log("---------------Question35 ( Reverse Polish Notation )-------------------");
function evalRPN(arr){
    const stack = []
    const validOperator = {
        '+':(n1,n2)=>n1+n2,
        '-':(n1,n2)=>n1-n2,
        '*':(n1,n2)=>n1*n2,
        '/':(n1,n2)=>Math.trunc(n1/n2)
    };
    
    while(arr.length > 0){
        let step = arr.shift()
        if(!validOperator[step]){
            stack.push(+step)
            // step = arr.shift()
        }else{
            const number2 = stack.pop()
            const number1 = stack.pop()
    
            const operatorResult = validOperator[step](number1, number2)
            stack.push(parseInt(operatorResult))
        }

    }

    return stack.pop()
}


console.log(evalRPN(["5","6","4", "/", "+", "1", "-"]))
console.log(evalRPN(["4", "13", "5", "/", "+"]))
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))