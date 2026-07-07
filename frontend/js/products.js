let products = [];

/* FETCH PRODUCTS FROM MYSQL */

fetch("http://localhost:3000/api/products")
.then(response => response.json())
.then(data => {

    products = data;

    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );

    loadProducts();

})
.catch(error => {
    console.log("Error:", error);
});

/* LOAD PRODUCTS */

function loadProducts(){

    const container =
    document.getElementById(
        "productContainer"
    );

    if(!container) return;

    container.innerHTML = "";

    products.forEach(product => {

        container.innerHTML += `

        <div class="card">

            <img
            src="${product.image}"
            alt="${product.name}">

            <div class="card-body">

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <p class="price">
                ₹${product.price}
                </p>

                <button
                class="btn btn-success"
                onclick="addToCart(${product.id})">
                Add To Cart
                </button>

                <a
                href="product.html?id=${product.id}"
                class="btn btn-primary">
                View Details
                </a>

            </div>

        </div>

        `;

    });

}

/* SEARCH PRODUCTS */

function searchProducts(){

    const searchInput =
    document.getElementById(
        "searchInput"
    );

    if(!searchInput) return;

    let input =
    searchInput.value
    .toLowerCase();

    let cards =
    document.querySelectorAll(
        ".card"
    );

    cards.forEach(card => {

        let title =
        card.querySelector("h3")
        .innerText
        .toLowerCase();

        if(title.includes(input)){

            card.style.display =
            "block";

        }else{

            card.style.display =
            "none";

        }

    });

}

/* ADD TO CART */

function addToCart(id){

    let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    let product =
    products.find(
        p => p.id === id
    );

    let existing =
    cart.find(
        item => item.id === id
    );

    if(existing){

        existing.quantity += 1;

    }else{

        cart.push({
            ...product,
            quantity:1
        });

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(
        "Product Added To Cart"
    );

}

/* PRODUCT DETAILS PAGE */

const productDetails =
document.getElementById(
    "productDetails"
);

if(productDetails){

    const params =
    new URLSearchParams(
        window.location.search
    );

    const productId =
    parseInt(
        params.get("id")
    );

    fetch(
        "http://localhost:3000/api/products"
    )
    .then(response => response.json())
    .then(data => {

        const product =
        data.find(
            item =>
            item.id === productId
        );

        if(product){

            productDetails.innerHTML = `

            <div class="card">

                <img
                src="${product.image}"
                alt="${product.name}">

                <div class="card-body">

                    <h2>${product.name}</h2>

                    <p>${product.description}</p>

                    <h3 class="price">
                    ₹${product.price}
                    </h3>

                    <button
                    class="btn btn-success"
                    onclick="addToCart(${product.id})">
                    Add To Cart
                    </button>

                    <a
                    href="cart.html"
                    class="btn btn-primary">
                    Go To Cart
                    </a>

                </div>

            </div>

            `;

        }else{

            productDetails.innerHTML = `

            <h2>
            Product Not Found
            </h2>

            <br>

            <a
            href="index.html"
            class="btn btn-primary">
            Back To Home
            </a>

            `;

        }

    })
    .catch(error => {

        console.log(error);

        productDetails.innerHTML =

        `<h2>Error Loading Product</h2>`;

    });

}