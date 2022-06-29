function validateUser(user1,pwd,callback){
    if(user1 == "Supriya" && pwd == "SSR"){
        callback(null,"Autentication successful");

    }
    else{
        callback("Authentication Failed",null);
    }
}

validateUser("Supriya","SSR",(err,data) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})








