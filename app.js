// List of demo products
const products = [
    {
        id: 1,
        name: "Ganesh Murti",
        price: 799,
        image: "images/ganesh.jpg"
    },
    {
        id: 2,
        name: "Laxmi Murti",
        price: 899,
        image: "images/laxmi.jpg"
    },
    {
        id: 3,
        name: "Shiv Murti",
        price: 999,
        image: "images/shiv.jpg"
    },
    {
        id: 4,
        name: "Hanuman Murti",
        price: 699,
        image: "images/hanuman.jpg"
    }
];

// Render products
function renderProducts() {
    const productsList = document.getElementById('products-list');
    productsList.innerHTML = '';
    products.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsList.appendChild(div);
    });
}

// Cart logic
let cart = [];

function addToCart(id) {
    const prod = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...prod, qty: 1 });
    }
    updateCartCount();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartCount();
    renderCart();
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.reduce((sum, item) => sum + item.qty, 0);
}

function renderCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItemsDiv.innerHTML = '';
    let total = 0;
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<em>Your cart is empty.</em>';
        cartTotal.textContent = '0';
        return;
    }
    cart.forEach(item => {
        total += item.price * item.qty;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            ${item.name} x ${item.qty} - ₹${item.price * item.qty}
            <button class="remove" onclick="removeFromCart(${item.id})">&times;</button>
        `;
        cartItemsDiv.appendChild(div);
    });
    cartTotal.textContent = total;
}

// Cart modal logic
document.getElementById('cart-btn').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('cart-modal').classList.add('active');
    renderCart();
});
document.getElementById('close-cart').onclick = () => {
    document.getElementById('cart-modal').classList.remove('active');
};

// Initial render
renderProducts();
updateCartCount();