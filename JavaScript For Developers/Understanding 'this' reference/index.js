//Function Execution Types
function foo(){
    console.log("Hello");
    console.log(this);
}
foo();//method #1

var obj={"prop":"This is the object itself!"};

obj.foo=function(){
    console.log("Hello");
    console.log(this);
};
obj.foo();//Method #2

new foo();//Method #3

foo.call();//Method #4

//Working on objects with this reference
function Bicycle(cadence, speed, gear, tirePressure){
    this.cadence=cadence;
this.speed=speed;
this.gear=gear;
this.tirePressure=tirePressure;
this.inflateTires=function(){
    this.tirePressure +=3;
};
}
var bicycle1=new Bicycle(1,2,3,4);
bicycle1.inflateTires();
var bicycle2=new Bicycle(5,6,7,8);
bicycle2.inflateTires();

//Using the call function
function Mechanic(name){
    this.name=name;
}
var mike =new Mechanic("mike");
mike.infkateTires=bicycle1.inflateTires();
mike.infkateTires();

function foo(){this.abc=def;}

foo.call({});
//foo();


var person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
var person1 = {
    firstName:"John",
    lastName: "Doe",
}
person.fullName.call(person1, "Oslo", "Norway");
