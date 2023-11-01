var cancellable = function(fn, args, t) {
    let canceled = false;
  let timeoutId;

  const cancelFn = () => {
    canceled = true;
    clearTimeout(timeoutId);
  };

  const executeFn = () => {
    if (!canceled) {
      return fn(...args);
    }
  };

  timeoutId = setTimeout(executeFn, t);

  return cancelFn; 
};