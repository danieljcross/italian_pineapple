// Select the list and buttons
const cartList = document.getElementById("cart-list");
const addItemButton = document.getElementById("add-item");

// Add item functionality
addItemButton.addEventListener("click", () => {
    const newItem = document.createElement("li"); // Create a new <li> element
    const deleteButton = document.createElement("button"); // Create a delete button

    // Set content for the list item and button
    newItem.textContent = `Item ${cartList.children.length + 1}`;
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "10px"; // Add some spacing

    // Append the delete button to the list item
    newItem.appendChild(deleteButton);

    // Append the new list item to the cart list
    cartList.appendChild(newItem);

    // Add event listener to delete button to remove the list item
    deleteButton.addEventListener("click", () => {
        cartList.removeChild(newItem);
    });
});

