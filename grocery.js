// Exercise 11
// Move this variable to a json file and load the data in this js

var products = [
    {
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

//console.log(products[0].name) // output 'cooking oil'
//console.log(products[0]) // output {name: 'cooking oil', price: 10.5, type: 'grocery'}

var cartList = [];
var cart = [];
var subtotal = {
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
var total = 0;

// Exercise 1
function addToCartList(id) {
    // 1. Loop for to the array products to get the item to add to cart
 
    cartList.push(products[id-1]);
    console.log("addToCartList => ", cartList);
}

// Exercise 2
function cleanCart() {
    cartList.splice(0, cartList.length);
    console.log("cleanCart =>", cartList);

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
    for (let i = 0; i < cartList.length; i++) {

        switch (cartList[i].type) {
            case 'grocery':
                subtotal.grocery.value = cartList[i].price + subtotal.grocery.value;
                break;

            case 'beauty':
                subtotal.beauty.value = cartList[i].price + subtotal.beauty.value;
                
                break;

            case 'clothes':
                subtotal.clothes.value = cartList[i].price + subtotal.clothes.value;
                
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
   cartList.forEach(product => {
    total += product.price
   }); 
   console.log(total);
}


// Exercise 5
function generateCart() {
    cart = [];
     for ( let i = 0; i < cartList.length; i++) {        
        let cartListId = cartList[i].name;
        let nuevo = {
           name: cartList[i].name,
           price: cartList[i].price,
           type: cartList[i].type,
           quantity: 1,
           subtotal: cartList[i].price,
           subtotalWithDiscount: 0,
    }
};
    if(cart.length){
        let indexOfItemInCart = giveIndexIfExistItemInCart(cartListId)
        if (indexOfItemInCart >= 0){
            cart.push()
            cart[indexOfItemInCart].quantity = cart[indexOfItemInCart].quantity + 1;
            cart[indexOfItemInCart].subtotal = cart[indexOfItemInCart].subtotal + cart[indexOfItemInCart].price;
        }else{
            cart.push(nuevo);
        }
        }else {
            cart.push (nuevo);
        }

    }

    console.log(cart);
    const giveIndexIfExistItemInCart = (itemName) => {
        for (let j = 0; j < cart.length; j++) {
            if (cart[j].name === itemName) {
             return j
        }
        return -1
    }
}
 

// Exercise 6
function applyPromotionsCart(cartList) {
    let cookingOil = 10.5
    console.log(cart)
    for (let i = 0; i < cart.length; i++) {
        // compruebo mediante if si tengo el producto
        console.log(cookingOil)
        if (cart[i].name === 'cooking Oil') {
              if (cookingOil.quantity >= 3){
                cart[i].subtotalWithDiscount = 10 * cart[i].quantity
              }
        }
        
    }
    
}       
     
 

  


// Exercise 7
function apply() {
    // Apply promotions to each item in the array "cart"
  
        

}


// Exercise 8
function addToCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    addToCartList(id)
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
