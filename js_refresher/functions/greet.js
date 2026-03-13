export function greet(){
  return "normal function without props";
}

export function hello(name){
  return `hello ${name}`
}

export function twoProps(one,two){
  return (one+two)
}
export function helloAge({name,age}){
  return `hello my name is ${name} I am ${age} years old`
}


// export default {greet,hello,helloAg
