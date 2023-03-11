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

console.log("---------------Question2-------------------");

// T = O(logn)
function getNumberIndex(arr, target){
    let left = arr[0];
    let right = arr.length -1;

    while(left <= right ){
        const middle = Math.floor((right + left) / 2 );
        if(target === arr[middle]){
            return middle;
        }else if(arr[middle] >= arr[left]){
            // so left way sorted
            if(arr[left] <= target && target< arr[middle]){
                // exploer L
                right = middle - 1;
            }else{
                // explore R
                left = middle + 1
            }
        }else if(arr[middle] ){
            // right side is sorted
            if( arr[middle] <= target && target < arr[right]){
                // exploer L
                right = middle - 1
            }else{
                // explore R
                left = middle + 1
            }
        }
    }

    return -1
}

console.log(getNumberIndex([5,6,7,8,9,1,2,3,4], 3))
console.log(getNumberIndex([], 10))
console.log(getNumberIndex([1,2,3,4,5], 2))
console.log(getNumberIndex([3,4,5,1,2], 2))

console.log("---------------Question3-------------------");
// T = O(logn)
function startingEndingPositions(arr, target){
    const left = 0;
    const right = arr.length - 1;
    let start = -1
    let finish = -1

    function helper(left, right){
        const middle = Math.floor((right + left) / 2 );
        if(left > right) return
        if(arr[middle] === target){
            if(middle > finish){
                finish = middle
            }
            if(middle < start || start === -1){
                start = middle
            }

            helper(left, middle - 1)
            helper(middle + 1, right)
        }else if(arr[middle] < target){
            return helper(middle + 1, right)
        }else if(arr[middle] > target){
            return helper(left, middle - 1)
        }
    }

    helper(left, right)
    return [start, finish]
}

console.log(startingEndingPositions([1,2,2,2,3], 2));
console.log(startingEndingPositions([1,2,3,4,5], 3));
console.log(startingEndingPositions([], 1));
console.log(startingEndingPositions([5,7,7,8,9], 7));
console.log(startingEndingPositions([1,2,3,4,5,5,5,5,5,5,7,8], 5));

console.log("---------------Question4-------------------");
// T = logn + logm = logn+m
function searchInMatrix(matrix, target){
    let top = 0;
    let bottom = matrix.length - 1;
    let matrixRows = matrix[0].length;
    let arrayContainsTarget = -1

    if(matrixRows === 0){
        return false;
    }

    // binery search into matrix
    while(top <= bottom){
        const middle = Math.floor((top + bottom) / 2 );
        const firstItem = matrix[middle][0]
        const lastItem = matrix[middle][matrixRows - 1]
        if(firstItem <= target && lastItem >= target){
            arrayContainsTarget = middle;
            break;
        }
        else if(firstItem > target){
            bottom = middle-1
        }
        else if(lastItem < target){
            top = middle+1
        }
    }

    if(top > bottom) return false

    const arr = matrix[arrayContainsTarget];
    let left = 0;
    let right = arr.length - 1;


    while(left <= right){
        const middle = Math.floor((right + left) / 2);
        if(arr[middle] === target){
            return true
        }
        if(target > arr[middle]){
            left = middle + 1;
        }
        if(target < arr[middle]){
            right = middle -1
        }
    }

    return false
}

console.log(searchInMatrix([
    [1,2,3],
    [4,5,6],
    [7,8,9]
], 5))

console.log(searchInMatrix([
    [1,2,3],
    [4,5,6],
    [7,8,9]
], 1))

console.log(searchInMatrix([
    [1,2,3],
    [4,5,6],
    [7,8,9]
], 100))

console.log(searchInMatrix([
    [1,2,3],
    [4,5,6],
    [7,8,9]
], 9))

console.log(searchInMatrix([[]], 1))
console.log(searchInMatrix([
    [1,5,7,11],
    [12,13,17,20],
    [25,26,30,31],
    [32,35,39,43],
    [45,60,62,65],
], 62))
console.log(searchInMatrix([
    [1,5,7,11],
    [12,13,17,20],
    [25,26,30,31],
    [32,35,39,43],
    [45,60,62,65],
], 63))