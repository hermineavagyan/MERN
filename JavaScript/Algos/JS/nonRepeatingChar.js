function findNonRepeatingCharacter(string) {
    let repeat;
    for (let i = 0; i < string.length; i++) {
        repeat = false;
        for (let j = 0; j < string.length; j++) {
            if (string[i] === string[j] && i !== j) {
                repeat = true;
            }
        }
        if (repeat === false) {
            return i;
        }
    }
    return null;
}

a = 'a123412a';
console.log(findNonRepeatingCharacter(a));