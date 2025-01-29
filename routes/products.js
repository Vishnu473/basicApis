const express = require('express')
const router = express.Router()

const products = [
    {
        "id": 1,
        "title": "Wireless Mechanical Keyboard",
        "description": "A compact wireless mechanical keyboard with RGB backlight.",
        "price": 120,
        "discount_price": 99,
        "rating": 4.8,
        "category": "Electronics",
        "fast_delivery": true,
        "image": "https://plus.unsplash.com/premium_photo-1683309565422-77818a287060"
    },
    {
        "id": 2,
        "title": "Noise Cancelling Headphones",
        "description": "Over-ear headphones with active noise cancellation and deep bass.",
        "price": 200,
        "discount_price": 180,
        "rating": 4.7,
        "category": "Electronics",
        "fast_delivery": false,
        "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },
    {
        "id": 3,
        "title": "Smart Watch",
        "description": "Water-resistant smartwatch with health tracking features.",
        "price": 150,
        "discount_price": 130,
        "rating": 4.5,
        "category": "Wearables",
        "fast_delivery": true,
        "image": "https://images.unsplash.com/photo-1546868871-7041f2a55e12"
    },
    {
        "id": 4,
        "title": "Gaming Mouse",
        "description": "Ergonomic gaming mouse with customizable RGB lighting.",
        "price": 50,
        "discount_price": 40,
        "rating": 4.6,
        "category": "Accessories",
        "fast_delivery": true,
        "image": "https://images.unsplash.com/photo-1616296425622-4560a2ad83de"
    },
    {
        "id": 5,
        "title": "4K Ultra HD Monitor",
        "description": "A 27-inch 4K UHD monitor with HDR support for stunning visuals.",
        "price": 350,
        "discount_price": 300,
        "rating": 4.9,
        "category": "Electronics",
        "fast_delivery": false,
        "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf"
    },
    {
        "id": 6,
        "title": "Bluetooth Speaker",
        "description": "Portable Bluetooth speaker with deep bass and long battery life.",
        "price": 80,
        "discount_price": 65,
        "rating": 4.4,
        "category": "Audio",
        "fast_delivery": true,
        "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1"
    },
    {
        "id": 7,
        "title": "Ergonomic Office Chair",
        "description": "Adjustable ergonomic chair with lumbar support.",
        "price": 220,
        "discount_price": 190,
        "rating": 4.7,
        "category": "Furniture",
        "fast_delivery": false,
        "image": "https://images.unsplash.com/photo-1688578735352-9a6f2ac3b70a"
    },
    {
        "id": 8,
        "title": "Smartphone",
        "description": "Latest smartphone with 120Hz AMOLED display and 5G support.",
        "price": 999,
        "discount_price": 899,
        "rating": 4.8,
        "category": "Electronics",
        "fast_delivery": true,
        "image": "https://images.unsplash.com/photo-1634403665481-74948d815f03"
    },
    {
        "id": 9,
        "title": "Wireless Earbuds",
        "description": "True wireless earbuds with noise cancellation and long battery life.",
        "price": 150,
        "discount_price": 120,
        "rating": 4.6,
        "category": "Audio",
        "fast_delivery": true,
        "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_Supreme_1.jpg"
    },
    {
        "id": 10,
        "title": "Adjustable Standing Desk",
        "description": "Height-adjustable standing desk for a healthy workspace.",
        "price": 400,
        "discount_price": 350,
        "rating": 4.9,
        "category": "Furniture",
        "fast_delivery": false,
        "image": "https://www.ikea.com/in/en/images/products/trotten-desk-sit-stand-beige-white__1020768_pe831988_s5.jpg"
    }
]

router.get('/', (req,res) => {
    res.json(products);
})

module.exports = router