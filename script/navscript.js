// navscript.js
document.getElementById('hamburger').addEventListener('click', function () {
    this.classList.toggle('open');
    document.getElementById('nav').classList.toggle('open');
});



/*
Shared Cart Functions
*/

const cartCounter = document.getElementById("cart-counter");
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Function to update the cart counter
function updateCartCounter() {
    if (cartCounter) {
        cartCounter.textContent = cartItems.length;
    }
}

// Function to save cart to localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Function to remove an item from the cart
function removeFromCart(pizzaId) {
    cartItems = cartItems.filter(item => item.id !== pizzaId);
    saveCartToLocalStorage();
    renderCartItems(); // Re-render cart items after removal
    updateCartCounter(); // Update the counter
}

// Function to render the cart items dynamically (used on the cart page)
function renderCartItems() {
    const cartList = document.getElementById("cart-list");

    if (cartList) {
        cartList.innerHTML = ""; // Clear current list

        if (cartItems.length === 0) {
            const emptyMessage = document.createElement("li");
            emptyMessage.textContent = "Your cart is empty.";
            cartList.appendChild(emptyMessage);
        } else {
            cartItems.forEach((item) => {
                const cartItem = document.createElement("li");
                cartItem.textContent = item.name;

                const removeButton = document.createElement("button");
                removeButton.textContent = "Remove";
                removeButton.style.marginLeft = "10px";
                removeButton.addEventListener("click", () => removeFromCart(item.id));

                cartItem.appendChild(removeButton);
                cartList.appendChild(cartItem);
            });
        }
    }
}



/*
Menu Page Functionality
*/

const pizzas = [
    { id: 1, name: "Hawaiian Classic", image: "images/Gemini_Generated_Image_6pcp8f6pcp8f6pcp.jpeg", ingredients: ["Pineapple", "Ham", "Mozzarella", "Tomato Sauce"] },
    { id: 2, name: "Tropical BBQ", image: "images/Gemini_Generated_Image_hs4f5fhs4f5fhs4f.jpeg", ingredients: ["BBQ Chicken", "Pineapple", "Red Onions", "BBQ Sauce"] },
    { id: 3, name: "Island Delight", image: "images/Gemini_Generated_Image_k8j0oik8j0oik8j0.jpeg", ingredients: ["Pineapple", "Bacon", "Jalapeños", "Mozzarella"] },
    { id: 4, name: "Mango Madness", image: "images/Gemini_Generated_Image_ki17maki17maki17.jpeg", ingredients: ["Pineapple", "Mango", "Chili Flakes", "Mozzarella"] },
    { id: 5, name: "Sweet Heat", image: "images/Gemini_Generated_Image_l8tb8gl8tb8gl8tb.jpeg", ingredients: ["Pineapple", "Pepperoni", "Hot Sauce", "Mozzarella"] },
    { id: 6, name: "Veggie Tropical", image: "images/Gemini_Generated_Image_nwopz4nwopz4nwop.jpeg", ingredients: ["Pineapple", "Bell Peppers", "Olives", "Tomato Sauce"] },
    { id: 7, name: "Aloha Special", image: "images/Gemini_Generated_Image_pxuzpmpxuzpmpxuz.jpeg", ingredients: ["Pineapple", "Sausage", "Spinach", "Mozzarella"] },
    { id: 8, name: "Sunshine Supreme", image: "images/Gemini_Generated_Image_rlvb0rrlvb0rrlvb.jpeg", ingredients: ["Pineapple", "Feta Cheese", "Basil", "Tomato Sauce"] }
];

const menuContainer = document.getElementById("menu-container");
const resetButton = document.getElementById("reset-button");

// Function to create pizza item HTML
function createPizzaItem(pizza) {
    const pizzaItem = document.createElement("div");
    pizzaItem.classList.add("pizza-item");

    const pizzaImage = document.createElement("img");
    pizzaImage.src = pizza.image;
    pizzaImage.alt = pizza.name;
    pizzaImage.style.width = "100%";
    pizzaImage.style.borderRadius = "8px";

    const pizzaTitle = document.createElement("h2");
    pizzaTitle.textContent = pizza.name;

    const pizzaIngredients = document.createElement("p");
    pizzaIngredients.textContent = pizza.ingredients.join(", ");

    const addButton = document.createElement("button");
    addButton.textContent = "Add to Cart";
    addButton.addEventListener("click", () => addToCart(pizza));

    pizzaItem.appendChild(pizzaImage);
    pizzaItem.appendChild(pizzaTitle);
    pizzaItem.appendChild(pizzaIngredients);
    pizzaItem.appendChild(addButton);

    return pizzaItem;
}

// Function to add a pizza to the cart
function addToCart(pizza) {
    if (!cartItems.some(item => item.id === pizza.id)) {
        cartItems.push({ id: pizza.id, name: pizza.name });
        saveCartToLocalStorage(); // Update localStorage
        updateCartCounter(); // Update cart counter
    }
}

// Function to reset the cart
function resetCart() {
    cartItems = [];
    saveCartToLocalStorage(); // Clear localStorage
    updateCartCounter();
    renderCartItems(); // Re-render cart if on cart page
}

// Render all pizzas
if (menuContainer) {
    pizzas.forEach((pizza) => {
        const pizzaElement = createPizzaItem(pizza);
        menuContainer.appendChild(pizzaElement);
    });
}

// Add event listener to reset button (only if it exists on the current page)
if (resetButton) {
    resetButton.addEventListener("click", resetCart);
}

// Update cart counter on page load
updateCartCounter();

// Render cart items if on cart page
renderCartItems();

// Listen for changes to localStorage
window.addEventListener("storage", () => {
    cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    renderCartItems();
    updateCartCounter();
});

