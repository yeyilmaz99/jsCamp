// console.log("Merhaba Kodlama.io");

// var dolarDun = 9.20;
// let dolarBugun = 9.32;

// {
//     var dolarDun = 9.10;
// }
// let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kerdisi","Özel Konut Kredileri"]
// console.log("<ul>");

// for (let i = 0; i < konutKredileri.length; i++) {
//     console.log("<li>"+konutKredileri[i]+"</li>");
    
// }

// console.log("</ul>");


// console.log(dolarDun);

//Rest Parameters
let showProducts = function (id,...products){
    console.log(id);
    console.log(products);
}


// console.log(typeof showProducts);

// showProducts(10,["elma","armut","karpuz"]);

//spread

let points = [1,2,3,4,485,45,60];
console.log(...points);
console.log(Math.max(...points));
let yunus = "Yunus";
console.log(...yunus);
console.log(..."ABC","D",..."EFG","H");

// Destructuring

let populations = [10000,20000,30000,...[40000,100000]];
let [small,medium,high,verHigh,maximum] = populations;

// // or
// let populations = [10000,20000,30000,[40000,100000]];
// let [small,medium,high,[verHigh,maximum]] = populations;


console.log(small);
console.log(medium);
console.log(high);
console.log(verHigh);
console.log(maximum);

function someFunction([small1],number) {
    console.log(small1);
}

someFunction(populations);

let category = {id:1, name: "icecek"};
console.log(category.id);
console.log(category.name);

let {id,name} = category;
console.log(id);
console.log(name);
