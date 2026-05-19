/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

    if(s.length !== t.length){
        return false;
    }

    const sMapingTot = {};
    const tMapingTos = {};

    for(let i=0; i<s.length ; i++){
        let charS = s[i];
        let charT = t[i];

        if(charS in sMapingTot){
            if(sMapingTot[charS] !== charT){
                return false;
            }

        }else{
            sMapingTot[charS] = charT;
        }

        if(charT in tMapingTos){
            if(tMapingTos[charT] !== charS){
                return false;
            }

        }else{
            tMapingTos[charT] = charS;
        }
    }

    return true;
    
};