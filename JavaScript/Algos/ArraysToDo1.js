//Push front
const pushFront =  (val, array) =>{

    for (let i = array.length-1; i>=0; i --){
        array[i+1] = array[i]
    }
    array[0] = val;
    return array;

}
const a= [1,12,23,74,85]
console.log(pushFront(9, a))
//-----------------------------------------
//Pop Front
const popFront =  (array) =>{

    let temp = array[0]
    for (let i = 1; i < array.length; i++){
        array[i-1] = array[i]
    }
    array[array.length-1] = temp
    console.log("Now the array is " + array)
    return array.pop();

}
const b= [1,12,23,74,85]

console.log("The number will be : "  + popFront(b))
//---------------------------------------------
//Insert a given value at a given index 
	const insertAt =  (arr, index, val) =>{
        let temp = arr[index]
        arr[index] = val

        for (let i = arr.length-1; i>=index; i --){
            arr[i+1] = arr[i] 
    }
        console.log(temp)
        arr[index+1] = temp

    return arr;
}
const c= [1,12,23,74,85]

console.log("The array will be : "  + insertAt(c, 2, 7))
//---------------------------------------------------
//Remove the element at a given index

const removeAt = (array, index)=>{
    if(index >=array.length || index < 0){
        console.log("Index out of bound")
        return null;
    }
    let value = array[index]
    for (let i = index+1; i <=array.length; i++){
        array[i-1] = array[i]
    }
    array.pop();
    console.log(array)
    return value;
}
const d= [11,132,63,54,855]

console.log("The value to be removed will be : "  + removeAt(d, 6))
console.log("The value to be removed will be : "  + removeAt(d, 3))
//---------------------------------------------------------------------
//Swap Pairs

const swapPairs = (arr)=>{
    if (arr.length/2 !==0){
        for (let i = 0; i < arr.length-2; i ++){
            let temp = arr[i]
    
            arr[i] = arr[i+1]
            arr[i+1]  = temp;
    
            i++;
        }
    }else {
        for (let i = 0; i < arr.length-1; i ++){
            let temp = arr[i]
    
            arr[i] = arr[i+1]
            arr[i+1]  = temp;
    
            i++;
        }
        
    }
    return arr;
    
}
const e = [1,12,23,74,26]

console.log("The array will be : "  + swapPairs(e))
//---------------------------------------------------

//Given a sorted array, remove duplicate values.
const removeDuplicates = (arr)=>{
    if (arr.length === 0){
        return;   
    }
    let lastUniqueVal = arr[0];
    let nextUniqueIndex = 1;

    for (let i = 1; i< arr.length; i++){
        if(arr[i] !== lastUniqueVal){
            lastUniqueVal = arr[i];
            arr[nextUniqueIndex] = arr[i];
            nextUniqueIndex ++;
        }
       
    }
    
    arr.length = nextUniqueIndex;

    
    return arr;

}
const f = [0,0,1,1,1,2,2,2,3,3,4]

console.log("The array will be : "  + removeDuplicates(f))













