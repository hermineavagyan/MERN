//by recursion
//T = O(2^n), S = O(n)
// function fibonacci(n){
//   if (n<=1){
//     return n
//   }else{
//     return fibonacci(n-1) + fibonacci(n-2)
//   }
// }

//by hashTable
//T = O(n), S =O(n)
// function fibonacci(n) {
//     const hashTable = { 0: 0, 1: 1 }

//     if (n in hashTable) {
//         return hashTable[n]
//     } else {
//         hashTable[n] = fibonacci(n - 1) + fibonacci(n - 2)

//     }
//     return hashTable[n]
// }

//itteratively
//T = O(n), S = O(1)
function fibonacci(n) {
    if (n <= 1) {
        return n
    }
    let prev = 0;
    let curr = 1;
    let count = 1;
    let next;
    while (count < n) {
        next = prev + curr;
        prev = curr;
        curr = next;
        count++
    }
    return curr

}
console.log(fibonacci(1))
