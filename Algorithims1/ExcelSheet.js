/**
 * 
 * Given an integer column number, return the letter associated with that column,
 */
// Language: javascript
// Path: Algorithims1/ExcelSheet.js
// Compare this snippet from Algorithims1/SortArray.js:

let getColumnLetter = function(n) { 
        let string = "";
    // while n is greater than 0
    while(n>0){
        // if n is greater than 26
        let remainder = n%26;
        // if remainder is 0
        if(remainder==0) string = "A"+string;
        // if remainder is not 0
        else string = String.fromCharCode(64+remainder)+string;
        // n is divided by 26
        n = Math.floor(n/26);
    }
    return string;
}