import { Schema, model, models } from 'mongoose';

const shoeSchema = new Schema({
    id:String, //remove once not required
    key: String,
    name:String,
    brand:String,
    key:String,
    color:String,
    primary:String,
    description:String,
    subHeading:String,
    heading:String,
    quantity:Number,
    price:Number,
    basePrice:Number,
    image:String,
    angles:Array,
    alt:String,
    isDiscount:Boolean,
    discount:Number,
    prevPrice:Number,
    watermark:String, 
    customModel:Object
})

const ShoeCollection = models.shoe_collection || model('shoe_collection', shoeSchema);

export default ShoeCollection;