//Min to front 
//[4,2,1,3,5] changes to [1,4,2,3,5]

const minToFront = (arr)=>{
    let min = arr[0]
    let minIndex = 0
    for (let i = 1; i < arr.length; i++){
        if (arr[i]< min){
            min = arr[i]
            minIndex = i;  
        }
        
        }
    for (let j = minIndex; j>0; j--){
        let temp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = temp
        }
    return arr;
}
const min = [4,2,1, 3, 5]
console.log("The min will be : "  + minToFront(min))

