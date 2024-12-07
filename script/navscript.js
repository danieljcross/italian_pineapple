// navscript.js
document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('open');
    document.getElementById('nav').classList.toggle('open');
});

{/* <p class="about">Welcome to Pineapple Paradise, where the sunny sweetness of pineapple meets the savory perfection of pizza! Here at our vibrant eatery, we believe in celebrating the unexpected harmony between tropical fruit and pizza crust, bringing you a slice of sunshine with every bite. Whether you’re a devoted fan of the classic Hawaiian or you’re daring enough to try something new, we’ve crafted a menu full of deliciously bold combinations that elevate pineapple to its rightful place as a pizza topping champion. From sweet and smoky to tangy and savory, our pizzas are made with the finest ingredients, all prepared with a dash of creativity and a whole lot of love. So grab a slice, kick back, and let us transport you to the sweet, sunny side of pizza paradise!</p> */}


/*
Menu Page
*/


// Handle hamburger menu toggling
document.getElementById('hamburger').addEventListener('click', function () {
    this.classList.toggle('open');
    document.getElementById('nav').classList.toggle('open');
});

// Initialize cart from sessionStorage or create a new one
let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

// Function to add a pizza to the cart
function addToCart(pizza) {
    cart.push(pizza);
    sessionStorage.setItem('cart', JSON.stringify(cart)); // Save the updated cart to sessionStorage
    alert(`${pizza.title} has been added to your cart!`);
}

// Sample data for pizzas
const pizzas = [
    { title: "Hawaiian Classic", toppings: ["Pineapple", "Ham", "Cheese"], image: "images/image1.jpg" },
    { title: "Tropical BBQ", toppings: ["Pineapple", "BBQ Chicken", "Red Onion"], image: "images/image2.jpg" },
    { title: "Island Delight", toppings: ["Pineapple", "Bacon", "Jalapeños"], image: "images/image3.jpg" },
    { title: "Mango Madness", toppings: ["Pineapple", "Mango", "Chili Flakes"], image: "images/image4.jpg" },
    { title: "Sweet Heat", toppings: ["Pineapple", "Pepperoni", "Hot Sauce"], image: "images/image5.jpg" },
    { title: "Veggie Tropical", toppings: ["Pineapple", "Bell Peppers", "Olives"], image: "images/image6.jpg" },
    { title: "Aloha Special", toppings: ["Pineapple", "Sausage", "Spinach"], image: "images/image7.jpg" },
    { title: "Sunshine Supreme", toppings: ["Pineapple", "Feta Cheese", "Basil"], image: "images/image8.jpg" },
];

// Dynamically generate the menu items
const menuContainer = document.getElementById('menu-container');
if (menuContainer) {
    pizzas.forEach((pizza, index) => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <img src="${pizza.image}" alt="${pizza.title}">
            <h3>${pizza.title}</h3>
            <ul>${pizza.toppings.map(topping => `<li>${topping}</li>`).join('')}</ul>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;
        menuContainer.appendChild(menuItem);
    });
}

// Expose the addToCart function globally (required for inline event handlers)
window.addToCart = function (index) {
    const pizza = pizzas[index];
    addToCart(pizza);
};
