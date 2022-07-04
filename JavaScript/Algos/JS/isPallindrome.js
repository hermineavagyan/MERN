//using a new string
//T = O(n^2), S = O(n)
// function isPallindrome(str) {
//     let newStr = ""
//     for (let i = str.length - 1; i >= 0; i--)
//         newStr += str[i] //appending to a string in JS isO(n)operation 

//     if (newStr === str)
//         return true;
//     return false
// };

//using a new array
//T = O(n), S = O(n)
// function isPallindrome(str) {
//     let newArr = []
//     for (let i = str.length - 1; i >= 0; i--)//O(n)
//         newArr.push(str[i]) //pushing to an array is a constant time operation

//     if (newArr.join("") === str)
//         return true;
//     return false
// };

//T = O(n), S = O(1)
function isPallindrome(str) {
    let start = 0;
    let end = str.length - 1;
    while (start <= end) {
        if (str[start] !== str[end]) {
            return false;
        }
        else {
            start++;
            end--;
        }
    }
    return true
}


console.log(isPallindrome("aA"))