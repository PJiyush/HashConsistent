import express from 'express'
import { func } from './middleware/middleware.js'
const app = express()

app.use(express.json())

app.post('/',func,(req, res)=>{
    res.send('done')
})

export default app