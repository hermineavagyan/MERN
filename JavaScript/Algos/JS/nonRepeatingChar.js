// function findNonRepeatingCharacter(string) {
//     let repeat;
//     for (let i = 0; i < string.length; i++) {
//         repeat = false;
//         for (let j = 0; j < string.length; j++) {
//             if (string[i] === string[j] && i !== j) {
//                 repeat = true;
//             }
//         }
//         if (repeat === false) {
//             return i;
//         }
//     }
//     return null;
// }
//optimized T = O(n) complexity
function findNonRepeatingChar(str) {
    const hashTable = {}
    for (let i = 0; i < str.length; i++) {
        if (str[i] in hashTable) {
            hashTable[str[i]]++;
        } else {
            hashTable[str[i]] = 1;
        }

    }
    for (let i = 0; i < str.length; i++) {
        if (hashTable[str[i]] === 1)
            return i;
    }
    return null;
}

a = 'a123412a';
console.log(findNonRepeatingCharacter(a));