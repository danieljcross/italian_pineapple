// navscript.js
document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('open');
    document.getElementById('nav').classList.toggle('open');
});

{/* <p class="about">Welcome to Pineapple Paradise, where the sunny sweetness of pineapple meets the savory perfection of pizza! Here at our vibrant eatery, we believe in celebrating the unexpected harmony between tropical fruit and pizza crust, bringing you a slice of sunshine with every bite. Whether you’re a devoted fan of the classic Hawaiian or you’re daring enough to try something new, we’ve crafted a menu full of deliciously bold combinations that elevate pineapple to its rightful place as a pizza topping champion. From sweet and smoky to tangy and savory, our pizzas are made with the finest ingredients, all prepared with a dash of creativity and a whole lot of love. So grab a slice, kick back, and let us transport you to the sweet, sunny side of pizza paradise!</p> */}


/*
Menu Page
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
const cartCounter = document.getElementById("cart-counter");
const resetButton = document.getElementById("reset-button");
let cartItemCount = 0;

// Function to create pizza item HTML
function createPizzaItem(pizza) {
    const pizzaItem = document.createElement("div");
    pizzaItem.classList.add("pizza-item");

    const pizzaImage = document.createElement("img");
    pizzaImage.src = pizza.image;
    pizzaImage.alt = pizza.name;
    pizzaImage.style.width = "100%"; // Ensure the image fits within its container
    pizzaImage.style.borderRadius = "8px";

    const pizzaTitle = document.createElement("h2");
    pizzaTitle.textContent = pizza.name;

    const pizzaIngredients = document.createElement("p");
    pizzaIngredients.textContent = pizza.ingredients.join(", ");

    const addButton = document.createElement("button");
    addButton.textContent = "Add to Cart";
    addButton.addEventListener("click", () => {
        cartItemCount++;
        updateCartCounter();
    });

    pizzaItem.appendChild(pizzaImage);
    pizzaItem.appendChild(pizzaTitle);
    pizzaItem.appendChild(pizzaIngredients);
    pizzaItem.appendChild(addButton);

    return pizzaItem;
}

// Function to update the cart counter display
function updateCartCounter() {
    cartCounter.textContent = cartItemCount;
}

// Function to reset the cart
function resetCart() {
    cartItemCount = 0;
    updateCartCounter();
}

// Render all pizzas
pizzas.forEach((pizza) => {
    const pizzaElement = createPizzaItem(pizza);
    menuContainer.appendChild(pizzaElement);
});

// Add event listener to reset button
resetButton.addEventListener("click", resetCart);
