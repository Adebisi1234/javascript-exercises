const palindromes = function (str) {
    str = str.toLowerCase()
    let str1 = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/gi,"")
    let str2 = str1.replace(/\s/g,"");

    
    let str3 = str2.split('').reverse().join('')
    if(str3 === str2){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
