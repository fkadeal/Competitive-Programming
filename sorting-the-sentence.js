/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    var sentence = s.split(' ')
     var newArr = [...new Array(sentence.length)]
        
     for(var i=1; i<s.length ; i++){
         sentence.forEach(element=>{
             if(element.includes(i)){
                 newArr[i-1]=element.replace(/[0-9]/g, '')
                }  
         }) 
     }
     newArr=  (newArr.toString()).replace(/,/g,' '); 
    return newArr;
    
};
