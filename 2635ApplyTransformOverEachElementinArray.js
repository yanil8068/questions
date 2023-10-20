var map = function(arr, fn) {
 
    // for(let i=0 ; i<arr.length ; i++ )
    //     arr[i] = fn(arr[i],i);
        
    //     return arr;
        var returnedArray = [];
    for (let i = 0; i < arr.length; i++) {
        returnedArray.push(fn(arr[i], i));
    }
    return returnedArray;
    
};
fn = function plusI(n, i){ return n + i; }
console.log(map([1,2,3],fn));
