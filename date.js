// let d = new Date()
// console.log(d)
// let t=new Date()
// console.log(t)


// let v=["green" ,"yellow","black","blue"]
// console.log(v.map ((e)=>e.substring(1,2).toUpperCase()))
// console.log(v.map ((e)=>e.substring(1,2).toUpperCase().concat(e.substring(2).toLowerCase())))




// let arr=[52,6,5,25,8,6,4,22,55,8,]

// function callback(x)
// {

//     console.log(x)
// }

// arr.forEach(callback)

// console.log("array ")

// arr.forEach((x)=>console.log(x))


// let s=(x,y)=>x+y
// let w=s(55,10)

// console.log(w)



// function arr(x,y)
// {
//     let mul=x*y

//     console.log("multiply is:", mul)
// }


//  arr(25,5)







function add(choice)
{
               function sum(a,b)
           {
              return a+b
           }

            function mul(x,y)
          {
            return x*y
          }

           function square(x)
           {
               return x*x
           }

           function power(x,y)
           {
               let r=Math.pow(x,y)
               return r
           }

            function div(r1,a1)

            {
                return r1/a1
            }

            function mod(s1,a1)
            {
                return s1%a1
            }
                if(choice == 1)
             {
                  return sum
              }
                  if(choice == 2)
                {
                  return mul
              }
               if(choice == 3)
             {
              return square
            }
              if(choice == 4)
            {
            return power
           } 

           if(choice == 4)
            {
            return power
            }
             else
          {
          return mod
       
         }
}    
        let p =add(4)  
         let a = p(4,5)
            console.log(a)
    
