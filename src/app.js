console.log("Merhaba Kodlama.io");

var dolarDun = 9.20;
let dolarBugun = 9.32;

{
    var dolarDun = 9.10;
}
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kerdisi","Özel Konut Kredileri"]
console.log("<ul>");

for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>");
    
}

console.log("</ul>");


console.log(dolarDun);
