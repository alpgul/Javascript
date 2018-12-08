let message;
message = 'Hello!';

alert(message); // shows the variable content
let user = 'John', age = 25, message1 = 'Hello';


message = 'Hello!';

message = 'World!'; // value changed

alert(message);
let hello = 'Hello world!';



// copy 'Hello world' from hello into message
message = hello;

// now two variables hold the same data
alert(hello); // Hello world!
alert(message); // Hello world!

//Variable naming
let userName;
let test123;
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3

let 1a; // cannot start with a digit

let my-name; // a hyphen '-' is not allowed in the name

//Non-English letters are allowed
let имя = '...';
let 我 = '...';

//Reserved names
let let = 5; // can't name a variable "let", error!
let return = 5; // also can't name it "return", error!


//Constants
const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // error, can't reassign the constant!