class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sLen = s.length
        if( sLen !== t.length ) return false

        for(let i = 0; i<sLen; i++){
            t = t.replace(s[i], "")
        }

        return t.length == 0
    }
}
