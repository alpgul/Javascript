//The typeof operator
 var a;
 console.log(typeof a);//undefined
 a=10
 console.log(typeof a);//number
a="hello";
 console.log(typeof a);//string
a=true;
 console.log(typeof a);//boolean
a=null;
 console.log(typeof a);//object

//type Coersion and the === operator
console.log(123+"4")//1234
var b=10;
var c=10;
if(b==c){//true
    console.log("1.Values are equals");
}
c="10"
if(b==c){//true
    console.log("2.Values are equals");
}

if(b===c){//false
    console.log("3.Values are equals");
}

//Type Coercion Summary
if(a){
     console.log(a+"a is true") 
}
a=0;
if(a){
     console.log(a+"a is true") 
}else{
    console.log("a is false")
}
a=-10
if(a){
     console.log(a+"a is true") 
}
a="hello"
if(a){
     console.log(a+"a is true") 
}
a=""
if(a){
     console.log(a+"a is true") 
}else{
    console.log("a is false")
}
a=undefined;
if(a){
     console.log(a+"a is true") 
}else{
    console.log("a is false")
}
a=null;
if(a){
     console.log(a+"a is true") 
}else{
    console.log("a is false")
}
