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
