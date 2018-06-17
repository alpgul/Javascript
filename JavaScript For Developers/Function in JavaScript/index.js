//Introduction to Functions
function sayHello(name,timeOfDay){
    console.log('Hello '+name+" Time of day is "+timeOfDay);
}
sayHello("alp","afternoon");

//Flexible argument counts
sayHello("alp","evening",42);
sayHello("alp");

//Return Values
function sum(a,b){
return a+b;
}
var c=sum(1,2);

//Function Expressions
var a = "Hello";
var f = function foo(){
    console.log("Hello");
};
f();

//Anonymous Function Expressions
var d = function (){
    console.log("Hello");
};

d();

d=1;

//d();

//Functions as arguments
var executor=function(fn){
    fn();
    console.log(fn);
}
executor(f);
f=function(name){
    console.log("Hello "+name);
};
executor=function(fn,name){
    fn(name);
};
executor(f,"alp");

//Functions on Objects
var myObj={
    "testProp":true
}
myObj.myMethod =function(){
    console.log("Function in object");
};
myObj.myMethod();

//Understanding the this keyword
var person={
    "firstName":"alp",
    "lastName":"gul",
    "getFullName":function(){
        return person.firstName+" "+person.lastName;
        
    },
    "getFullName2":function(){
        return this.firstName+" "+this.lastName;
        
    }
};
var fullName=person.getFullName();

console.log(fullName);
var person2=person;
persom={};

console.log(person2.getFullName());
console.log(person2.getFullName2());

//Code Exercise
var person={
    "firstName":"alp",
    "lastName":"gul",
    "getFullName":function(){
        return this.firstName+" "+this.lastName;
    },
    "address":{
        "street":"123 Street",
        "city":"Js",
        "state":"CA"
    },
    "isFromState":function(state){
        return(this.address.state===state);
    }
};
consolelog(person.isFromState("ABC"));

//Default function arguments
var add=function (a,b){
    console.log(arguments);
    return a+b;
};
console.log(add(19,30,2,3,4,5));
var add=function (a,b){
var i,sum=0;
for(i=0;i<arguments.length;i++){
    sum +=arguments[i];
}
    return a+b;
};
console.log(add(19,30,2,3,4,5));

//Unit Summary
function addNumber(a,b){
    return a+b;
}
var number=1;
var result=addNumbers(number, number);
var additionFn=function addNumber(a,b){
    return a+b;
};
result=additionFn(number,number);
var additionFn=function (a,b){
    return a+b;
};
result=additionFn(number,number);

var mathObj={};
mathObj.add=function(a,b){
    return a+b;
}
result =mathObj.add(number,number)