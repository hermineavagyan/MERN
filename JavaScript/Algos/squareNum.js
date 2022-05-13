const promotions = (numOfCust,listOfBills )=>{
    var count = 0;
    for(var i = 0; i<numOfCust; i++){
        if(listOfBills[i]>0 && Math.sqrt(listOfBills[i])%1 === 0){
            count ++;
        }
    }return count
    console.log(count)
}
let arr = [64,3,225,20,16]
console.log(promotions(5, arr))