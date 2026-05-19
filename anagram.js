/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length!==t.length){
        return false;
    }

    let charObject = {};
    for(let i=0; i<s.length; i++){
        let char = s[i];
        charObject[char] = (charObject[char]||0)+1;
    }

    for(let i=0; i<t.length; i++){
        let char = t[i];

        if(!charObject[char]){
            return false;
        }

        charObject[char]= charObject[char]-1;
    }

    return true;
    
};