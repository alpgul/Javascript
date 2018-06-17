//Objects Basics
var myObj={
    "foo":"value",
    "age":30,
    "address":{
        "street":"123 35",
        "city":"35",
        "pincode":12345
    }
};
console.log(myObj.foo);
console.log(myObj["foo"]);
console.log(myObj);

//Creating Objects
var emp1={};
emp1.firstName="Alp";
emp1.lastName="Gul";
emp1.gender="M";
emp1.designation="Rengional Manager";
var emp2={};
emp2.firstName="2Alp";
emp2.lastName="2Gul";
emp2.gender="2M";
emp2.designation="2Rengional Manager";
function createEmployeeObject(firstname,lastname,gender,designation){
    var newObject={};
    newObject.firstName=firstname;
newObject.lastName=lastname;
newObject.gender=gender;
newObject.designation=designation;
return newObject;
}
var emp3=createEmployeeObject("name","lastname","m","designation");

//JavaScript Constructors
function createEmployeeObject(firstname,lastname,gender,designation){
    this.firstName=firstname;
this.lastName=lastname;
this.gender=gender;
this.designation=designation;
return this;
}

//Difference between regular functions and constructors
var bicycle={
    "cadence":50,
    "speed":20,
    "gear":4
};
var bicycle1=createBicycle(1,2,3);
var bicycle2=createBicycle(4,5,6);

function createBicycle(cadence,speed,gear){
   //var this={};
   var newBicycle={};
    newBicycle.cadence=cadence;
newBicycle.speed=speed;
newBicycle.gear=gear;
return newBicycle;
//return this;
}

function bicycleConstructor(cadence,speed,gear){
    this.cadence=cadence;
    this.speed=speed;
this.gear=gear;
return this
}
function Bicycle(cadence,speed,gear){
    //var this={};
    this.cadence=cadence;
    this.speed=speed;
this.gear=gear;
//return this
}

var bicycle4=bicycleConstructor(10,11,12);
var bicycle3=new Bicycle(7,8,9);
console.log(bicycle3);

//Switching function types and calls
var bicycle5=new createBicycle(21,22,23);
console.log(bicycle5);
