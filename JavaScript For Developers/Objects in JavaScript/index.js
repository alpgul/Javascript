//Objects in JavaScript
var myObj={};
console.log(myObj);
myObj.prop="Hello";
myObj.prop2=123;
console.log(myObj);
console.log("The number property is "+myObj.prop2);

//The Object Literal
myObj={
    "prop":"Hello",
    "prop1":123,
    "prop3":true
};
console.log(myObj);
console.log("The number property is "+myObj.prop1);
console.log("Accessing property that doesnt exist gives "+myObj.prop2);//undefined

//Object Characteristics Summary

//The dot and bracket notations
console.log("Accessing using quare bracket notation "+myObj["prop1"]);

//Difference between dot and bracket notations
myObj={"1":"one"};
//console.log(myObj.1);
console.log(myObj["1"]);

var propertyName ="1";
console.log(myObj[propertyName]);

//Nested Objects
myObj={
    "ObjProp":{
        "innerProp":"Inner property"
    }
};

console.log(myObj.ObjProp);
console.log(myObj.ObjProp.innerProp);
myObj.ObjProp.newInner="new inner value";
console.log(myObj);
console.log(myObj.ObjProp.newInner);

//Revisting === for objects
myObj={
    "myProp":"Hello"
};
var myObj2;
myObj2=myObj;
console.log(myObj2.myProp);
if(myObj===myObj2){
    console.log("Variables are equals");
}

//Revisting undefined vs null for objects
var person={
    'firstname':'alp',
    'lastname':'gul'
    };
    person.age=undefined;
    person.middleName=null;
   console.log(person.age);
   console.log(person.middleName);
   
   //Deleting properties with the delete operator
   person={
       'firstname':'alp',
       'lastname':'gul',
       'middlename':null,
       'age':25
   };
    person.age=undefined;
    console.log(person);
delete person.age;
    console.log(person);


