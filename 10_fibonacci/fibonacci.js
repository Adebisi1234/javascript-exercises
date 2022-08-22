const fibonacci = function(num) {
    if(Math.sign(num) === -1){
        return 'OOPS'
    }else{
        let n1 = 0
        let n2 = 1
        let next;
        for(let i = 0; i < num; i++){
        next = n1 + n2
        n1 = n2
        n2 = next
        }
        return n1
    };
}
    

// Do not edit below this line
module.exports = fibonacci;
