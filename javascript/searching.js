console.log("---------------Question1-------------------");
// Binary Search Tree - Iteratively
// T = O(logn), S = O(1)
function binaryTreeIteratively(arr, target){
    let left = 0;
    // this as input to make time complex logn not n
    let right = arr.length - 1;

    while(left <= right){
        const middle = Math.floor((right + left) / 2);
        if(arr[middle] === target){
            return middle
        }
        if(target > arr[middle]){
            left = middle + 1;
        }
        if(target < arr[middle]){
            right = middle -1
        }
    }

    return -1;
}

console.log(binaryTreeIteratively([2,3,7,9,11,23,37,81,87,89], 9))
console.log(binaryTreeIteratively([2,3,7,9,11,23,37,81,87,89], 89))
console.log(binaryTreeIteratively([2,3,7,9,11,23,37,81,87,89], 7))
console.log(binaryTreeIteratively([20,21,22,23], 10))
console.log(binaryTreeIteratively([20,21,22,23], 24))

console.log("---------------")
// Binary Search Tree - Recursively
// T = O(logn), S= O(logn)

function binaryTreeRecursively(arr, target, left=0, right){
    // this as input to make time complex logn not n
    right = right === undefined ?  arr.length - 1: right;

    const middle = Math.floor((right + left) / 2);
    if(arr[middle] === target){
        return middle
    }else if(left > right){
        return -1
    }else if(target > arr[middle]){
        return binaryTreeRecursively(arr, target, middle + 1, right)
    }else if(target < arr[middle]){
        return binaryTreeRecursively(arr, target, left, middle - 1)
    }
    
}

console.log(binaryTreeRecursively([2,3,7,9,11,23,37,81,87,89], 9))
console.log(binaryTreeRecursively([2,3,7,9,11,23,37,81,87,89], 89))
console.log(binaryTreeRecursively([2,3,7,9,11,23,37,81,87,89], 7))
console.log(binaryTreeRecursively([20,21,22,23], 10))
console.log(binaryTreeRecursively([20,21,22,23], 24))