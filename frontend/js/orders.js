function loadOrders(){

const orders =
JSON.parse(
localStorage.getItem("orders")
) || [];

const container =
document.getElementById(
"ordersContainer"
);

container.innerHTML = "";

if(orders.length === 0){

container.innerHTML =
"<h3>No Orders Found</h3>";

return;

}

orders.forEach(order=>{

container.innerHTML += `

<div class="card">

<div class="card-body">

<h3>
Order ID :
${order.id}
</h3>

<p>
Date :
${order.date}
</p>

<p>
Customer :
${order.fullname}
</p>

<p>
Total :
₹${order.total}
</p>

<p>
Status :
${order.status}
</p>

</div>

</div>

`;

});

}

loadOrders();