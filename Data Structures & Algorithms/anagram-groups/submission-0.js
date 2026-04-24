class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sortedStrs = strs.map(x=> [...x].sort().join(""))
        const usedIndexes = []
        const res = []
        for(let i = 0; i< sortedStrs.length ; i++){
            if(usedIndexes.includes(i)) continue
            const arrSup = [strs[i]]
            for(let j = i+1; j< sortedStrs.length; j++){
                if(sortedStrs[j].length !== sortedStrs[i].length) continue
                if(sortedStrs[i] === sortedStrs[j]){
                    arrSup.push(strs[j])
                    usedIndexes.push(j)
                }
            }
            res.push(arrSup)
            usedIndexes.push(i)
        }
        return res
    }
}
