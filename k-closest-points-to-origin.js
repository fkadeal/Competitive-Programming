/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) { 
data=[]
    for(var i = 0; i < points.length; i++){
        var [x1 ,y1] = points[i]  
        var xdif = x1 - 0;
        var ydif = y1 - 0;
        data.push( {key:i ,value:(xdif * xdif + ydif * ydif )}) ;

    }
  
        for(var x = 0; x< data.length-1;x++){
             for(var i = 0; i< data.length-1;i++){
            if(data[i].value > data[i+1].value){
                temp=data[i];
                data[i]=data[i+1];
                data[i+1]=temp; 
            }}
        }  

        answer=[]

        for(var i=0; i<k;i++){
            answer.push(points[data[i].key])
        }
    return answer
};
