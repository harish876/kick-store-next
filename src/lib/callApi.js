import axios from "axios";

const callApi = async(url,method,body) =>{
    try {
        const result = await axios({
            method,
            url:`${process.env.NEXT_PUBLIC_API_URL_1}/${url}`,
            data:body
        })
        return {
            status:true,
            response:result,
            error:null
        }
    } catch (error) {
        return {
            status:false,
            response:{},
            error
        }
    }
}
module.exports ={
    callApi
}