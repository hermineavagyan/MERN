//T = O(n^2), S = O(n)
function isPallindrome(str) {
    let newStr = ""
    for (let i = str.length - 1; i >= 0; i--)
        newStr += str[i] //appending to a string in JS isO(n)operation 

    if (newStr === str)
        return true;
    return false
}
;

console.log(isPallindrome("aA"))