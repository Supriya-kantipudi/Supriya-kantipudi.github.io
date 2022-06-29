// Any function that acts as parameter in another function is callback function
//Anonymous function --> function without name
function verifylogin(user,pwd,callback){
    if(pwd == "pwd1"){
        callback(null,"correct login");
    }
    else{
        callback("incorrect login",null);
    }
}

// verifylogin("user1","pwd2",function(err,result){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(result);
//     }

// })

verifylogin("user1","pwd2",(err,result)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(result);
    }

})

console.log("program is starting");
setTimeout(() => {
    console.log("inside timeout")
},2000);

console.log("after time out");
console.log("program ending");
