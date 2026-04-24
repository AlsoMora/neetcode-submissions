class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        for (let str of strs) {
            const sortedStr = str.split('').sort().join('');
            if (!(sortedStr in res)) {
                res[sortedStr] = [];
            }
            res[sortedStr].push(str);
        }
        return Object.values(res);
    }
}
