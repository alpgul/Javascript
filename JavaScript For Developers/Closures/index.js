//Introducing Closures
var a=10;
function outher(){
    var b=20;
var inner=function(){
    console.log(a);
    console.log(b);
}
return inner;
}
var innerF  n=outher();
innerFn();

//Closures In Callbacks
var a=10;   
var fn=function(){
console.log(a);
}
setTimeout(fn(),6000);
console.log("Done");

//The Module Pattern
function createperson(){
    var firstname="alp";
    var lastname="gul";
var returnObj={
    "getfirstname":function(){
        return firstname;
    },
    "getlastname":function(){
        return lastname;
    },
    "setfirstname":function(name){
        firstname=name;
    },
    "setlastname":function(name){
        lastname=name;
    }
};
return returnObj;
}
var person=createPerson();
console.log(person.firstname);
console.log(person.getfirstname());
person.setFirstName("foo");
console.log(person.getfirstname());

//Closures In async Callbacks
var i=10;
var print=function(){
    console.log(i);
}
for(i=0;i<10;i++){
    setTimeout(print,1000)
}
for(i=0;i<10;i++){
    print();
}

//Solving async with closures
for(i=0;i<10;i++){
    (function(currentValueOfI){
        //var currentValueOfI=i;
        
    setTimeout(function(){
        console.log(currentValueOfI);
        },1000);
        
    })(i);
}