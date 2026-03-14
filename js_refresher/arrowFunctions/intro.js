




export default (username,message)=>{
  return 1;
}

// onClick{()=>setModalOpen(true)}

()=>{

}

(username,age)=>{

}

// If your arrow functions takes exactly one parameter, you may omit the wrapping parentheses.
number=>{
  return number*3;
}
// If your arrow function contains no other logic but a return statement, you may omit the curly braces and the return keyword.
number => number*3


//
// The following code would be invalid:
// number => return number * 3; // invalid because return keyword must also be omitted!
// number => if (number === 2) { return 5 }; // invalid because if statements can't be returned



// Special case: Just returning an object
number => {age:number}
