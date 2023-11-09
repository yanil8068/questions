var isEmpty = function(obj) {
    // Check for object
  if (typeof obj === 'object' && !Array.isArray(obj)) {
    return Object.keys(obj).length === 0;
  }
  
  // Check for array
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }
  
  // Other data types are not considered empty
  return false;
};