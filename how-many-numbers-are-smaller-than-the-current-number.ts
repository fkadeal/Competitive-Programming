function smallerNumbersThanCurrent(nums: number[]): number[] {
    var result = [...new Array(nums.length)].map(i=>0)
    nums.map((element,i) =>{
        nums.forEach(comp=>{
            if(element > comp){
                result[i]=result[i]+1
            }
        })
    })
        return result
};
