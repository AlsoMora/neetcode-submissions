class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const objAux = {
            "[":"]",
            "{":"}",
            "(":")"
        }

        let stack = []

        for(let c of s){
            if(stack.legth === 0) {
                stack.push(c)
                continue
            }

            if (objAux[stack.at(-1)] === c){
                stack.pop()
            }else{
                stack.push(c)
            }
        }

        return stack.length === 0
    }
}
