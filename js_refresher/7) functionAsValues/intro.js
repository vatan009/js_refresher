setTimeout(() => {
  console.log('hello')
},1000);

function handleTimeout(){
  console.log('timed out')
}

setTimeout(handleTimeout,1000);

setTimeout(()=>{console.log('half time')},500);

//passing function in the function
function greeter(greet){
  greet();
}

greeter(()=>{console.log('hi')});

//other cases
// setTimeout(handleTimeout(),1000);

//when i add the handleTimeout() like this in the setTimeout then it will return the handleTimeout when setTimeout is executed
// so if i dont want to execute it right away we will exclude ()

