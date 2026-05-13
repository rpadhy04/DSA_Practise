var longestCommonPrefix = function(strs) {
    let results = "";

    for(let i =0;i<strs[0].length;i++){
        for(let j=1; j<strs.length; j++){
            if(strs[0][i]!== strs[j][i]){
                return results;
            }
        }
        results += strs[0][i];
    }
    return results;
    
};
