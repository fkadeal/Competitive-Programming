/**
 * https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/submissions/866153705/
 * by this time it runs 60ms Beats 92.65% and memory usage is 42.2 MB Beats 47.1%
 */

/*
 * @param {number} num
 * @return {number}
 */

var minimumSum = function(num) {
    numA = num.toString().split``.sort(); 
    num1= numA[0]+numA[2]
    num2= numA[1]+numA[3]

    return parseInt(num1)+parseInt(num2)
};
