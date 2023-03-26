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
        brand:"Nike",
        key:'Nike KD 15 ALL_STAR',
        color:'red',
        primary:'orange',
        description:`Phoenix Suns Star Kevin Durant Shoes`,
        quantity:1,
        name:'NIKE KD 15 ALL-STAR',
        subHeading:'Brand New with Box (Deadstock)',
        price:'130',
        basePrice:'130',
        image:'https://cdn.shopify.com/s/files/1/0212/4102/products/DV1199-100.jpg?v=1677377654',
        angles:[
            {
                angle:'front',
                image:'https://cdn.shopify.com/s/files/1/0212/4102/products/DV1199-100.jpg?v=1677377654'
            },
            {
                angle:'bottom',
                image:'https://cdn.shopify.com/s/files/1/0212/4102/products/DV1199-100_2.jpg?v=1677377655'
            },
            {
                angle:'back',
                image:'https://cdn.shopify.com/s/files/1/0212/4102/products/DV1199-100_3.jpg?v=1677377655'
            },
            {
                angle:'side',
                image:'https://cdn.shopify.com/s/files/1/0212/4102/products/DV1199-100_4.jpg?v=1677377655'
            },
        ],
        alt:'NIKE KD 15 ALL-STAR',
        isDiscount:true,
        disount:'10',
        prevPrice:'140.00'
    },
    {
        id:'nk002',
        brand:"Nike",
        name:'AIR JORDAN 1 LOW TRUE BLUE',
        price:'130',
        quantity:1,
        image:'https://cdn.shopify.com/s/files/1/0212/4102/products/553558-412.jpg?v=1677375488',
        alt:'AIR JORDAN 1 LOW TRUE BLUE',
        angles:[
            {
                angle:'front',
                image:'https://cdn.shopify.com/s/files/1/0212/4102/products/553558-412_4.jpg?v=1677375488'
            },
            {
                angle:'bottom',
                image:'https://cdn.shopify.com/s/files/1/0212/4102/products/553558-412_2.jpg?v=1677375488'
            },
            {
                angle:'back',
                image:'https://cdn.shopify.com/s/files/1/0212/4102/products/553558-412_3.jpg?v=1677375488'
            },
            {
                angle:'side',
                image:'https://cdn.shopify.com/s/files/1/0212/4102/products/553558-412_1.jpg?v=1677375488'
            },
        ],
        isDiscount:false,
    },
    {
        id:'nk003',
        brand:"Nike",
        name:'NIKE AIR MAX 95 BLACK EARTH SEQUOIA CARGO KHAKI',
        price:'140',
        quantity:1,
        image:'https://cdn.shopify.com/s/files/1/0212/4102/products/FD0652-001.jpg?v=1677354064',
        alt:'NIKE AIR MAX 95 BLACK EARTH SEQUOIA CARGO KHAKI',
        isDiscount:true,
        disount:'20',
        prevPrice:'150'
    },
    {
        id:'nk004',
        brand:"Nike",
        name:'NIKE AIR FORCE 1 LOW 07 LX PLAID PALE IVORY STADIUM GREEN',
        price:'160',
        quantity:1,
        image:'https://cdn.shopify.com/s/files/1/0212/4102/products/DV0791-100.jpg?v=1677375950',
        alt:'NIKE AIR FORCE 1 LOW 07 LX PLAID PALE IVORY STADIUM GREEN',
        angles:[
            {
                angle:'front',
                image:'https://cdn.shopify.com/s/files/1/0212/4102/products/DV0791-100.jpg?v=1677375950'
            },
            {
                angle:'top',
                image:'https://cdn.shopify.com/s/files/1/0212/4102/products/DV0791-100_2.jpg?v=1677375950'
            },
            {
                angle:'bottom',
                image:'https://cdn.shopify.com/s/files/1/0212/4102/products/DV0791-100_4.jpg?v=1677375950'
            },
            {
                angle:'back',
                image:'https://cdn.shopify.com/s/files/1/0212/4102/products/DV0791-100_3.jpg?v=1677375950'
            },
            {
                angle:'side',
                image:'https://cdn.shopify.com/s/files/1/0212/4102/products/DV0791-100_1.jpg?v=1677375950'
            },
        ],
        isDiscount:false,
    },
    {
        id:'nk005',
        brand:"Nike",
        name:'NIKE AIR MAX 97 MOVING COMPANY',
        quantity:1,
        price:'120',
        image:'https://cdn.shopify.com/s/files/1/0212/4102/products/DV2621-200.jpg?v=1677353027',
        alt:'NIKE AIR MAX 97 MOVING COMPANY',
        isDiscount:true,
        disount:'13',
        prevPrice:'150'
    },
    {
        id:'nk006',
        brand:"Nike",
        name:'NIKE AIR MAX SCORPION FK BARELY VOLT',
        quantity:1,
        price:'100',
        primary:'#2db7f5',
        image:'https://cdn.shopify.com/s/files/1/0212/4102/products/DJ4701-300.jpg?v=1677352770',
        alt:'NIKE AIR MAX SCORPION FK BARELY VOLT',
        isDiscount:false,
    },
    {
        id:'nk007',
        brand:"Nike",
        name:'NIKE AIR FORCE 1 LOW 07 RETRO COLOR OF THE MONTH PINK GUM',
        quantity:1,
        price:'115',
        image:'https://cdn.shopify.com/s/files/1/0212/4102/products/DM0576-101.jpg?v=1677352527',
        alt:'NIKE AIR FORCE 1 LOW 07 RETRO COLOR OF THE MONTH PINK GUM',
        isDiscount:false,
    },
    {
        id:'nk008',
        brand:"Nike",
        name:'NIKE AIR FORCE 1 LOW 07 MEDIUM BLUE',
        quantity:1,
        price:'100',
        image:'https://cdn.shopify.com/s/files/1/0212/4102/products/DH7561-104.jpg?v=1677351775',
        alt:'NIKE AIR FORCE 1 LOW 07 MEDIUM BLUE',
        isDiscount:false,
    },
]
const newBalanceList = [
    {
        id:'nb001',
        brand:"New Balance",
        name:'NEW BALANCE 992 MIUSA WHEAT',
        price:'100',
        image:'https://cdn.shopify.com/s/files/1/0212/4102/products/f3e9bafe-6e31-5a78-b4ec-45dc3b03f8ab.jpg?v=1666037001',
        alt:'NEW BALANCE 992 MIUSA WHEAT',
        isDiscount:true,
        disount:12,
        prevPrice:'112'
    },
    {
        id:'nb002',
        brand:"New Balance",
        name:'JJJJOUND X NEW BALANCE MADE IN UK 991',
        price:'100',
        image:'https://cdn.shopify.com/s/files/1/0212/4102/products/c3e28f22-7a22-5247-9cc7-39198dffb2d0.jpg?v=1676053000',
        alt:'JJJJOUND X NEW BALANCE MADE IN UK 991',
        isDiscount:false,
    },
    {
        id:'nb003',
        brand:"New Balance",
        name:'NEW BALANCE 550 MARQUETTE',
        price:'100',
        image:'https://cdn.shopify.com/s/files/1/0212/4102/products/e93c44a8-e89d-5d94-bff9-40027b2280b2.jpg?v=1666215979',
        alt:'NEW BALANCE 550 MARQUETTE',
        isDiscount:false,
    },
    {
        id:'nb004',
        brand:"New Balance",
        name:'NEW BALANCE X SNS 237 BLUE RACER MS237NS',
        price:'100',
        image:'https://cdn.shopify.com/s/files/1/0212/4102/products/MS237NS.jpg?v=1637151503',
        alt:'NEW BALANCE X SNS 237 BLUE RACER MS237NS',
        isDiscount:false,
    },
    {
        id:'nb005',
        brand:"New Balance",
        name:'NEW BALANCE 1500 MIAMI WHITE GREEN FUCHSIA',
        price:'100',
        image:'https://cdn.shopify.com/s/files/1/0212/4102/products/M1500WTP.jpg?v=1666942100',
        alt:'NEW BALANCE 1500 MIAMI WHITE GREEN FUCHSIA',
        isDiscount:false,
    },
    {
        id:'nb006',
        brand:"New Balance",
        name:'UNITED ARROWS X NEW BALANCE 2002R',
        price:'100',
        image:'https://cdn.shopify.com/s/files/1/0212/4102/products/SneakerboxShoeTemplate-2022-06-07T003435.421.jpg?v=1654551288',
        alt:'UNITED ARROWS X NEW BALANCE 2002R',
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
const paymentIcons =[
  'https://cdn.shopify.com/s/files/1/0576/7361/3467/files/visa.png?v=1624956079',
  'https://cdn.shopify.com/s/files/1/0576/7361/3467/files/paypal.png?v=1624956079',
  'https://cdn.shopify.com/s/files/1/0576/7361/3467/files/american-express.png?v=1624956079',
  'https://cdn.shopify.com/s/files/1/0212/4102/files/shop-pay-icon.png?v=1632347278',
  'https://cdn.shopify.com/s/files/1/0576/7361/3467/files/mastercard2.png?v=1624956547',
  'https://cdn.shopify.com/s/files/1/0212/4102/files/coinbase-icon.png?v=1632347278'
]
const mainOptions= {
    type      : 'slide',
    perPage   : 1,
    perMove   : 1,
    gap       : '1.5rem',
    padding   :'10px',
    pagination: false,
    arrows    : false,
    rewind      : true,
    trimSpace: 'move',
    height    :'30vh',
    pagination  : false,
  };

  const thumbsOptions= {
    type        : 'slide',
    rewind      : true,
    gap         : '2rem',
    pagination  : false,
    fixedWidth  : 120,
    fixedHeight : 120,
    cover       : true,
    focus       : 'center',
    isNavigation: true,
    arrows      : false,
  };

module.exports ={
    shoeData,
    successMessage,
    emptyMessage,
    successLoginNotification,
    successSignupNotification,
    failureLoginNotification,
    nikeList,
    newBalanceList,
    paymentIcons,
    mainOptions,
    thumbsOptions
}