var once = function(fn) {
    let called = false; 
	return function(...args){
        if (!called) {
            called = true; // Set the flag to true to indicate that fn has been called
            return fn(...args);
        }
    }
};