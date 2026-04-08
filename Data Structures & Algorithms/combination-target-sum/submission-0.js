class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = [];

        this.backtrack(nums, target, 0, [], result);
        return result;
    }
    backtrack(nums, target, start, current, result){
        if (target === 0){
            result.push([...current]);
            return;
        }
        if (target < 0){
            return;
        }
        for (let i = start; i < nums.length; i++){
            current.push(nums[i]);
            this.backtrack(nums, target - nums[i], i, current, result);
            current.pop();
        }
    }
}
