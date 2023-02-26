//add to db
const shoeData = {
    'NewBalance':{
        key:'NewBalance997',
        name:'New Balance',
        color:'blue',
        primary:'#2db7f5',
        watermark:'New Balance',
        heading:`New Balance 997's`,
        subHeading:'Dad Shoes',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.`,
        price:189,
        basePrice:189,
        quantity:1
    },
    'Vans':{
        key:'Vans',
        name:'Vans',
        color:'green',
        primary:'#87d068',
        watermark:'Vans',
        heading:`Classic Vans`,
        subHeading:'Son wears these Shoes',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.`,
        price:289,
        basePrice:289,
        quantity:1
        
    },
    'NikeAirPegasus':{
        key:'NikeAirPegasus',
        name:'Nike Air Pegasus',
        color:'black',
        primary:'grey',
        watermark:'Nike',
        heading:`Nike Pegasus`,
        subHeading:'Nice Running Shoes',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.`,
        price:389,
        basePrice:389,
        quantity:1
    },
    'Jordan':{
        key:'Jordan',
        name:'Nike Air Jordans',
        color:'red',
        primary:'#f50',
        watermark:'Nike',
        heading:`Nike Air Jordan 1's`,
        subHeading:`🐐 Shoes?`,
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.`,
        price:489,
        basePrice:489,
        quantity:1
    },
    'Fila':{
        key:'Fila',
        name:'Fila Runners',
        color:'red',
        primary:'orange',
        watermark:'Custom',
        heading:`Fila Customizable Shoes.`,
        subHeading:'Customize your shoe',
        description:`Click on the model to select colors.`,
        price:89,
        basePrice:89,
        quantity:1
    },
}
const nikeList = [
    {
        id:'nk001',
        name:'NIKE KD 15 ALL-STAR',
        price:'130.00',
        image:'https://cdn.shopify.com/s/files/1/0212/4102/products/DV1199-100.jpg?v=1677377654',
        alt:'NIKE KD 15 ALL-STAR',
        isDiscount:true,
        disount:'10',
        prevPrice:'140.00'
    },
    {
        id:'nk002',
        name:'AIR JORDAN 1 LOW TRUE BLUE',
        price:'130.00',
        image:'https://cdn.shopify.com/s/files/1/0212/4102/products/553558-412.jpg?v=1677375488',
        alt:'AIR JORDAN 1 LOW TRUE BLUE',
        isDiscount:false,
    },
    {
        id:'nk003',
        name:'NIKE AIR MAX 95 BLACK EARTH SEQUOIA CARGO KHAKI',
        price:'140.00',
        image:'https://cdn.shopify.com/s/files/1/0212/4102/products/FD0652-001.jpg?v=1677354064',
        alt:'NIKE AIR MAX 95 BLACK EARTH SEQUOIA CARGO KHAKI',
        isDiscount:true,
        disount:'20',
        prevPrice:'150.00'
    },
    {
        id:'nk004',
        name:'NIKE AIR FORCE 1 LOW 07 LX PLAID PALE IVORY STADIUM GREEN',
        price:'160.00',
        image:'https://cdn.shopify.com/s/files/1/0212/4102/products/DV0791-100.jpg?v=1677375950',
        alt:'NIKE AIR FORCE 1 LOW 07 LX PLAID PALE IVORY STADIUM GREEN',
        isDiscount:false,
    },
    {
        id:'nk005',
        name:'NIKE AIR MAX 97 MOVING COMPANY',
        price:'120.00',
        image:'https://cdn.shopify.com/s/files/1/0212/4102/products/DV2621-200.jpg?v=1677353027',
        alt:'NIKE AIR MAX 97 MOVING COMPANY',
        isDiscount:true,
        disount:'13',
        prevPrice:'150.00'
    },
    {
        id:'nk006',
        name:'NIKE AIR MAX SCORPION FK BARELY VOLT',
        price:'100.00',
        image:'https://cdn.shopify.com/s/files/1/0212/4102/products/DJ4701-300.jpg?v=1677352770',
        alt:'NIKE AIR MAX SCORPION FK BARELY VOLT',
        isDiscount:false,
    },
    {
        id:'nk007',
        name:'NIKE AIR FORCE 1 LOW 07 RETRO COLOR OF THE MONTH PINK GUM',
        price:'115',
        image:'https://cdn.shopify.com/s/files/1/0212/4102/products/DM0576-101.jpg?v=1677352527',
        alt:'NIKE AIR FORCE 1 LOW 07 RETRO COLOR OF THE MONTH PINK GUM',
        isDiscount:false,
    },
    {
        id:'nk008',
        name:'NIKE AIR FORCE 1 LOW 07 MEDIUM BLUE',
        price:'100',
        image:'https://cdn.shopify.com/s/files/1/0212/4102/products/DH7561-104.jpg?v=1677351775',
        alt:'NIKE AIR FORCE 1 LOW 07 MEDIUM BLUE',
        isDiscount:false,
    },
]
const successMessage = {
    message:'Order Placed Successfully',
    description:'Order Number 2145677. Mail has been sent to your email with invoice details. Thanks for Shopping with us'
  }
const emptyMessage = {
    message:'No Orders Placed yet',
    description:'Select some cool sneakers!'
}
const successLoginNotification ={
    message: 'Login Success',
    description:'Successfully Logged in',
}
const failureLoginNotification ={
    message: 'Login Failed',
    description:'Invalid Credentials',
}
const successSignupNotification ={
    message: 'Signup Success',
    description:'Successfully Signed in',
}
module.exports ={
    shoeData,
    successMessage,
    emptyMessage,
    successLoginNotification,
    successSignupNotification,
    failureLoginNotification,
    nikeList
}