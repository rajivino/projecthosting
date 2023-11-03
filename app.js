const wrapper = document.querySelector(".sliderWrapper");

const menuItem = document.querySelectorAll(".menuItem")

const product = [
    {
        id:1,
        title:"Air Force",
        price:119,
        color:[
            {
                code:"black",
                img:"image/air.png",
            },
            {
                code:"dark blue",
                img:"image/air2.png",
            },
        ],
    },
    {
        id:2,
        title:"Air Jordan",
        price:149,
        color:[
            {
                code:"lightgray",
                img:"image/jordan.png",
            },
            {
                code:"green",
                img:"image/jordan2.png",
            },
        ],
    },
    {
        id:3,
        title:"Blazer",
        price:109,
        color:[
            {
                code:"lightgray",
                img:"image/blazer.png",
            },
            {
                code:"green",
                img:"image/blazer2.png",
            },
        ],
    },
    {
        id:4,
        title:"Crater",
        price:129,
        color:[
            {
                code:"black",
                img:"image/crater.png",
            },
            {
                code:"green",
                img:"image/crater2.png",
            },
        ],
    },
    {
        id:5,
        title:"Hippie",
        price:99,
        color:[
            {
                code:"gray",
                img:"image/hippie.png",
            },
            {
                code:"black",
                img:"image/hippie2.png",
            },
        ],
    },

];

let choosenProduct = product[0]

const currentProductImg =document.querySelector(".productImg");
const currentProductTitle =document.querySelector(".productTitle");
const currentProductPrice =document.querySelector(".productPrice");
const currentProductColor = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItem.forEach((item, index)=> {
    item.addEventListener("click",()=>{
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`

        //change the choosen product

        choosenProduct = product[index];

        // change text of current product

        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.color[0].img;


        currentProductColor.forEach((color, index) => {

            color.style.backgroundColor = choosenProduct.color[index].code;
        })
    });

});


currentProductColor.forEach((color, index) =>{
    color.addEventListener("click", () =>{
        currentProductImg.src = choosenProduct.color[index].img
    });
});

currentProductSizes.forEach((size, index) =>{
    size.addEventListener("click", ()=>{
        currentProductSizes .forEach((size) =>
        {
            size.style.backgroundColor = "white"
            size.style.color = "black"
        })
        size.style.backgroundColor = "black"
        size.style.color = "white"
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close")

productButton.addEventListener("click", ()=>{
    payment.style.display = "flex"
});

close.addEventListener("click", ()=>{
    payment.style.display = "none"
});