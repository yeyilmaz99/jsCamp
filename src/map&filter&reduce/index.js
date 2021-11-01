let products = [
    {id:1, name: "Acer Laptop", unitPrice:2500},
    {id:2, name: "Samsung Laptop", unitPrice:3500},
    {id:3, name: "Asus Laptop", unitPrice:4500},
    {id:4, name: "Mac Laptop", unitPrice:14500},
    {id:5, name: "Windows Laptop", unitPrice:12500}
]

console.log("<ul>");
products.map(product=>console.log(`<li>${product.name}</li>`));
console.log("</ul>");

products.map(product=>{
    // console.log(product)
    console.log(`<li>${product.name}</li>`);
})

// filter (creates new array)

let filteredProducts = products.filter(product=> product.unitPrice>12000);

console.log(filteredProducts);


//reduce 

let cartTotal = products.reduce((acc,product)=>acc +product.unitPrice, 0);
    
console.log(cartTotal);

let cartTotal2 = products //.filter(p=>p.unitPrice>0)
                        .map(p=>{
                            p.unitPrice = p.unitPrice*1.18
                            return p;
                        })
                        .reduce((acc,p)=>acc+p.unitPrice,0);
console.log(cartTotal2)