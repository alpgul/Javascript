//Property lookup with prototypes
function foo(){}
console.log(foo.prototype);
var newObj=new foo();
console.log(newObj);
foo.prototype.test="test";
console.log(newObj.__proto__.test);
newObj.hello="test";
delete newObj.hello;
console.log(newObj);
newObj.__proto__.hello="hello";
console.log(newObj.hello);
console.log(newObj.test);

//Object behaviors using prototypes
function Employee(name){this.name=name;}
var emp1=new Employee("alp");
var emp2=new Employee("gul");
Employee.prototype.test=function(){console.log("test");};
emp1.test();
emp2.test();

//The Object function
var obj=new Object();
var simple={};
function Employee(){}
var emp=new Employee();
emp.__proto__.parentprop="parent of employee";
console.log(emp.__proto__.__proto__===Object.prototype);
Object.prototype.grandparentprop="grand parent";
console.log(emp.grandparentprop);

//inheritance
function Employee(name){
    this.name=name;
}
Employee.prototype.getName=function(){return this.name;}
var emp1=new Employee("alp");
emp1.getName();
function Manager(name){this.name=name}
var mng=new Manager("gul");
mng.__proto__.__proto__=Employee.prototype;
console.log(mng.getName());