var createCounter = function(init) {
    currentcount = init ;
    function increment(){
        return ++currentcount;
    }
     function decrement(){
        return --currentcount;
    }
     function reset(){
        currentcount = init ;
        return currentcount;

    }
    return {
        increment: increment,
        decrement: decrement,
        reset: reset

    }
};
console.log(createCounter(100));