console.log("---------------Question1-------------------");
// Q1
// Method 1 => brute force T = O(n^2), S = O (1)
function nonRepeted(str){
    const arrOfStr = str.split("");
    for(let i = 0; i < arrOfStr.length; i++){
        const arrayWithoutChar = [...arrOfStr.slice(0, i), ...arrOfStr.slice(i+1, arrOfStr.length)]
        if(!arrayWithoutChar.includes(arrOfStr[i])){
            return i;
        }
    }

    return null
}

console.log(nonRepeted("AabclAcbd"))
console.log(nonRepeted("aaAA33"))
console.log(nonRepeted("abA"))

// Method 2: Using hash tables T = O(n), S = O(1)
function nonRepeted1(str){
    const arrOfStr = str.split("")
    const hash = {}

    for(let i = 0; i < arrOfStr.length; i++){
        if(hash[arrOfStr[i]]){
            hash[arrOfStr[i]] = hash[arrOfStr[i]] + 1
        }else{
            hash[arrOfStr[i]] = 1
        }
    }

    for(let i =0; i <arrOfStr.length; i++){
        if(hash[arrOfStr[i]] === 1){
            return i;
        }
    }

    return null
}

console.log(nonRepeted1("AabclAcbd"))
console.log(nonRepeted1("aaAA33"))
console.log(nonRepeted1("abA"))

console.log("---------------Question2-------------------");

// Method 1 reverse and compare T O(n)
// Method 2 T O(n/2), S O(1)
function isPalindrome(str){
    const arrOfStr = str.split("");
    let  j = arrOfStr.length-1;
    for(let i = 0; i < arrOfStr.length; i++){
        if(i === j || i > j){
            return true
        }
        if(arrOfStr[i] !== arrOfStr[j]){
            return false
        }
        j--;
    }
}

console.log(isPalindrome("abcba"))
console.log(isPalindrome("abccba"))
console.log(isPalindrome("abxccba"))
console.log(isPalindrome("aa"))
console.log(isPalindrome("b"))
console.log(isPalindrome("aA"))


console.log("---------------Question3-------------------");
// Method1
// T=O(n^2)
function longestSubstring(str){
    const arrOfStr = str.split("");
    let wordsLengthArr = []
    
    function helper(start = 0){
        const wordAlpha = {}
        for(let i = start; i <= arrOfStr.length; i++){
            if(i === arrOfStr.length){
                const wordLength = Object.keys(wordAlpha).join("").length;
                wordsLengthArr = [...wordsLengthArr, wordLength]
                return
            }
            if(wordAlpha[arrOfStr[i]]){
                const wordLength = Object.keys(wordAlpha).join("").length;
                wordsLengthArr = [...wordsLengthArr, wordLength]
                return helper(start+1)
            }
            wordAlpha[arrOfStr[i]] = arrOfStr[i];
        }
    }
    helper()

    return Math.max(...wordsLengthArr);
}

console.log(longestSubstring("ppppp"))
console.log(longestSubstring("abcbccd"))
console.log(longestSubstring("aaaaaab"))
console.log(longestSubstring("pqbrstbuvwpvy"))
console.log("------------")
// Method 2
// T = O(n)
function longestSubstring1(str){
    let max = 0;
    let start = 0;
    const hash = {}
    const arrOfStr = str.split("")

    for(let i = 0; i < arrOfStr.length; i++){
        const char = arrOfStr[i]
        if(char in hash){
            start = Math.max(start,hash[char] + 1)
        }
        max = Math.max(max, i - start+1)
        // update index
       hash[char] = i;
    }

    return max
}

console.log(longestSubstring1("ppppp"))
console.log(longestSubstring1("abcbccd"))
console.log(longestSubstring1("aaaaaab"))
console.log(longestSubstring1("pqbrstbuvwpvy"))


console.log("---------------Question4-------------------");

// Method 1 T = O(n*klogk) where n is the number of words and k is the length of the longest word.
// Method 2 T = O(n*klogk) u can loop and sort in another array then compare two indexes with {}
function getAnagrams(arr){
    if(arr.length < 2) return [arr];
    let result = {};

    for(let i = 0; i < arr.length; i++){
        const sortedWord = arr[i].split("").sort().join("");
        if(result[sortedWord]){
            result[sortedWord].push(arr[i])
        }else{
            result[sortedWord] = [arr[i]]
        }
    }

    return Object.keys(result).map(r => result[r])
}


console.log(getAnagrams(["arc", "car", "cat", "act", "atc", "abc"]))
console.log(getAnagrams(["abc"]))
console.log(getAnagrams(['']))