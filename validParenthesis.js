var isValid = function(s) {
    let stack = [];
    let pairs ={
        ")":"(",
        "}":"{",
        "]":"[",
    }

    for(let i = 0;i<s.length;i++){
        let char = s[i];

        if(char === "(" || char === "[" || char === "{"){
            stack.push(char);
        }
        else{
            if(stack[stack.length-1]=== pairs[char]){
                stack.pop();
            }
            else{
                return false;
            }
        }
    }
    return stack.length === 0;
    
};