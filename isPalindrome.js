//https://leetcode.com/problems/palindrome-number/submissions/864102653/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const num = x.toString();
    if(num.length === 1) return true;
    let rev = [];
    // rev.length = num.length
    for(var i=0;i < num.length ;i++){
        rev[num.length-1 -i]=num[i]
    }  

    if(rev.toString() == num.split('')){
        return true
    }else return false;



};
