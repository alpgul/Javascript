//JavaScript Functions Primer
function foo(){
    console.log("function foo called");
}
var bar=function(){
console.log("function bar called")
}
foo();
bar();

//Understanding Scopes and Block Scoping
{var a=10;}

//Function Scoping in JavaScript
var name="alp";
if(name==="alp"){
    var department="Engineering";
}
console.log(name);
console.log(department);

function allocateDepartment(){
if(name==="alp"){
    var department="Engineering";
}
}
allocateDepartment();
console.log(department);

//Scope Exercises
var top=10;
var inner=50;
function foo(){
    var inner=20;
    console.log(inner);
}

foo();
    console.log(inner);
    
    function myFn(){
    var a=10;
    var b=20;
    console.log(a+b);   
    }
     myfn();
     var name ="alp";
     function printHello(name){
         console.log("Hello"+name);
     }
     printHello("test");
     
     //IIFE
   var a=10;
   var b=10;
   console.log(a+b);
   
   (function myFn(){
   var a=10;
   var b=10;
   console.log(a+b);       
   })();
   
   //Read and Write operations
var a=10;
console.log(a);
var b;
b=a;
function greet(name){
    console.log(name);
}
greet("alp");

//Implications of Read and Write operations
//console.log(foo);//error
 foo=10;
console.log(foo);
var foo;
console.log(foo);

//The window object
var a=10;
function foo(){
    var b=20;
}
console.log(window.a);