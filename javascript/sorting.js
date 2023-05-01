console.log("---------------Question1 (Bubble Sort)-------------------");
// T = O(n^2), S = O(1)
// just compare and swap
function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }

    return arr;
}


console.log(bubbleSort([7,2,3,8,1]))
console.log(bubbleSort([3,7,2,8,1,5]))
console.log(bubbleSort([2,3,1,5]))
console.log(bubbleSort([1,2,3,4]))
console.log(bubbleSort([1]))

console.log("---------------Question1 (Insertion Sort)-------------------");
// T = O(n^2), S = O(1)
// add elements to sorted array, more stable, less swapping, twice faster than bubble sort
function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let j = i - 1;
        let temp = arr[i];
        while(j >= 0 && arr[j] > temp){
            arr[j+1] = arr[j]
            j--;
        }
        arr[j+1] = temp
    }
    return arr;
}


console.log(insertionSort([7,2,3,8,1]))
console.log(insertionSort([2,3,1,5]))
console.log(insertionSort([1,2,3,4]))
console.log(insertionSort([1]))


console.log("---------------Question1 (Selection Sort)-------------------");
// T = O(n^2), S = O(1)
// find the smallest value and add it at the beginning.
function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let smallest = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] <= arr[smallest]){
                smallest = j
            }
        }

        [arr[smallest], arr[i]] = [arr[i], arr[smallest]];
    }

    return arr
}

console.log(selectionSort([7,2,3,8,1]))
console.log(selectionSort([2,3,1,5]))
console.log(selectionSort([1,2,3,1,4]))
console.log(selectionSort([1]))