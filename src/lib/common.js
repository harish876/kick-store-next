import { nikeList,newBalanceList } from "@/components/utils/data"
const brandMap ={
    "nk":{
        brand:"Nike",
        brandList:nikeList
    },
    "nb":{
        brand:"New Balance",
        brandList:newBalanceList
    }
}
const getBrand = (shoeId)=>{
    const id = shoeId ?shoeId.slice(0,2):"nk"
    return brandMap[id] ?? "nikeList"
}

module.exports ={
    getBrand
}