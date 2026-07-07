function loadCart(){

const cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

const container =
document.getElementById(
"cartContainer"
);

container.innerHTML = "";

let total = 0;

cart.forEach((item,index)=>{

let subtotal =
item.price * item.quantity;

total += subtotal;

container.innerHTML += `

<div class="card">

<div class="card-body">

<h3>${item.name}</h3>

<p>Price : ₹${item.price}</p>

<p>
Quantity :

<button
onclick="decreaseQuantity(${index})">
-
</button>

${item.quantity}

<button
onclick="increaseQuantity(${index})">
+
</button>

</p>

<p>
Subtotal :
₹${subtotal}
</p>

<button
class="btn btn-primary"
onclick="removeItem(${index})">
Remove
</button>

</div>

</div>

`;

});

document.getElementById(
"grandTotal"
).innerHTML =
"Grand Total : ₹" + total;

}

function increaseQuantity(index){

let cart =
JSON.parse(
localStorage.getItem("cart")
);

cart[index].quantity++;

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

loadCart();

}

function decreaseQuantity(index){

let cart =
JSON.parse(
localStorage.getItem("cart")
);

if(cart[index].quantity > 1){

cart[index].quantity--;

}

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

loadCart();

}

function removeItem(index){

let cart =
JSON.parse(
localStorage.getItem("cart")
);

cart.splice(index,1);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

loadCart();

}

loadCart();