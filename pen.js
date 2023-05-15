     
      function Pen(...penCost)

  {

           // this.pcolor = penColor
            this.pcost = penCost
            this.showPeninfo= function()
            {
              console.log(this.pcolor,this.pcost)
            }
       }
        let obj=new Pen("White",50)
        console.log(obj)
        console.log(obj.pcolor,obj.pcost)
        obj.showPeninfo()
      
         let arr = []
                   arr.push(new Pen("blue", 10))
                   arr.push(new Pen("green", 20))
                    arr.push(new Pen("yellow", 30))
                    arr.push(new Pen("white", 40))
                    arr.push(new Pen("black" ,5))

                  // console.log(this.pcolor,this.pcost)
              console.log(arr)
                  //  for (let i=0;i<arr.length;i++)
                  //   {
                  //       console.log(arr[i],i)}
               
                  //   }
          
 

                  
           