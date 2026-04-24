class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hashStorage = {}

        for (let i = 0; i<nums.length; i++){
            if(!hashStorage[nums[i]]){
                hashStorage[nums[i]] = 1
            }else{
                hashStorage[nums[i]]++
            }
        }

        return Object.entries(hashStorage).sort(([, a], [, b])=> a-b).map(x=>x[0]).slice(-k)
    }
}
