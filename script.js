// Function to handle the rating system
function rateRecipe(rating) {
    document.getElementById('rating-message').innerHTML = `Thank you for rating this recipe: ${rating} stars!`;
    // Add your logic here to save the rating in your database or do any other required actions.
}

// Function to handle adding to favorites
function addToFavorites() {
    document.getElementById('favorites-message').innerHTML = "Recipe added to favorites!";
    // Add your logic here to save the recipe as a favorite for the user.
}
