// reversing the given string:
var reverseWords = function(s) {
    // first spitting the string into different words of arrays removing spaces
    var a = s.split(' ');
    // taking each element of the created array a
    for(let i=0;i<a.length; i++){
        // splitting every single word of the array into their characters like anil to "a","n","i","l";
        const neww = a[i].split('');
        // reversing each splitted word like "a","n","i";"l" to "l","i","n","a"
        neww.reverse();
        //  join all the character back to a word like "lina"
        a[i]=neww.join('');

    }
    // join all words back with a space in between all words "olleh lina"

    var result = a.join(' ');
    console.log(result);
   
};

reverseWords("Let's take LeetCode contest");