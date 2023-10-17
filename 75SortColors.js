var sortColors = function(nums) {
    for(var turn=0; turn<nums.length-1; turn++){
              var count=false;
        for(var j=0; j<nums.length-1-turn; j++){
            if(nums[j] > nums[j+1]){
                //swap
                var temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
                count = true ;
            }
        }
        if(count == false){
            break;
        }
    }
    return nums;
};
console.log(sortColors([2,0,2,1,1,0]));