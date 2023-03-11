import { Schema, model, models } from 'mongoose';

const shoeSchema = new Schema({
    key: String,
    name:String,
    color:String,
    primary:String,
    watermark:String,
    heading:String,
    subHeading:String,
    description:String,
    price:Number,
    basePrice:Number,
    quantity:Number,
    customModel:Object
})

const ShoeCollection = models.shoe_schema || model('shoe_schema', shoeSchema);

export default ShoeCollection;