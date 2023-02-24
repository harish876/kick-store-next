import connectDB from '../../../database/connect'
import Users from '@/database/model/schema'
import { isEmpty } from 'lodash'
import { hash } from 'bcrypt'
export default async function handler(req,res){
    connectDB().catch(error => res.json({error:`Connection Failed: ${error}`}))

    if(req.method === 'POST')
    {
        console.log(req.body)
        if(isEmpty(req.body))
        {
            return res.status(404).json({error:"No form data"})
        }
        const {username,email,password} = req.body
        const checkExisitng = await Users.findOne({email})
        if(checkExisitng)
        {
            return res.status(422).json({error:"User Exists"})
        }
        Users.create({username,email,password: await hash(password,12)},function(err,data){
            if(err){
                return res.status(404).json({err})
            }
            res.status(201).json({status:true,user:data}) 
        })
    }
    else
    {
        res.status(500).json({message:"Not valid request"})
    }
}