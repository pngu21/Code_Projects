// Product Data
const products = [
    { id: 1, name: "iPhone 16", price: 14999.0, image: "images/iphone16.jpg" },
    { id: 2, name: "Samsung ZFlip", price: 24000.0, image: "images/samsungzflip.webp" },
    { id: 3, name: "Beats", price: 3000.0, image: "images/beats.jpg" },
    { id: 4, name: "Dell Laptop", price: 12000.0, image: "images/dell.jpg" },
    { id: 5, name: "iMac Pro", price: 100000.0, image: "images/imacpro.webp" },
    { id: 6, name: "GoPro Karma", price: 5000.0, image: "images/goprokarma.jpeg" },
  ];
  
  // Add Product Cards Dynamically
  const productsContainer = document.getElementById("products");
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.dataset.id = product.id;
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>R${product.price.toFixed(2)}</p>
      <button class="add-to-cart">Add to Cart</button>
    `;
    productsContainer.appendChild(productCard);
  });
  
  // Select elements are the attribuets displayed when the cart sidebar opens as well as when it is closed it deplays in the right top corner
  const cartToggle = document.getElementById("cart-toggle");
  const closeCart = document.getElementById("close-cart");
  const cartPanel = document.getElementById("cart-panel");
  const cartItemsList = document.getElementById("cart-items");
  const clearCartBtn = document.getElementById("clear-cart");
  const checkoutBtn = document.getElementById("checkout");
  const cartTotal = document.getElementById("cart-total");
  const cartCount = document.getElementById("cart-count");
  const overlay = document.getElementById("overlay");
  
  // Cart state
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  // Utility Functions that allow the products to be added to the cart and for the total of items to be counted and totaled
  const calculateTotal = () =>
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  
  const updateCartDisplay = () => {
    cartItemsList.innerHTML = "";
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${item.name} - R${item.price} x ${item.quantity}
        <button data-index="${index}" class="remove-item">❌</button>
      `;
      cartItemsList.appendChild(li);
    });
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartTotal.textContent = calculateTotal();
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  
  const addToCart = (id, name, price) => {
    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ id, name, price, quantity: 1 });
    }
    updateCartDisplay();
  };
  
  const removeFromCart = (index) => {
    cart.splice(index, 1);
    updateCartDisplay();
  };
  
  // Event Listeners for the cart sidebar
  cartToggle.addEventListener("click", () => {
    cartPanel.classList.toggle("show");
    overlay.classList.toggle("show");
  });
  
  closeCart.addEventListener("click", () => {
    cartPanel.classList.remove("show");
    overlay.classList.remove("show");
  });
  
  overlay.addEventListener("click", () => {
    cartPanel.classList.remove("show");
    overlay.classList.remove("show");
  });
  
  // Add event listeners to dynamically created product cards
  productsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
      const card = e.target.closest(".product-card");
      const id = parseInt(card.dataset.id, 10);
      const name = card.querySelector("h2").textContent;
      const price = parseFloat(card.querySelector("p").textContent.replace("R", ""));
      addToCart(id, name, price);
    }
  });
  
  cartItemsList.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-item")) {
      const index = e.target.dataset.index;
      removeFromCart(index);
    }
  });
  
  clearCartBtn.addEventListener("click", () => {
    cart = [];
    updateCartDisplay();
  });
  
  checkoutBtn.addEventListener("click", () => {
    alert(`Checkout complete! Total: R${calculateTotal()}`);
    cart = [];
    updateCartDisplay();
  });
  
  // Initial render
  updateCartDisplay();
  