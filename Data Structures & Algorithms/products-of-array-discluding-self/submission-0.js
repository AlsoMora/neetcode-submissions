class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        return nums.map((num, i)=>nums.filter((item,idx) => idx !== i).reduce((acc, val) => acc *= val, 1))
    }
}
