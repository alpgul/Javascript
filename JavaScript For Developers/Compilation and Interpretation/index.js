//Understanding the compilation phase
var a=10;//global a
var b=20;//global b
console.log(a+b);
function myFn(){//global myFn
    var c=20;//myFn scope c
    var d=c;//myFn scope d
    console.log(a+c)
}
myFn();
var myName="alp";//global
function greet(name){//global
    console.log("hello"+name);//greet scope name
}
greet(myName);

//Understanding the interpretation step

//The Global scope problem
var a=10;//global
function myFn(){//global
    var b=a;//myFn scope b
    console.log(b);
c=100;//global  c
}
myFn();

//Some Exercises and a surprising result
a=10;//Global
function outher(){//Global
    var b=a;//outher scope
    console.log(b);
    function inner(){//outher scope
        var c=b;//inner scope b is outher scope
        var b=20;//inner scope
        var c=b;//inner scope
        console.log(c);
    }
    inner();
}
outher();

//Hoisting
//var a,b,c;
a=10;
console.log(b);
c++;
//var a,b,c;

myFn1();
function myFn1(){
    
}
function recurse(){
    recurse();
}
function fnA(){
    fnB();
}
function fnB(){
    fnA();
}
fnC();
var fnC=function (){
};

//Using Strict mode
"use strict";
var myName="";
myname="alp";//error

hesapla();

  function hesapla() {
    "use strict";
     a = 2;
     b = 3;
     c = a + b;
     alert(c);  // Değişken oluşturulmadan kullanıldığından hata verir.
  }
  
  a = {a1:10, a2:20};
  alert(a.a1);  // Değişken oluşturulmadan kullanıldığından hata verir.

 var a = 2;
  delete a;  // Bir değişkeni silmek hata verir.

 function a(a1, a2) {};
  delete a;  // Bir fonksiyonu silmek hata verir.

 function a(a1, a1) {};  // Aynı parametresi iki defa yazılmış hata verir.
 var a = 02;  // Sekizli sayısal değer tanımı hata verir.
  alert(a);
  var a = \010;  // Kaçık karakteri hata verir.
 var nesne = {};
  Object.defineProperty(nesne, "x", {value:1453, writable:false});
  nesne.x = 23;  // Sadece okunabilir hata verir.
 var nesne = {get a() {return 0}};
  nesne.a = 23;  // Sadece değer döndürür hata verir.
  delete Object.prototype; // Silinemez bir özellik hata verir.
 var eval = 1453; // Özel anahtar kelime hata verir.
 var arguments = 1453; // Özel anahtar kelime hata verir.
  with (Math){a = cos(2)}; // Kullanımına izin verilmez hata verir.
eval("var x = 2");
  alert(x);  // Oluşturulmamış değişken hata verir.
/*Katı kural tanımlanırsa özel JavaScript anahtar kelimelerin kullanımına izin verilmez.

implements
interface
let
package
private
protected
public
static
yield*/

