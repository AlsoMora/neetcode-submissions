class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
        let len = Math.trunc(s.length / 2) - 1
        for(let i = 0; i <= len; i++){
            if(s[i] !== s[s.length-(i+1)]) return false
        }
        return true
    }
}
