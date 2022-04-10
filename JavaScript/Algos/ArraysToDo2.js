//Reverse an array
// const reverse = (arr)=>{
//    for (let i = 0; i < arr.length/2; i++){
//     temp = arr[i]
//     arr[i] = arr[arr.length-1-i]
//     arr[arr.length-1-i] = temp
//    }
    
//     return arr;
// }
// const a = [2,6,8,9,0,12,45,78]
// console.log(reverse(a))

//Rotate an array
const rotate = (arr, shiftBy) =>{
    for (let i = 0; i < shiftBy; i++){
        
        let last = arr[arr.length-1];//stores the last element of the array 
        for (let j =arr.lenght-2; j>=0; j--){
            //shifts the element of array by one
            arr[j+1]  = arr[j]
        }
        arr[0] = last
    }
    
    return arr;
}
const b = [1,2,3]
console.log(rotate(b, 1))