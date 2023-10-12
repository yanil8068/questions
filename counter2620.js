var createCounter = function(n) {
    
    return function() {
       console.log(n++); 
    };
};


const counter = createCounter(10)
 counter() 
 counter() 
 counter() 
