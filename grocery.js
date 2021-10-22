// Exercise 11
// Move this variable to a json file and load the data in this js

var products = [
  {
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
  },
  {
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
  },
  {
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];

//console.log(products[0].name) // output 'cooking oil'
//console.log(products[0]) // output {name: 'cooking oil', price: 10.5, type: 'grocery'}

var cartList = [];
var cart = [];
var subtotal = {
  grocery: {
    value: 0,
    discount: 0,
  },
  beauty: {
    value: 0,
    discount: 0,
  },
  clothes: {
    value: 0,
    discount: 0,
  },
};
var total = 0;

// Exercise 1
function addToCartList(id) {
    // 1. Loop for to the array products to get the item to add to cart
 
    cartList.push(products[id-1]);
    console.log("addToCartList => ", cartList);
}

// Exercise 2
function cleanCart() {
    cart.splice(0, cart.length);
    console.log("cleanCart =>", cart);

}

// Exercise 3
function calculateSubtotals() {
    subtotal  = {
        grocery: {
            value: 0, 
            discount: 0
        },
        beauty: {
            value: 0, 
            discount: 0
        },
        clothes: {
            value: 0, 
            discount: 0
        },
    };
    for (let i = 0; i < cart.length; i++) {

        switch (cart[i].type) {
            case 'grocery':
                subtotal.grocery.value = cart[i].price*cart[i].quantity + subtotal.grocery.value;
                break;

            case 'beauty':
                subtotal.beauty.value = cart[i].price*cart[i].quantity+ subtotal.beauty.value;
                
                break;

            case 'clothes':
                subtotal.clothes.value =cart[i].price*cart[i].quantity+ subtotal.clothes.value;
                
                break;

        
            default:
                break;
        }
        //console.log(cartList[i].price);
    }
    console.log(subtotal);
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
}

// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array
   total=0;
   cart.forEach(product => {
    total += product.price*product.quantity
   }); 
   console.log(total);
}
cart = [];
// Exercise 5
function generateCart(id) {
  
    let productI;
    let nuevo;
    productI=products[id-1]
    productName = productI.name;
     nuevo = {
           name: productI.name,
           price: productI.price,
           type: productI.type,
           quantity: 1,
           subtotal: productI.price,
           subtotalWithDiscount: 0,
         }
    
        if(cart.length){
            let indexOfItemInCart = giveIndexIfExistItemInCart(productName)
            if (indexOfItemInCart >= 0){
                cart[indexOfItemInCart].quantity = cart[indexOfItemInCart].quantity + 1;
                cart[indexOfItemInCart].subtotal = cart[indexOfItemInCart].subtotal + cart[indexOfItemInCart].price;
            }else{
                cart.push(nuevo);
            }
        }else {
            cart.push(nuevo);
        }
  

        console.log(cart);
    }

    const giveIndexIfExistItemInCart = (itemName) => {
        for (let j = 0; j < cart.length; j++) {
            if (cart[j].name === itemName) {
             return j
        }
    }
    return -1
}
 

// Exercise 6
function applyPromotionsCart() {
    
    let cookingOil = 10.5
    let instantCupcake = 5
    console.log(cart)
    for (let i = 0; i < cart.length; i++) {
        // compruebo mediante if si tengo el producto
        
        if (cart[i].name === 'cooking oil') {
              if (cart[i].quantity >= 3){
                cart[i].subtotalWithDiscount = 10 * cart[i].quantity
              }
              
        }
        if (cart[i].name === 'instante cupcake mixture') {
            if (cart[i].quantity >= 3){
              cart[i].subtotalWithDiscount =  cart[i].quantity * (instantCupcake * 2/3 )
            }
      }
        
    }
    
}       
   

// Exercise 7
function apply() {
  /* function addToCartList(id) {
        cartList.push(products[id-1]);
        console.log("addToCartList => ", cartList);
    }*/
}

// Exercise 8
function addToCart(id) {
  addToCartList(id);
}

// Exercise 9
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

// Exercise 10
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
}
