const app=[1,2,3];
const arr = app.map((element)=>{
  return {val:element}
})
const arr2=app.filter((el)=>el!==1);
console.log(app);
console.log(arr);
console.log(arr2);
