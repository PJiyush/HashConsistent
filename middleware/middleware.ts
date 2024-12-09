import { Request, Response, NextFunction } from "express"
export const func =  (req:Request, res:Response, next:NextFunction) =>{
    console.log("middleware")
    next()
}