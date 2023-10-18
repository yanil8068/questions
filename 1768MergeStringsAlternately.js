var mergeAlternately = function(word1, word2) {
   var sb = "";
        var n1 = word1.length;
        var n2 = word2.length;
        for( var i=0; i<n1 || i<n2 ; i++ ){
            if(i<n1){
               sb += word1.charAt(i);
            }
             if(i<n2){
            sb += word2.charAt(i);
            }
        }
        return sb; 
};
console.log(mergeAlternately("abc", "pqr"));