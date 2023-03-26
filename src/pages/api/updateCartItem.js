import connectDB from '@/database/connect'
import CartCollection from "@/database/model/cartSchema"
import mongoose from 'mongoose'
import { get } from 'lodash'

export default async function handler(req,res){
    connectDB().catch(error => res.json({error:`Connection Failed: ${error}`}))

    if(req.method === 'POST')
    {
        try {
            const {id,quantity} = req.body
            const filter ={
                "_id":mongoose.Types.ObjectId(id)
            }
            const data = await CartCollection.updateOne(filter,{
                $set: { "quantity": quantity}
            })
            console.log(req.body,data)
            return res.status(200).json({status:true,data,error:null})
        } catch (error) {
            return res.status(500).json({status:false,data:null,error})
        }
    }
    else
    {
        return res.status(500).json({status:false,data:null,error:"Not valid request"})
    }
}