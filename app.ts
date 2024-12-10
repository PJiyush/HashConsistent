import express from 'express'
import { func } from './middleware/middleware.js'
import { Hash } from './Hash.js'
import { hashFunc } from './consitent_hash/Hashing.js'
const app = express()

app.use(express.json())

app.post('/',func,(req, res)=>{
    const id = hashFunc(req.body.id)
    const node = Hash.findValue(id)
    // store in db
        
    // 
    res.send(`data is stored in ${node}`)
})

app.get('/',func,(req, res)=>{
    const id = hashFunc(req.body.id)
    const node = Hash.findValue(id)
    // fetch from db
        
    //
    res.send(`data is fetched from ${node}`)
}
)

export default app