/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    var temp;
    nums.forEach(i=>{
        for(var i=0; i<nums.length;i++){
        if(nums[i]>nums[i+1] && nums[i+1] != (undefined || null)){
            temp=nums[i]
            nums[i]=nums[i+1]
            nums[i+1]=temp
        }
    }})
    console.log(nums)
};
