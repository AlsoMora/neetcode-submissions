class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
       const numsSet = new Set(nums);
       let maxSequence = 0;
       for(let num of numsSet){
            if(!numsSet.has(num - 1)){
                let currentSeq = 1
                while(numsSet.has(num + currentSeq)){
                    currentSeq+=1
                }
                maxSequence = Math.max(maxSequence, currentSeq)
            }
       }
       return maxSequence
    }
}
