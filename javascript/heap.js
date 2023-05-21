console.log("---------------Question 46( Max Binary Heap )-------------------");

class MaxBinaryHeap {
    constructor(){
        this.heap = [];
    }

    buildHeap(arr){
        const length = arr.length;
        const lastParent = Math.floor(length/2)-1;

        for(let i=lastParent; i>=0; i--){
            this.bubbleDown(arr, i)
        }
        this.heap = arr;
        return this
    }

    bubbleDown(array,idx){
        const length = array.length;
        const current = array[idx];
        while(true){
            let leftChildIdx = 2*idx+1;
            let rightChildIdx = 2*idx +2;
            let leftChild, rightChild;
            let largest = null;
            if(leftChildIdx<length){
                leftChild=array[leftChildIdx];
                if(leftChild>current){
                    largest=leftChildIdx;
                }
            }
            if(rightChildIdx<length){
                rightChild=array[rightChildIdx];
                if((largest=== null && rightChild>current) ||
                  (largest !== null && rightChild>leftChild)){
                    largest = rightChildIdx;
                  } 
            }
            if(largest === null) break;
            //else swap
            array[idx] = array[largest];
            array[largest] = current;
            idx = largest;
        }    
    }

    extractMax(){
        const maximumValue = this.heap[0];
        const last = this.heap.pop();
        if(this.heap.length>0){
            this.heap[0]=last;
            this.bubbleDown(this.heap,0);
        }
        return maximumValue;    
    }

    insert(value){
        this.heap.push(value);
        this.bubbleUp();
        return this;
    }
    bubbleUp(){
        let idx = this.heap.length -1;
        const value = this.heap[idx];
        while(idx>0){
            const parentIdx = Math.floor((idx-1)/2);
            const parentValue = this.heap[parentIdx];
            if(value <=parentValue) break;
            this.heap[parentIdx] = value;
            this.heap[idx]=parentValue;
            idx=parentIdx;
        }
    }
    peak(){
        return this.heap[0];
    }
}


const heap = new MaxBinaryHeap()
console.log(heap.buildHeap([4,7,3,0,9,3,2,6]))


console.log("---------------Question 47( Priority Queue )-------------------");
class Node {
    constructor(value, priortiy){
        this.value = value
        this.priortiy = priortiy
    }
}


class PriorityQueue{
    constructor(){
        this.data = []
    }

    enqueue(value, priortiy){
        const newNode = new Node(value, priortiy)
        this.data.push(newNode)
        this.bubbleUp()
        return this
    }

    bubbleUp(){
        let idx = this.data.length-1;
        const element = this.data[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx-1) / 2)
            const parent = this.data[parentIdx];
            if(element.priortiy>=parent.priortiy) break;
            this.data[idx]=parent
            this.data[parentIdx] = element
            idx=parentIdx
        }
    }

    dequeue(){
        const min = this.data[0]
        const last = this.data.pop();
        if(this.data.length>0){
            this.data[0] = last
            this.bubbleDown()
        }

        return min;
    }

    bubbleDown(){
        let idx=0;
        let length = this.data.length;
        let element = this.data[0];
        while(true){
            let leftChildIdx = 2*idx+1;
            let rightChildIdx = 2*idx+2;
            let leftChild, rightChild;
            let smallest = null;
            if(leftChildIdx<length){
                leftChild=this.data[leftChildIdx];
                if(leftChild.priority<element.priority){
                    smallest = leftChildIdx;
                }
            }
            if(rightChildIdx<length){
                rightChild=this.data[rightChildIdx];
                if((smallest===null&& rightChild.priority<element.priority)||
                  (smallest!==null&& rightChild.priority<leftChild.priority)){
                    smallest=rightChildIdx;
                  }  
            }
            if(smallest===null) break;
            this.data[idx]=this.data[smallest];
            this.data[smallest]=element;
            idx = smallest;
        }
    }
}

let priorQueue = new PriorityQueue();
priorQueue.enqueue("Job1",3);
priorQueue.enqueue("Job2",4);
priorQueue.enqueue("Job3",1);
priorQueue.enqueue("Job4",2);
priorQueue.enqueue("Job5",1);