console.log("---------------Question20 (Bubble Sort)-------------------");
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

console.log("---------------Question21 (Insertion Sort)-------------------");
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


console.log("---------------Question22 (Selection Sort)-------------------");
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

console.log("---------------Question23 (Merge Sort)-------------------");
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


console.log("---------------Question24 (Quick Sort)-------------------");
// Quick Sort - Recursively QS Lower Size, middle - pivot
// T = O(nlogn)
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
function partiton(array, start=0, end=array.length - 1){
    let middle = Math.floor((start+end)/2)
    swap(array, start, middle);

    let pivot = array[start]
    let i = start+1;
    let j = end;

    while(i <= j){
        while(array[i] <= pivot){
            i++;
        }

        while(array[j] > pivot){
            j--;
        }

        if(i<j){
            swap(array, i, j)
        }
    }

    swap(array, start, j)
    // pivot
    return j;
}

// optomize S to be => O(logn) by clear call stack one by one.
function quickSort(array, start=0, end=array.length - 1){
    while(start<end){
        const pivotIdx = partiton(array, start, end);
        //Recursively call Quick Sort on lower sized subarray
        if(pivotIdx-start < end-pivotIdx){
            quickSort(array, start, pivotIdx-1);
            start = pivotIdx + 1
        }else{
            quickSort(array, pivotIdx+1, end);
            end = pivotIdx - 1;
        }
    }

    return array
}

// in normal way S will be O(n)
/*function quickSort(array,start=0,end=array.length-1){
    if(start<end){
        let pivotIdx = partition(array,start,end);
        quickSort(array,start,pivotIdx-1);
        quickSort(array,pivotIdx+1,end);
    }
    return array;
} */

console.log(quickSort([7,2,3,8,1]))
console.log(quickSort([2,3,1,5]))
console.log(quickSort([1,2,3,1,4]))
console.log(quickSort([1]))

console.log("---------------Question25 (Radix Sort)-------------------");

function radixSort(arr){
    if(arr.length === 0) return []
    const greatestNumber = Math.max(...arr)
    const numberOfDigits = Math.floor(Math.log10(greatestNumber));

    for(let i =0; i <= numberOfDigits; i++){
        countingSort(arr, i)
    }

    return arr;
}


function countingSort(arr, place){
    const output = new Array(arr.length).fill(0)
    const temp = new Array(10).fill(0)
    const digitPlace = Math.pow(10, place)
    
    for(let i = 0; i < arr.length; i++){
        const digit = Math.floor(arr[i] / digitPlace) % 10
        temp[digit]++;
    }


    for(let i = 0; i < temp.length; i++){
        temp[i] = temp[i-1] ? temp[i] + temp[i-1] : temp[i]
    }

    for(let j = arr.length-1; j>=0; j--){
        const digit = Math.floor(arr[j] / digitPlace) % 10
        temp[digit]--;
        output[temp[digit]] = arr[j]
    }
    // console.log(output)
    for(let i =0; i<arr.length; i++){
        arr[i] = output[i]
    }
}

console.log(radixSort([73,183,384,374,65,185,247]))
console.log(radixSort([7,2,3,8,1]))
console.log(radixSort([2,3,1,5]))
console.log(radixSort([1,2,3,1,4]))
console.log(radixSort([1]))
