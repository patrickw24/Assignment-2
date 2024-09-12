function welcomeMessage(){

    console.log("This is the first exercise")
}


function sum(a, b){

    console.log(a + b)

}
sum(15, 20)


function areaRectangle( width, length){

    let area = width * length
    return area
}

let result= areaRectangle(5,5)
console.log(result)


let shoppingCart= [
 {item: "Book", price: 10, quantity: 2},
 {item: "Pen", price: 1, quantity: 5},
];

function totalCost(){

       return (shoppingCart[0].price * shoppingCart[0].quantity) + (shoppingCart[1].price * shoppingCart[1].quantity) 
    
}
console.log(totalCost())