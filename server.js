
//const express = require("express");
import express from 'express'


 let app = express()

app.get('/ravi', (request, response) => {
    return response.send('Hey! Thish is IET Acts server ');
  });
  

  
app.get("/Abbe",(req , res)=>{
    return res.send("Tusa Program jhala ka ")
})

app.get("/hi",(req , res)=>{
    return res.send("This side ravi Kumar ")
})
app.get("/Education",(req,res)=>{
    return res.send(" I'M currentally study from IET Acts Pune")
})

app.get("/care",(req,res)=>{
    return res.send(" Jevan jgala ka")
})



app.post("/login",(req,res)=>{
    let user = req.query.uname
    let pwd = req.query.password

    if(user == "iet" && pwd == "123")
      res.send(`welcome ${user}`)
    else
      res.send("wrong credentials")

})

app.listen(1303, () => {
    console.log('App is listening on port 1303');
  });