class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""
        for(let str of strs){
            let len = str.length
            res += len + "ñ" + str
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = []
        for(let i = 0; i< str.length; i++){
            let idx = Number(str.substring(i).indexOf("ñ")) + i
            
            let wordLen = Number(str.substring(i,idx))
            
            let endWord = (idx+1) + wordLen
            
            let word = str.substring(idx+1, endWord)
            res.push(word);
            i= idx + wordLen
        }

        return res;
    }
}
