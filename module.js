// var fs = require('fs')
// fs.readFile("./text.txt","utf8",function(err,data){
//     if(err){
//         console.log("Error in rading in file");
//     }
//     else{
//         console.log(data.toUpperCase());
//     }
// })

// var os = require('os')
// console.log(os.homedir())
// console.log(os.hostname())
// console.log(os.platform())
// console.log(os.release())
// console.log(os.version())

// User -defined modules
var calc = require('./calc')
console.log(calc.add(12,23))
console.log(calc.sub(12,23))
console.log(calc.mul(12,23))
calc.div(12,2,(err,result)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(result);
    }
})
