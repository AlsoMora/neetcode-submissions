class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hashStore = {}

        for(let i = 0; i<nums.length; i++){
            if(nums[i] in hashStore){
                return true
            }else{
                hashStore[nums[i]] = 1
            }
        }

        return false
    }
}
