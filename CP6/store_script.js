// Sample products
const products = [
    { id: 1, name: "iPhone 15 Pro Max", price: 22999.99, image: "https://via.placeholder.com/200" },
    { id: 2, name: "Dell Laptop", price: 12999.99, image: "https://via.placeholder.com/200" },
    { id: 3, name: "Airpods", price: 4999.99, image: "https://via.placeholder.com/200" },
    { id: 4, name: "Apple watch", price: 1099.99, image: "https://via.placeholder.com/200" },
    { id: 5, name: "Samsung Tablet", price: 599.99, image: "https://via.placeholder.com/200" },
    { id: 6, name: "iMac Pro", price: 40999.99, image: "https://via.placeholder.com/200" },
    { id: 7, name: "Beats Headphones", price: 2999.99, image: "https://via.placeholder.com/200" },
    { id: 8, name: "GoPro Drone", price: 5999.99, image: "https://via.placeholder.com/200" },
];

// DOM Elements
const productContainer = document.getElementById("product-container");
const cartIcon = document.getElementById("cart-icon");
const cartPanel = document.getElementById("cart-panel");
const cartItemsList = document.getElementById("cart-items");
const clearCartButton = document.getElementById("clear-cart");

// Initialize cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Display products
function renderProducts() {
    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button data-id="${product.id}">Add to Cart</button>
        `;
        productContainer.appendChild(productCard);
    });
}

// Update cart in local storage and UI
function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// Render cart
function renderCart() {
    cartItemsList.innerHTML = "";
    cart.forEach((item) => {
        const cartItem = document.createElement("li");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
            <button data-id="${item.id}">Remove</button>
        `;
        cartItemsList.appendChild(cartItem);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    const existingItem = cart.find((item) => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter((item) => item.id !== productId);
    updateCart();
}

// Clear all items from cart
function clearCart() {
    cart = [];
    updateCart();
}

// Event listeners
document.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        const id = parseInt(e.target.getAttribute("data-id"));
        if (e.target.textContent === "Add to Cart") {
            addToCart(id);
        } else if (e.target.textContent === "Remove") {
            removeFromCart(id);
        }
    }
});

cartIcon.addEventListener("click", () => {
    cartPanel.classList.toggle("open");
});

clearCartButton.addEventListener("click", clearCart);

// Initial render
renderProducts();
renderCart();
