//Reverse an array
const reverse = (arr)=>{
   for (let i = 0; i < arr.length/2; i++){
    temp = arr[i]
    arr[i] = arr[arr.length-1-i]
    arr[arr.length-1-i] = temp
   }
    
    return arr;
}
const g = [2,6,8,9,0,12,45,78]
console.log(reverse(g))

//Rotate an array
const rotate = (arr, shiftBy) =>{

    let actualMovesNeeded;
    if (shiftBy>0){
        actualMovesNeeded = shiftBy % arr.length;
        console.log(actualMovesNeeded)
    }else{
        actualMovesNeeded = Math.abs(shiftBy) %arr.length;
        console.log(actualMovesNeeded)
    }
    if(shiftBy > 0 ){//means rotating to the right
        for (let i = 0; i < shiftBy; i++){
            let temp = arr[arr.length - 1];
            for (let j = arr.length -2; j>=0; j--){
                arr[j+1] = arr[j]
            }
            arr[0] =temp
        }
    }
    else{
        //rotating to the lleft 
        for (let i = 0; i < shiftBy; i++){
            let temp = arr[0];
            for (let j = 1; j< arr.length-1; j++){
                arr[j-1] = arr[j]
            }
            arr[arr.length-1] = temp
        }
    }
    
    return arr;
}
const k = [1,2,3]
console.log(rotate(k, -2))
//-------------------------------------------
//Filter Range
//Given arr and values min and max, retain only the values between min and max.
const filterRange = (arr,min, max)=>{
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < min || arr[i]> max){
            for (let j = i + 1; j< arr.length;j++){
                arr[j-1] = arr[j]
            }
            
            arr.length--;
            i--;
            
        }

}
return arr;
}
const m = [3,4,7,90,45,67,12,1]
console.log(filterRange(m,5,15 ))
//----------------------------------------------
//Concat
//Replicate javaScript concat()
const arrConcat = (arr1, arr2) =>{
    var newArray = [];
    var currentIndex = 0;
    //loop therough the first array
    for  (let i = 0; i < arr1.length; i++){
        newArray[currentIndex] = arr1[i];
        currentIndex ++;
    }
    for  (let i = 0; i < arr2.length; i++){
        newArray[currentIndex] = arr2[i];
        currentIndex ++;
    }
    return newArray;

}

const a = [1,2,3]
const b = ["Hello", "World"]
console.log(arrConcat(a,b))