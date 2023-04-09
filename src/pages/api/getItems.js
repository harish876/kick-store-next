import connectDB from '@/database/connect'
import ShoeCollection from "@/database/model/shoeSchema"

export default async function handler(req,res){
    connectDB().catch(error => res.json({error:`Connection Failed: ${error}`}))

    if(req.method === 'POST')
    {
        try {
            //add filters
            const data = await ShoeCollection.find({})
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