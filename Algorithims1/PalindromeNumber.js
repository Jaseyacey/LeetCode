/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
     if (x < 0 ) {
            return false;   
     }
        let str = x.toString();
        let len = str.length;
        let i = 0;
        let j = len - 1;
        while (i < j) {
            if (str[i] !== str[j]) {
                return false;
            }
            i++;
            j--;
        }
        
        return true;
};