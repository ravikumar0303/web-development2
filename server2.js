// Ex1 - pass a uname and password to the REST API method=post url =/login
// Pass it as a query parameter 
// On the server side check if uname=iet and password=123 then return result welcome 
// uname else return result wrong user 
import express from 'express'
 
let app = express()

app.post("/login",(req, res)=>{

    let user = req.query.uname
    let pwd = req.query.password

    if(user =="iet" && pwd == "0303")
      res.send(`Welcome to IET Acts ${user}`)


     else
         res.send("wrong Information")
     
})

app.get('/doSquare/:num',(req,res)=>{

     let n = req.params.num

     res.send(`square of ${n},is ${n*n}`)
})

/////////////////////////////////planates//////////////

           import planetsrouter from './request.js'
             app.use("/planets",planetsrouter)



     import guestrouter from "./guestRouter.js"
     app.use('/mehman',guestrouter)

    app.listen(2001,()=>{
       console.log(`App listting is port No. 2001`)
})


