function targetIndices(nums: number[], target: number): number[] {
    var temp;
    var answer=[]
    nums.forEach(x=>{ 
         for(var i=0;i<nums.length-1;i++){ 
        if(nums[i]>nums[i+1]){
            temp=nums[i+1]
            nums[i+1]=nums[i]
            nums[i]=temp
        }
           
    }
    })
     for(var i=0;i<nums.length;i++){ 
        if(nums[i]==target){
            answer.push(i);
        }
           
    }
 
    return answer;
};
