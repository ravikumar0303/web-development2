
let arr=[22,"true",6.3,"javascript"]

   arr.push(50)
   arr.push(45,2,5,55,46)
console.log(typeof(arr))
console.log(arr,typeof(arr),arr.length)

arr.pop()
arr.pop()
console.log(arr,typeof(arr),arr.length)
arr.splice(3,4)
console.log(arr,typeof(arr),arr.length)
 
arr.splice(2,3)
console.log(arr,typeof(arr),arr.length)

arr.splice(1,4)
console.log(arr,typeof(arr),arr.length)


///////////////////indexof/////////////////////////////////////

let index=arr.indexOf(55)

if (index>0)
   console.log("index not found")
  else
      console.log("index is",index) 


      arr.splice(2,2,"alpha","beta","gama")
      console.log(arr)
      