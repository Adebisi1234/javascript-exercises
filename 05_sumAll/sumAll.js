const sumAll = function(a,b) {
    if(typeof a != "number" || typeof b != "number" || Math.sign(a) === -1 || Math.sign(b) === -1){
        return "ERROR"
    }
    let sum = 0
    if(a > b){
        for(let i = a; i >= b; i--){
            sum += i
        }
    }else{
        for(let i = a; i <= b; i++){
            sum += i
        }
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
