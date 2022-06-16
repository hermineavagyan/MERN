function isValidSubsequence(array, sequence) {
    let arrayIndex = 0;
        let sequenceIndex = 0;
        while (arrayIndex < array.length && sequenceIndex < sequence.length){
            if (sequence[sequenceIndex] === array[arrayIndex]){
                sequenceIndex++;
            }
            arrayIndex++;
            
        }
        return sequenceIndex === sequence.length;
        
    }