var gcdOfStrings = function(str1, str2) {
    // if str 2 is greater than str 1 then we need to swap them both:
          if(str2.length>str1.length){
         return gcdOfStrings(str2, str1);
 
     }
 
     // if two str is equal then gcd of 2 str is number itself
     if( str2 == str1 ){
         return str1;
 
     }
     // remove common part from str1 
     if(str1.startsWith(str2)){
         // shortening the str 1 if it is greater than str 2 and then doing the same thing again and again until we get str 1 smaller than str 2
         return gcdOfStrings(str1.substring(str2.length),str2);
     }
     // when no gcd possible between two str then we return an empty str;
     return "";
 };
 console.log(gcdOfStrings("ABCABC","ABC"));