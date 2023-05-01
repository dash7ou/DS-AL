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

console.log("---------------Question1 (Merge Sort)-------------------");
// Merge Sort T = O(nlogn), S = O(n)
// Merge T & S = O(n+m)
// divide array and merge sorted arrays, stable sorting algo
function mergeSort(arr){
    if(arr.length <= 1) return arr;

    const middlepoint = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middlepoint));
    const right = mergeSort(arr.slice(middlepoint));

    return merge(left, right)
}


function merge(left, right){
    let result = []
    let i = 0, j = 0;

    while(i < left.length && j < right.length){
        if(left[i] <= right[j]){
            result.push(left[i])
            i++;
        }else{
            result.push(right[j])
            j++;
        }
    }

    while(i < left.length){
        result.push(left[i])
        i++
    }

    while(j < right.length){
        result.push(right[j])
        j++
    }

    return result;
}

// console.log(merge([1,2,5], [2,3,4]))
console.log(mergeSort([7,2,3,8,1]))
console.log(mergeSort([2,3,1,5]))
console.log(mergeSort([1,2,3,1,4]))
console.log(mergeSort([1]))