let userMessage='hello';

userMessage=userMessage.concat('!!!');
console.log(userMessage);

const number=[1,2,3];

//const doesnt means value cant be edited its like it cant be overwritten
//number=[]        // this will give the error
number.push(4);       // but this will not give the error
//arrays are objects
//objects are called reference values;
console.log(number)

//for objects, the memory address is stored in the variable
//the underlying value can be edited without changing that address
//the value can therefore be edited without reassigning the variable
