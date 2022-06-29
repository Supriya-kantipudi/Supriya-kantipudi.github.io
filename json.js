var book = {title:"Core Java",author:"Herbert Shield",price:500,publisher:"Mcc GrowHILL",pages:1500}
console.log(book);
var jsonbook = JSON.stringify(book);
console.log(jsonbook);
var bookobj = JSON.parse(jsonbook);
for(ele in bookobj){
    console.log(ele + ":"+bookobj[ele])
}


