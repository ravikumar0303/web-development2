import { Router } from 'express'
let guestrouter = Router()

export default guestrouter

let hostname= "ravi"

guestrouter.get('/', (req, res) => {
    res.send(`host name is ${hostname}`)
    
  });
