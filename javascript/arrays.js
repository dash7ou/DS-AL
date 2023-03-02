// [-4,1,2,7] => [1,4,16,52]

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
