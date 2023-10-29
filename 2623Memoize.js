function memoize(fn) {
    const cache = new Map();
   const callCount = new Map();
   
   return function(...args) {
       if (args in cache) {
           callCount[args] += 1;
           return cache[args];
       } else {
           const result = fn(...args);
           cache[args] = result;
           callCount[args] = 1;
           return result;
       }
   }
}