const removeFromArray = function(arr,  ...opt) {
    const args = opt
    return arr.filter(v => {
        return !args.includes(v);
    });    
};

// Do not edit below this line
module.exports = removeFromArray;
