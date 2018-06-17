//Introducing Arrays
var myArray=[100,200,300];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray.length);
myArray[3]="Javascript";
console.log(myArray[3]);

//The Secret behind JavaScript Arrays
console.log(myArray.length);
var myArray2=myArray;
console.log(myArray2);
console.log(myArray2["0"]);
myArray[400]="baz";
console.log(myArray.length);//401
myArray["foo"]="abc";
console.log(myArray);
