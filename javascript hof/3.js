const items = [
    {
        name: "Iphone 15",
        category: "Mobile",
        priceUSD: 999,
    },
    {
        name: "Macbook Air",
        category: "Laptops",
        priceUSD: 1499,
    },
    {
        name: "Apple Watch",
        category: "Watches",
        priceUSD: 499,
    },
];
let exchangeRate = 80;
function convertToINR(priceInUsd){
    return priceInUsd * exchangeRate;
}
const itemsInINR = items.map((item) =>({
    ...items,
    priceINR: convertToINR(item.priceUSD),
}));
console.log(itemsInINR);