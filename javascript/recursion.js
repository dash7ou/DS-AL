const { performance } = require("perf_hooks");

// Q1
// method 1
// S O(n), T O(2^n)
function fibonacci(n) {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// method 2
// S O(n), T O(n)
function fibonacci2(n) {
  if (n <= 1) return n;

  const database = {};
  if (database[n]) {
    return database[n];
  } else {
    database[n] = fibonacci(n - 1) + fibonacci(n - 2);
    database[n];
  }
}

// method 3
// S O(1), T O(n)
function fibonacci3(n) {
  if (n <= 1) return n;
  let counter = 1;
  let prev = 0;
  let curr = 1;
  let next;
  while (counter < n) {
    next = prev + curr;
    prev = curr;
    curr = next;
    counter++;
  }

  return curr;
}
console.log("---------------Question2-------------------");
// Q2
// [2,3[4,1,2]] = 2+3+ (4+1+2)^2
// T = O(n) where n is total number of elements in main array and sub ones.
// S = O(d) where d is the max depth
function sumOfArray(arr, power = 1) {
  let sum = 0;
  for (let i of arr) {
    if (Array.isArray(i)) {
      sum += sumOfArray(i, power + 1);
    } else {
      sum += i;
    }
  }

  return Math.pow(sum, power);
}

console.log(sumOfArray([2, 3, [4, 1, 2]]));
console.log(sumOfArray([1, 2, [3, 4], [[2]]]));
console.log(sumOfArray([1, 2, [3, 4, [5]]]));

console.log("---------------Question3-------------------");

// T = n * n!, S = n * n!
function possiblePermutations(nums) {
  const startTime = performance.now();
  const permutation = [];
  function helper(nums, i) {
    if (i === nums.length - 1) {
      permutation.push(nums.slice());
      return;
    }

    for (let j = i; j < nums.length; j++) {
      // swap i,j
      [nums[i], nums[j]] = [nums[j], nums[i]];
      helper(nums, i + 1);
      // swap i,j
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  helper(nums, 0);
  const endTime = performance.now();
  console.log(
    `Call to possiblePermutations took ${endTime - startTime} milliseconds`
  );
  return permutation;
}

// possiblePermutations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(possiblePermutations([1, 2]));
// console.log(possiblePermutations([1]));
// console.log(possiblePermutations([]));

// T = n^2 * n!
const possiblePermutations1 = (arr) => {
  const startTime = performance.now();
  if (arr.length < 2) return [arr];

  let initialArr = [arr.slice(0, 1)];
  for (let i = 1; i < arr.length; i++) {
    let allArr = [];
    for (let a of initialArr) {
      const groupOfArr = [];
      let swapArr = [...a, arr[i]];
      groupOfArr.push(swapArr.slice());
      for (let j = swapArr.length - 1; j > 0; j--) {
        [swapArr[j - 1], swapArr[j]] = [swapArr[j], swapArr[j - 1]];
        groupOfArr.push(swapArr.slice());
      }
      initialArr = groupOfArr;
      allArr = [...allArr, ...groupOfArr];
    }
    initialArr = allArr;
    if (i === arr.length - 1) {
      const endTime = performance.now();
      console.log(
        `Call to possiblePermutations1 took ${endTime - startTime} milliseconds`
      );
      return initialArr;
    }
  }
};

// possiblePermutations1([1, 2, 3, 4, 5]);
// console.log(possiblePermutations1([1, 2, 3]));
// console.log(possiblePermutations1([1, 2]));
// console.log(possiblePermutations1([1]));
// console.log(possiblePermutations1([]));

function possiblePermutations3(arr) {
  const results = [];

  function helper(array, startPoint) {
    if (startPoint === array.length - 1) {
      results.push(array.slice());
      return;
    }

    for (let i = startPoint; i < arr.length; i++) {
      [array[startPoint], array[i]] = [array[i], array[startPoint]];
      helper(array, startPoint + 1);
      [array[startPoint], array[i]] = [array[i], array[startPoint]];
    }
  }

  helper(arr, 0);
  return results;
}
console.log(possiblePermutations3([1, 2, 3]));

console.log("---------------Question4-------------------");

// T & S = O(2^n)
function allSubSet(arr) {
  const result = [[]];
  for (let i = 0; i < arr.length; i++) {
    const copyofresult = [...result];
    for (let item of copyofresult) {
      const x = [...item, arr[i]];
      result.push(x);
    }
  }

  return result;
}

console.log(allSubSet([1, 7, 8]));

// T & S = O(2^n)
function allSubSet2(arr) {
  let result = [];
  
  function helper(tree, index){
    const newTree = [...tree]
    for(let j = 0; j < tree.length; j++){
      newTree.push([...tree[j], arr[index]])
    }

    if(index === arr.length -1){
      result = newTree;
      return
    }

    return helper(newTree, index+1)
  }

  helper([[]], 0)

  return result;
}

console.log(allSubSet2([1, 7, 8]));

// T O(2^n)
function allSubSet3(arr){
  const result = []

  function helper(arr, i, subset){
    if(i === arr.length){
      result.push([...subset])
      return
    }

    helper(arr, i+1, subset)
    subset.push(arr[i])
    helper(arr, i+1, subset)
    subset.pop()
  }

  helper(arr, 0, [])
  return result
}

console.log(allSubSet3([1, 7, 8]));
