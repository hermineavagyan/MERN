function allPermutations(nums) {
    const permutations = [];
    function swap(a, b) {
        let temp = a;
        a = b;
        b = temp
    }

    function helper(nums, i) {
        if (i === nums.length - 1) {
            permutations.push(nums.slice());
            return;
        }
        for (let j = i; j < nums.length; j++) {
            //swap i and j
            [nums[i], nums[j]] = [nums[j], nums[i]];
            //recursivelely calls the helper function
            helper(nums, i + 1);
            //swaps i and j back to get them in their orogonal indecies
            [nums[i], nums[j]] = [nums[j], nums[i]]

        }
    }
    helper(nums, 0);
    return permutations;
}
console.log(allPermutations([1, 2, 3]))
