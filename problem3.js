var mypenguin = {name:"Mumble",origin : "Antartica",livingarea:"Drake"}
console.log("Hello! I'm a penguin and my name is "+ mypenguin.name)
mypenguin.Canfly = false;
mypenguin.chirp = function(){
    return ("CHIRP CHIRP!");
};
mypenguin.sayHello = function(){
    return ("Hello! I'm a penguin and my name is"+ this.name);
};
console.log(mypenguin.sayHello());
mypenguin.name = "Penguin McPenguin";
console.log(mypenguin.sayHello());
mypenguin.fly = function(){if(mypenguin.Canfly){
    console.log("I can fly");

}
else{
    console.log("No flying for me!")
}}
mypenguin.fly();