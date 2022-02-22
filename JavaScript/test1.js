var arrayA = ["Java","JavaScript", 3,1];
var arrayB = ["C#", 1, 3,"PHP" , "Java"];
var arrayC ;

console.log("Array A > "+arrayA);
console.log("Array B > "+arrayB);

//removing duplicates from an array using nested for loop

function removeDuplicates(inArray){
    var arr = inArray.concat() // create a clone from inArray so not to change input array
    //create the first cycle of the loop starting from element 0 or n
    for(var i=0; i<arr.length; ++i) { 
        //create the second cycle of the loop from element n+1
        for(var j=i+1; j<arr.length; ++j) { 
            //if the two elements are equal , then they are duplicate
            if(arr[i] === arr[j]) {
                arr.splice(j, 1); //remove the duplicated element 
            }
        }
    }
    return arr;
}
arrayC = arrayA.concat(arrayB);
console.log("Merged arrayC > "+ arrayC );
console.log("Removing duplicates using removeDuplicates > "+ removeDuplicates(arrayC) );