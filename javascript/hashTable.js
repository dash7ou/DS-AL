// Q!

/**
 * [2,7] v = 9 => [0,1]
 * [2,7,3,-1,5] v = 2 => [2,3]
 * [25] v=25 => []
 * [2,7,3,4,6] v=5 => []
 * [] v=10 => []
 */

// First solution
// T O(n^2), S O(1)
const findSumFromArray = (arr, num) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        return [i, j];
      }
    }
  }

  return [];
};

console.log(findSumFromArray([2, 7], 9));
console.log(findSumFromArray([2, 7, 3, -1, 5], 2));
console.log(findSumFromArray([25], 25));
console.log(findSumFromArray([], 10));
console.log(findSumFromArray([2, 7, 3, 4, 6], 5));

console.log("--------------------------------------------");

// Second Solution
// T O(n), S O(n)
// or u can check in first loop if this in dict because search key is O(1) T
const findSumFromArray2 = (arr, num) => {
  const numToRemains = {};

  for (let i = 0; i < arr.length; i++) {
    numToRemains[num - arr[i]] = i;
  }

  for (let i = 0; i < arr.length; i++) {
    if (numToRemains[arr[i]]) {
      return [i, numToRemains[arr[i]]];
    }
  }

  return [];
};

console.log(findSumFromArray2([2, 7], 9));
console.log(findSumFromArray2([2, 7, 3, -1, 5], 2));
console.log(findSumFromArray2([25], 25));
console.log(findSumFromArray2([], 10));
console.log(findSumFromArray2([2, 7, 3, 4, 6], 5));
console.log(findSumFromArray2([2, 7, 3, -4, 6], -2));

console.log("--------------------Question2---------------");
// Q2 Isomorphic Strings
// First Solution T O(2n), S O(1)
const isIsomorphic = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const str1Arr = str1.split("");
  const str2Arr = str2.split("");

  const firstCheck = check(str1Arr, str2Arr);
  const secondCheck = check(str2Arr, str1Arr);

  return firstCheck && secondCheck;
};

function check(str1Arr, str2Arr) {
  const charToChar = {};
  for (let i = 0; i < str1Arr.length; i++) {
    if (charToChar[str1Arr[i]]) {
      if (charToChar[str1Arr[i]] !== str2Arr[i]) {
        return false;
      }
    } else {
      charToChar[str1Arr[i]] = str2Arr[i];
    }
  }

  return true;
}

console.log(isIsomorphic("green", "abccd"));
console.log(isIsomorphic("green", "abcxd"));
console.log(isIsomorphic("green", "abccc"));

console.log("--------------------------------------");
// Second Solution T O(n), S O(1)

const isIsomorphic2 = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const str1Arr = str1.split("");
  const str2Arr = str2.split("");
  const hash1 = {};
  const hash2 = {};
  for (let i = 0; i < str1Arr.length; i++) {
    if (!hash1[str1Arr[i]]) hash1[str1Arr[i]] = str2Arr[i];
    if (!hash2[str2Arr[i]]) hash2[str2Arr[i]] = str1Arr[i];

    if (hash1[str1Arr[i]] !== str2Arr[i] || hash2[str2Arr[i]] !== str1Arr[i])
      return false;
  }

  return true;
};

console.log(isIsomorphic2("green", "abccd"));
console.log(isIsomorphic2("green", "abcxd"));
console.log(isIsomorphic2("green", "abccc"));

console.log("---------------------------------------")

var twoSum = function(nums, target) {
  const remainsToTarget = new Map();

  for(let i=0; i < nums.length; i++){
      const remains = target - nums[i]
      if(remainsToTarget.has(remains)){
          return [remainsToTarget.get(remains).get("index"), i]
      }
      const numDetails = new Map([["index", i], ["remains", remains]])
      remainsToTarget.set(nums[i], numDetails)
  }
};

console.log("---------------------------------------")

var isAnagram = function(s, t) {
  const tMap = new Map();
  const sMap = new Map();
  for(let i = 0; i < t.length; i++){
    tMap.set(t.charAt(i), true)
  }

  for(let i = 0; i < s.length; i++){
    sMap.set(s.charAt(i), true)
  }

  let i = 0
  while(i < s.length){
      if(!tMap.get(s.charAt(i))){
          return false
      }
      i++
  }

  let j = 0;
  while(j < t.length){
    if(!sMap.get(t.charAt(j))){
        return false
    }
    j++
}

  return true
};

console.log(isAnagram("a", "ba"))

console.log("---------------------------------------")

var uniqueOccurrences = function(arr) {
  const map = {}

  for(let num of arr){
      console.log(map)
      if(map[num]){
          map[num] = map[num] + 1;
      }else{
          map[num] = 1
      }
  }

  const result = Object.values(map)
  return result.length === [...new Set(result)].length
};


console.log(uniqueOccurrences([1,2,2,1,1,3]))