document
.getElementById("checkoutForm")
.addEventListener(
"submit",
placeOrder
);

function placeOrder(e){

e.preventDefault();

const fullname =
document.getElementById(
"fullname"
).value;

const phone =
document.getElementById(
"phone"
).value;

const address =
document.getElementById(
"address"
).value;

const cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

if(cart.length === 0){

alert(
"Cart is Empty"
);

return;

}

let total = 0;

cart.forEach(item=>{

total +=
item.price *
item.quantity;

});

const order = {

id: Date.now(),

fullname,

phone,

address,

items: cart,

total,

status:"Pending",

date:
new Date()
.toLocaleString()

};

let orders =
JSON.parse(
localStorage.getItem("orders")
) || [];

orders.push(order);

localStorage.setItem(
"orders",
JSON.stringify(orders)
);

localStorage.removeItem(
"cart"
);

alert(
"Order Placed Successfully"
);

window.location.href =
"orders.html";

}