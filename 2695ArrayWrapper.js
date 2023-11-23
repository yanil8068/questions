
var ArrayWrapper = function(nums) {
    this.arr=nums; 
};


ArrayWrapper.prototype.valueOf = function() {
  let Sum=0;  
    let arr1=this.arr;   
    for(v of arr1)
    {
        Sum+=v;
    }
    return Sum;  
}


ArrayWrapper.prototype.toString = function() {
   return JSON.stringify(this.arr); 
}

