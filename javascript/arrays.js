// Q1 [-4,1,2,7] => [1,4,16,52]

// First Solution
// here sort function use quick sort so O(nlogn) T and O(n) S
function sortedSquared(array) {
  return array.map((a) => Math.pow(a, 2)).sort((a, b) => a - b);
}

console.log(sortedSquared([-4, 1, 2, 7]));

// Second Solution
// O(n) T and O(n) S
function sortedSquared2(array) {
  const result = new Array(array.length).fill(0);
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  for (let i = array.length - 1; i > -1; i--) {
    const leftSequre = Math.pow(array[leftPointer], 2);
    const rightSequre = Math.pow(array[rightPointer], 2);

    if (leftSequre > rightSequre) {
      result[i] = leftSequre;
      leftPointer++;
    } else {
      result[i] = rightSequre;
      rightPointer--;
    }
  }

  return result;
}

console.log(sortedSquared2([-4, -2, 1, 5, 10]));

// Q2
/**
 * [1,2,3] true
 * [3,2,1] true
 * [] true
 * [1] true
 * [1,2,3,3] true
 * [1,2,4] false
 * [3,2,1] true
 */

// O(n) T, O(1) S
function isMon(arr) {
  const first = arr[0];
  const last = arr[arr.length - 1];

  if (first === last) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] !== arr[i + 1]) {
        return false;
      }
    }
  } else if (first < last) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
  } else {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isMon([1, 2, 3]));
console.log(isMon([1]));
console.log(isMon([]));
console.log(isMon([3, 2, 1]));
console.log(isMon([3, 3, 3]));
console.log(isMon([3, 3, 2]));
console.log(isMon([3, 2, 3]));
console.log(isMon([1, 2, 4, -6]));
console.log(isMon([4, 3, 2, 5]));
console.log(isMon([1, 2, 1, 4]));
console.log(isMon([6, 4, 7, 1]));
console.log(isMon([1, 2, -1, 5]));
