/**
 *
 * select
 * @param {number[]} arr
 * @param {number} i
 * @return {number}
 *
 * selectionSort
 * @param {number[]} arr
 * @param {number} n
 */
class Solution
{
  select(arr,i){
     // code here such that selectionSort() sorts arr[]
     //  sellecting sort
    //  arr[]
    
  }

  //Function to sort the array using selection sort algorithm.
  selectionSort(arr,n){
   //code here
      var i, j, min_idx;
  
    for (i = 0; i < n-1; i++)
    { 
        min_idx = i;
        for (j = i + 1; j < n; j++)
        if (arr[j] < arr[min_idx])
            min_idx = j;
 
        // Swap the found minimum element with the first elementn
         var temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
   
  }
    
}
