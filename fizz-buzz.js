// leetCode https://leetcode.com/problems/fizz-buzz/submissions/824662578/
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var answer=[];
    for(var i=1;i<n+1; i++ ){
        if(i%3 == 0 && i% 5==0)
            answer.push("FizzBuzz")
        else if(i%3== 0)
            answer.push("Fizz")
        else if(i%5==0)
            answer.push("Buzz")
        else answer.push(i+'')
    }
        return answer;
    
};
