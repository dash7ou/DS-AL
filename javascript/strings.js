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